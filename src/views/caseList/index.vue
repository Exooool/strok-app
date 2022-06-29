<template>
  <div class="caseListPage">
    <!-- 病例筛选 -->
    <div class="caseFilter">
      <div>病例类型:</div>
      <el-select
        v-model="caseType"
        @change="caseTypeChangeHandler(caseType)"
        style="width: 150px"
      >
        <el-option
          v-for="item in case_type_choices"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        placeholder="随访状态选择"
        collapse-tags
        v-model="followUp"
        v-if="caseType === 1 || caseType === 100 || caseType === 2"
        style="width: 150px; margin-left: 10px"
      >
        <el-option
          v-for="item in followUpOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input
        style="width: 200px"
        v-model="inputData"
        placeholder="请输入患者姓名"
      ></el-input>
      <el-select
        v-model="SearchTimeSelect"
        v-if="caseType === 1 || caseType === 100 || caseType === 2"
        style="width: 120px; margin-left: 10px"
      >
        <el-option label="发病时间" value="1"> </el-option>
        <el-option label="出院时间" value="2"> </el-option>
        <el-option label="登记时间" value="3"> </el-option>
      </el-select>
      <el-date-picker
        v-model="selectTime[0]"
        type="date"
        placeholder="选择开始日期"
        @calendar-change="verifyDate()"
        style="width: 50%"
      >
      </el-date-picker>

      <el-date-picker
        v-model="selectTime[1]"
        type="date"
        placeholder="选择结束日期"
        @calendar-change="verifyDate()"
        style="width: 50%"
      >
      </el-date-picker>
      <el-button
        type="primary"
        @click="handleCurrentChange()"
        style="margin-left: 10px"
        >查询</el-button
      >
      <el-button
        class="anniu"
        v-if="role === 99 || role === 9"
        type="primary"
        @click="exportExcel()"
        style="margin-left: 10px"
      >
        导出数据表
      </el-button>
    </div>
    <div class="listContent">
      <CaseCard
        v-for="(item, index) in administratorsDatalist"
        :key="index"
        :name="item.Name"
        :sex="item.Sex"
        :age="item.Age"
        :time="item.InputTime"
        :type="item.EmrType"
        :status="item.status_id"
        :visitStatus90="item.VisitStatus90"
        :visitStatus180="item.VisitStatus180"
      ></CaseCard>
      <div v-if="administratorsDatalist.length === 0">未查询到数据</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ElMessage } from "element-plus";
// 病例卡片
import CaseCard from "./components/caseCard.vue";
const axios = require("axios");

export default defineComponent({
  components: {
    CaseCard,
  },
  mounted() {
    if (this.role === 99) {
      this.MGetCaseList();
    }
    // else if (this.caseType === 1 || this.caseType === 2 || this.caseType === 100)
    else {
      this.getStrokeMapInfoCaseList();
    }
  },
  methods: {
    completeStatus: function (item) {
      console.info(item);
      if (
        item.info1_no_complete == 0 &&
        item.info2_no_complete == 0 &&
        item.info3_no_complete == 0 &&
        item.info4_no_complete == 0 &&
        item.info5_no_complete == 0
      ) {
        return 0; //完成所有必填项
      } else if (
        item.info1_no_complete == 0 &&
        item.info2_no_complete == 0 &&
        item.info3_no_complete == 0
      ) {
        return 1; //完成在院信息必填项
      } else {
        return 9; //未完成必填项
      }
    },
    completeStatusStr: function (item) {
      let str = "";
      if (
        item.info1_no_complete == 0 &&
        item.info2_no_complete == 0 &&
        item.info3_no_complete == 0
      ) {
        if (item.info4_no_complete > 0)
          str = "90天随访未完成项为：" + item.info4_no_complete + ",";
        if (item.info5_no_complete > 0)
          str += "180天随访未完成项为：" + item.info5_no_complete;
      } else {
        if (item.info1_no_complete > 0)
          str = "在院信息1未完成项为：" + item.info1_no_complete + ",";
        if (item.info2_no_complete > 0)
          str += "在院信息2未完成项为：" + item.info2_no_complete + ",";
        if (item.info3_no_complete > 0)
          str += "出院信息未完成项为：" + item.info3_no_complete + ",";
        if (item.info4_no_complete > 0)
          str += "90天随访未完成项为：" + item.info4_no_complete + ",";
        if (item.info5_no_complete > 0)
          str += "180天随访未完成项为：" + item.info5_no_complete;
      }
      return str;
    },
    // 序号显示
    indexMethod(index) {
      return (
        (this.pageInfo.currentPage - 1) * this.pageInfo.pageSize + index + 1
      );
    },
    /**
     * 跳转病例详情页
     * @param id
     */
    // 跳转到病例详情页面
    detailInfo(id) {
      localStorage.setItem("currentPage", this.pageInfo.currentPage + "");
      this.$router.push(`/case-list/${this.caseType}/${id}`);
    },
    // 切换病例列表页面
    handleCurrentChange() {
      if (this.role === 99) {
        this.MGetCaseList();
      }
      // else if (this.caseType === 1 || this.caseType === 2 || this.caseType === 100)
      else {
        this.getStrokeMapInfoCaseList();
      }
      // else {
      //   this.getCaseList()
      // }
    },
    // 一些token的获取
    async preGetCaseList() {
      let reToken = window.localStorage.getItem("refresh").toString();
      reToken = reToken.replace('"', "").replace('"', "");
      const resrefresh = await axios.post("/api/auth/login/refresh/", {
        refresh: reToken,
      });
      localStorage.setItem(
        "access_token",
        JSON.stringify(resrefresh.data.access)
      );
      let access_token = window.localStorage.getItem("access_token").toString();
      access_token = access_token.replace('"', "").replace('"', "");
      this.token = "Bearer" + " " + access_token;
    },
    // 导出Excel表
    exportExcel() {
      // if(this.selectTime !== null) {

      // } else {
      //   window.location.href = '/peng/Emr/Export'
      // }
      window.location.href =
        "/peng/Emr/Export?EmrType=" +
        this.caseType +
        "&UserId=" +
        localStorage.getItem("user_pk") +
        "&WorkUnit=" +
        localStorage.getItem("work_unit");
    },
    // ########################################################################管理员函数
    // 99获取病例列表
    MGetCaseList() {
      let obj = {
        Page: 1,
        Limit: 12,
        Where: {
          EmrType: "",
          WorkUnit: "",
          VisitStatus: 0,
          PatientName: "",
          SearchTimeSelect: "",
          StartDate: "",
          EndDate: "",
        },
      };
      obj.Page = this.pageInfo.currentPage;
      obj.Where.EmrType = this.caseType + "";
      obj.Where.WorkUnit = localStorage.getItem("caseHospitalSelection");
      obj.Where.PatientName = this.inputData;
      obj.Where.VisitStatus = this.followUp ? this.followUp : 0;
      obj.Where.SearchTimeSelect = this.SearchTimeSelect;
      if (this.selectTime && this.selectTime.length > 1) {
        obj.Where.StartDate = this.selectTime[0];
        obj.Where.EndDate = this.selectTime[1];
      }
      console.log(obj);
      this.loading = true;
      axios({
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        url: "/peng/Emr/Page",
        data: JSON.stringify(obj),
      })
        .then((res) => {
          console.log(res);
          this.loading = false;
          this.administratorsDatalist = res.data.data;
          if (
            this.caseType !== 1 &&
            this.caseType !== 2 &&
            this.caseType !== 100
          ) {
            this.administratorsDatalist.forEach((item) => {
              item.Diagnosis = eval(item.Diagnosis)[0];
            });
          }
          this.pageInfo.total = res.data.total;
        })
        .catch(() => {
          this.loading = false;
          ElMessage.error("请求数据失败");
        });
    },
    // 非99获取病例列表
    async getStrokeMapInfoCaseList() {
      let obj = {
        Page: 1,
        Limit: 12,
        Where: {
          UserId: "",
          EmrType: "",
          WorkUnit: "",
          VisitStatus: 0,
          PatientName: "",
          SearchTimeSelect: "",
          StartDate: "",
          EndDate: "",
        },
      };
      obj.Page = this.pageInfo.currentPage;
      obj.Where.EmrType = this.caseType + "";
      obj.Where.WorkUnit = localStorage.getItem("work_unit");
      obj.Where.UserId = localStorage.getItem("user_pk");
      obj.Where.PatientName = this.inputData;
      obj.Where.SearchTimeSelect = this.SearchTimeSelect;
      obj.Where.VisitStatus = this.followUp ? this.followUp : 0;
      if (this.selectTime && this.selectTime.length > 1) {
        obj.Where.StartDate = this.selectTime[0];
        obj.Where.EndDate = this.selectTime[1];
      }
      console.log(obj);
      this.loading = true;
      axios({
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        url: "/peng/Emr/Page",
        data: JSON.stringify(obj),
      })
        .then((res) => {
          this.loading = false;
          this.administratorsDatalist = res.data.data;
          this.pageInfo.total = res.data.total;
        })
        .catch((e) => {
          console.info("错误：" + e);
          this.loading = false;
          ElMessage.error("请求数据失败");
        });
    },
    // 病例类型的切换
    caseTypeChangeHandler(_type) {
      // this.$nextTick(() => {
      //   this.$refs.pagination.internalCurrentPage = 1;
      // });
      this.$router.push(`/caseList/${_type}`);
      if (this.role === 99) {
        this.MGetCaseList();
      } else {
        this.getStrokeMapInfoCaseList();
      }
    },
    search() {
      this.newCaseList = [];
      if (this.formData.name === "") {
        this.newCaseList = this.caseList;
      } else {
        this.newCaseList = this.caseList.filter((item) => {
          return (
            item.name.includes(this.formData.name) |
            this.enums.sex[item.sex].includes(this.formData.name) |
            (item.age + "").includes(this.formData.name)
          );
        });
      }
      console.log(this.newCaseList);
    },
    // 删除前面2个表中病例
    async deleteThis(id) {
      if (this.strokeMapInfoList.length === 1) {
        this.$nextTick(() => {
          this.$refs.pagination.internalCurrentPage =
            this.$refs.pagination.internalCurrentPage - 1;
        });
      }
      let url = "/peng/StrokeMapInfo/Delete";
      switch (this.caseType) {
        case 3:
          url = "/peng/SichInfo/Delete";
          break;
        case 4:
          url = "/peng/AnRInfo/Delete";
          break;
        case 5:
          url = "/peng/AvmrInfo/Delete";
          break;
        case 6:
          url = "/peng/AnInfo/Delete";
          break;
        case 7:
          url = "/peng/AvmInfo/Delete";
          break;
        case 8:
          url = "/peng/EcsInfo/Delete";
          break;
        case 9:
          url = "/peng/IcsInfo/Delete";
          break;
        default:
      }
      let param = { id: id };
      console.info(param);
      const res = await axios.post(url, param);
      if (res.status === 200) {
        ElMessage.success("删除成功!");
        await this.getStrokeMapInfoCaseList();
      } else {
        ElMessage.error("删除失败!");
      }
    },
  },
  data() {
    return {
      SearchTimeSelect: "1",
      followUp: 0, //随访信息选择
      followUpOptions: [
        {
          value: 0,
          label: "随访选择",
        },
        {
          value: 1,
          label: "90天已随访",
        },
        {
          value: 2,
          label: "90天未随访",
        },
        {
          value: 3,
          label: "90天随访提醒",
        },
        {
          value: 4,
          label: "90天随访已超时",
        },
        {
          value: 5,
          label: "180天已随访",
        },
        {
          value: 6,
          label: "180天未随访",
        },
        {
          value: 7,
          label: "180天随访提醒",
        },
        {
          value: 8,
          label: "180天随访已超时",
        },
      ],
      inputData: "", // 搜索输入框绑定字段
      // 时间选择绑定值
      selectTime: [],
      // selectTime: [
      //   new Date(new Date().getTime() - 3600 * 1000 * 24 * 7).getFullYear() + '-' + (new Date(new Date().getTime() - 3600 * 1000 * 24 * 7).getMonth() * 1 + 1) + '-' + (new Date(new Date().getTime() - 3600 * 1000 * 24 * 7).getDate()),
      //   new Date().getFullYear() + '-' + (new Date().getMonth() * 1 + 1) + '-' + (new Date().getDate())
      // ],
      // 设置时间禁选
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      administratorsDatalist: [], //管理员渲染列表的数据
      role: localStorage.getItem("user_role") | null,
      pageInfo: {
        pageSize: 12,
        total: 0,
        currentPage: Number(localStorage.getItem("currentPage")) || 1,
      },
      token: null,
      formData: {
        name: "",
      },
      caseType: parseInt(this.$route.params.type),
      case_type_choices: [
        {
          value: 100,
          label: "缺血性脑血管病",
        },
        {
          value: 1,
          label: "短暂性脑缺血发作",
        },
        {
          value: 2,
          label: "脑梗死",
        },
        {
          value: 3,
          label: "自发性脑出血",
        },
        {
          value: 4,
          label: "动脉瘤破裂(AnR)",
        },
        {
          value: 5,
          label: "动静脉畸形破裂(AVMR)",
        },
        {
          value: 6,
          label: "动脉瘤未破裂(An)",
        },
        {
          value: 7,
          label: "动静脉畸形未破裂(AVM)",
        },
        {
          value: 8,
          label: "颅外动脉狭窄(ECS)",
        },
        {
          value: 9,
          label: "颅内动脉狭窄(ICS)",
        },
      ],
      enums: {
        sex: {
          1: "男",
          2: "女",
        },
        disease_type: {
          1: "短暂性脑缺血发作",
          2: "脑梗死",
          3: "自发性脑出血",
          4: "动脉瘤破裂（AnR）",
          5: "动静脉畸形破裂（AVMR）",
          6: "动脉瘤未破裂（An）",
          7: "动静脉畸形未破裂（AVM）",
          8: "颅外动脉狭窄（ECS）",
          9: "颅内动脉狭窄（ICS）",
        },
        diagnosis: {
          1: "自发性脑出血",
          2: "自发性蛛网膜下腔出血",
          3: "动静脉畸形破裂",
          4: "动脉瘤未破裂",
          5: "动静脉畸形未破裂",
          6: "颅外动脉狭窄",
          7: "颅内动脉狭窄",
        },
        arrivalWay: {
          1: "自行来院",
          2: "呼叫 120",
          3: "卒中单元",
          4: "院内病发",
          5: "转院",
          99: "其他",
        },
      },
      strokeMapInfoList: [],
      caseList: [],
      newCaseList: [],
      loading: false,
      timer: null,
      hos: null,
      hos_choices: [
        {
          value: 1,
          label: "全部",
        },
        {
          value: 2,
          label: "二院",
        },
        {
          value: 3,
          label: "医院3",
        },
        {
          value: 4,
          label: "医院4",
        },
      ],
    };
  },
  setup() {
    // todo
    return {};
  },
});
</script>

<style lang="scss" scoped>
.caseListPage {
  // 病例过滤
  .caseFilter {
    margin-bottom: 10px;
  }
  // 病例列表内容
  .listContent {
  }
}
</style>
