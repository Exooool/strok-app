<template>
  <div class="caseListPage" ref="caseListPage">
    <!-- 病例筛选 -->
    <div class="caseFilter" ref="caseFilter">
      <div class="filterOption">
        <!-- <div class="title">病例类型:</div> -->
        <div class="optionsRow">
          <el-select
            v-model="caseType"
            @change="caseTypeChangeHandler(caseType)"
            style="width: 150px; margin-right: 5px"
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
            style="width: 150px; margin-right: 10px"
          >
            <el-option
              v-for="item in followUpOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="optionsRow">
          <el-input
            style="width: 200px; margin-right: 5px"
            v-model="inputData"
            placeholder="请输入患者姓名"
          ></el-input>
          <div v-if="searchListSwitch" style="display: inline">
            <el-select
              v-model="SearchTimeSelect"
              v-if="caseType === 1 || caseType === 100 || caseType === 2"
              style="width: 120px; margin-right: 10px"
            >
              <el-option label="发病时间" value="1"> </el-option>
              <el-option label="出院时间" value="2"> </el-option>
              <el-option label="登记时间" value="3"> </el-option>
            </el-select>
          </div>
        </div>
        <div class="optionsRow" v-if="searchListSwitch">
          <el-date-picker
            v-model="selectTime[0]"
            type="date"
            placeholder="选择开始日期"
            @calendar-change="verifyDate()"
            style="width: 45%; margin-right: 10px"
          >
          </el-date-picker>

          <el-date-picker
            v-model="selectTime[1]"
            type="date"
            placeholder="选择结束日期"
            @calendar-change="verifyDate()"
            style="width: 45%"
          >
          </el-date-picker>
        </div>

        <el-button
          style="margin-right: 5px"
          type="primary"
          @click="getCaseList()"
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
        <div class="packUpBox" @click="changeSearchList()">
          <span>{{ searchListSwitch ? "收起" : "展开" }}</span>
          <el-icon>
            <ArrowUp v-if="searchListSwitch" /> <ArrowDown v-else />
          </el-icon>
        </div>
      </div>
    </div>
    <ul
      class="listContent"
      ref="listContent"
      v-infinite-scroll="scrollLoad"
      style="overflow: auto"
      :infinite-scroll-immediate="false"
      infinite-scroll-distance="20"
    >
      <CaseCard
        v-for="(item, index) in administratorsDatalist"
        :key="index"
        :name="item.Name"
        :id="item.Id"
        :sex="item.Sex"
        :age="item.Age"
        :time="item.InputTime"
        :type="item.EmrType"
        :status="item.status_id"
        :visitStatus90="item.VisitStatus90"
        :visitStatus180="item.VisitStatus180"
        @eventIsNum="deleteThis"
      ></CaseCard>
      <!-- 列表空展示 -->
      <el-empty v-if="administratorsDatalist.length === 0" description="空" />
      <!-- 列表加载展示 -->
      <div v-if="loading" v-loading="true"></div>
      <!-- 列表加载完末尾展示 -->
      <div v-if="noMore" class="noMore">没有更多了~</div>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ElMessage } from "element-plus";
// 病例卡片
import CaseCard from "./components/caseCard.vue";
import axios from "@/utils/request.js";

export default defineComponent({
  components: {
    CaseCard,
  },
  computed: {
    // 计算是否获取完所有数据
    noMore() {
      return this.administratorsDatalist.length === this.pageInfo.total;
    },
  },
  mounted() {
    // 初始化列表
    this.getCaseList();
    // 计算listContent的高度
    this.calculateHeight();
  },
  data() {
    return {
      SearchTimeSelect: "1",
      searchListSwitch: false,
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
        page: 1,
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
  methods: {
    scrollLoad() {
      if (
        this.pageInfo.total !== 0 &&
        Math.round(this.pageInfo.total / 12) >= this.pageInfo.page
      ) {
        this.loading = true;
        this.getCaseList();
        this.pageInfo.page += 1;
      }

      // console.log(this.pageInfo.page);
    },
    changeSearchList() {
      this.searchListSwitch = !this.searchListSwitch;
      this.$nextTick(function () {
        this.calculateHeight();
      });
    },
    // 计算listContent的高度
    calculateHeight() {
      const height =
        this.$refs.caseListPage.offsetHeight -
        this.$refs.caseFilter.offsetHeight +
        "px";
      this.$refs.listContent.style.height = height;
    },
    // 切换病例列表页面
    getCaseList() {
      if (this.role === 99) {
        this.MGetCaseList();
      }
      // else if (this.caseType === 1 || this.caseType === 2 || this.caseType === 100)
      else {
        this.getStrokeMapInfoCaseList();
      }
    },
    // 导出Excel表
    exportExcel() {
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
      obj.Page = this.pageInfo.page;
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
      obj.Page = this.pageInfo.page;
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
      // console.log(obj);
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
          if (this.pageInfo.page !== 1) {
            this.administratorsDatalist = this.administratorsDatalist.concat(
              res.data.data
            );
          } else {
            this.administratorsDatalist = res.data.data;
          }

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
      // 重置page页数为1
      this.pageInfo.page = 1;
      // 将滚动条重置
      this.$refs.listContent.scrollTop = 0;

      this.$router.push(`/caseList/${_type}`);
      if (this.role === 99) {
        this.MGetCaseList();
      } else {
        this.getStrokeMapInfoCaseList();
      }
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
});
</script>

<style lang="scss" scoped>
.caseListPage {
  height: 100%;
  box-sizing: border-box;
  position: relative;
  // 病例过滤
  .caseFilter {
    background-color: white;
    z-index: 100;
    padding: 10px 20px;
    .title {
      margin-bottom: 5px;
    }
    .optionsRow {
      display: inline-block;
      margin-bottom: 5px;
    }
  }
  // 病例列表内容
  .listContent {
    padding: 5px 20px;
    margin: 0;
    list-style: none;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  // 列表展开
  .packUpBox {
    display: inline;
  }

  .noMore {
    width: 100%;
    text-align: center;
    color: rgb(193, 193, 193);
  }
}
</style>
