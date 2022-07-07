/** * Created by Lv Cheng on 2022/2/21 * Notes 质控中心管理员首页 */
<template>
  <div class="quality-control-center-administrator">
    <div>
      <div class="content">
        <div class="date">
          <el-select
            v-model="diseaseSpecies"
            multiple
            collapse-tags
            style="width: 100%; margin-bottom: 10px"
            placeholder="请选择"
          >
            <el-option
              v-for="item in illnessOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select
            style="width: 100%; margin-bottom: 10px"
            v-model="SearchTimeSelect"
          >
            <el-option label="发病时间" value="1"> </el-option>
            <el-option label="出院时间" value="2"> </el-option>
            <el-option label="登记时间" value="3"> </el-option>
          </el-select>
          <div class="dateSelect">
            <div class="title">
              <span>开始日期</span>
              <span>结束日期</span>
            </div>
            <div class="picker">
              <el-date-picker
                v-model="time_range[0]"
                type="date"
                placeholder="选择开始日期"
                @calendar-change="verifyDate()"
                style="width: 45%"
              >
              </el-date-picker>

              <el-date-picker
                v-model="time_range[1]"
                type="date"
                placeholder="选择结束日期"
                @calendar-change="verifyDate()"
                style="width: 45%"
              >
              </el-date-picker>
            </div>
          </div>
          <el-button type="primary" @click="query">查询</el-button>
        </div>
        <div class="dataRender">
          <div class="left-top">
            <Ranking :data="chartData" v-if="chartData" />
          </div>
          <!-- <div class="right-top">
            <h3>脑血管病出院诊断数据统计</h3>
            <ul class="bottom-content">
              <li class="bottom-content-box">
                <span class="title">总人数</span>
                <span class="quantity">{{ allTotal }}</span>
              </li>
              <li
                class="bottom-content-box"
                v-for="item in listData"
                :key="item.EmrType"
              >
                <span class="title">{{ listDataForm[item.EmrType] }}</span>
                <span class="quantity">{{ item.Total }}</span>
              </li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import axios from "@/utils/request.js";
import Ranking from "../ranking/Ranking.vue";

export default defineComponent({
  components: {
    Ranking,
  },
  setup() {
    const data = reactive({
      SearchTimeSelect: "1",
      diseaseSpecies: ["1,2", "3", "4", "5", "6", "7", "8", "9"], // 病种绑定值  空值传过去代表查询所有
      // 病种下拉选项
      illnessOptions: [
        {
          value: "1,2",
          label: "短暂性脑缺血发作+脑梗死",
        },
        {
          value: "3",
          label: "自发性脑出血",
        },
        {
          value: "4",
          label: "动脉瘤破裂（AnR）",
        },
        {
          value: "5",
          label: "动静脉畸形破裂（AVMR）",
        },
        {
          value: "6",
          label: "动脉瘤未破裂（An）",
        },
        {
          value: "7",
          label: "动静脉畸形未破裂（AVM）",
        },
        {
          value: "8",
          label: "颅外动脉狭窄（ECS）",
        },
        {
          value: "9",
          label: "颅内动脉狭窄（ICS）",
        },
      ],
      activeName: "this-month",
      // 选择的时间绑定值
      time_range: [
        new Date(new Date().getTime() - 3600 * 1000 * 24 * 7).getFullYear() +
          "-" +
          (new Date(new Date().getTime() - 3600 * 1000 * 24 * 7).getMonth() *
            1 +
            1) +
          "-" +
          new Date(new Date().getTime() - 3600 * 1000 * 24 * 7).getDate(),
        new Date().getFullYear() +
          "-" +
          (new Date().getMonth() * 1 + 1) +
          "-" +
          new Date().getDate(),
      ],
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
      chartData: null, // echart数据
      // 右边列表数据
      listData: [],
      allTotal: null,
      // 右侧列表数据返回查表
      listDataForm: [
        "",
        "短暂性脑缺血发作",
        "脑梗死",
        "自发性脑出血",
        "动脉瘤破裂",
        "动静脉畸形破裂",
        "动脉瘤未破裂",
        "动静脉畸形未破裂",
        "颅外动脉狭窄",
        "颅内动脉狭窄",
      ],
    });
    return {
      ...toRefs(data),
    };
  },
  methods: {
    // 查询按钮
    query() {
      Promise.all([this.selectRanking(), this.selectData()]).then((res) => {
        this.chartData = res[0].data.data;
        this.listData = res[1].data.data;

        this.allTotal = res[1].data.total;
      });
    },
    // 查询医院录入排名
    async selectRanking() {
      let obj = {
        Where: {
          EmrType: "",
          WorkUnit: "",
          SearchTimeSelect: this.SearchTimeSelect,
          StartDate: "",
          EndDate: "",
        },
      };
      let EmrType = "";
      for (let i = 0; i < this.diseaseSpecies.length; i++) {
        EmrType += this.diseaseSpecies[i] + ",";
      }
      if (this.time_range !== null) {
        obj.Where.StartDate = this.time_range[0];
        obj.Where.EndDate = this.time_range[1];
      }
      EmrType = EmrType.slice(0, EmrType.length - 1);
      obj.Where.EmrType = EmrType;
      return axios({
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        url: "/peng/Statistic/Record",
        data: JSON.stringify(obj),
      });
    },
    // 查询脑卒中数据
    async selectData() {
      let obj = {
        Where: {
          Role: 1,
          UserName: "",
          EmrType: "",
          WorkUnit: "",
          SearchTimeSelect: this.SearchTimeSelect,
          StartDate: "",
          EndDate: "",
        },
      };
      let EmrType = "";
      for (let i = 0; i < this.diseaseSpecies.length; i++) {
        EmrType += this.diseaseSpecies[i] + ",";
      }
      if (this.time_range !== null) {
        obj.Where.StartDate = this.time_range[0];
        obj.Where.EndDate = this.time_range[1];
      }
      EmrType = EmrType.slice(0, EmrType.length - 1);
      obj.Where.EmrType = EmrType;
      return axios({
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        url: "/peng/Statistic/Stroke",
        data: JSON.stringify(obj),
      });
    },
  },
  mounted() {
    this.query();
  },
});
</script>

<style scoped lang="scss">
.quality-control-center-administrator {
  .content {
    .date {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      .dateSelect {
        display: flex;
        flex-direction: column;
        .title {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          span {
            display: inline-block;
            width: 45%;
          }
        }
        .picker {
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .dataRender {
      padding: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .left-top {
        width: 100%;
        overflow: scroll;
        background: #fff;
        height: 1400px;
      }
      .right-top {
        width: 28%;
        box-sizing: border-box;
        background: #fff;
        padding: 20px 30px;
        height: 1400px;
        h3 {
          display: inline-block;
          font: bold 20px/1 "PingFang SC";
          color: #666;
          margin-bottom: 10px;
        }
        .bottom-right {
          float: right;
        }
        .bottom-content {
          .bottom-content-box {
            box-sizing: border-box;
            width: 100%;
            border-radius: 8px;
            display: flex;
            background: #f8f9fb;
            margin-top: 20px;
            padding: 24px;
            .title {
              font: 900 18px/1 "";
              width: 80%;
              height: 60px;
              line-height: 20px;
              display: flex;
              align-items: center;
            }
            .quantity {
              display: inline-block;
              color: #426bba;
              font: 400 40px/60px "Impact";
              width: 50%;
              text-align: right;
            }
          }
          .bottom-content-box:first-child {
            background: #426bba;
            margin-left: 0;
            color: #ffffff;
            padding: 32px;
            border-radius: 8px;
            .quantity {
              display: inline-block;
              color: #fff;
              font: 400 40px/60px "Impact";
            }
          }
        }
      }
    }
  }
}
</style>
