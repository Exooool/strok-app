<template>
  <div class="keyborderPage">
    <!-- 近一个月录入统计图表 -->
    <div class="title">
      <h3 class="title">最近一个月病例录入统计</h3>
    </div>
    <div id="echart" class="echartsBox"></div>

    <!-- 脑血管病出院诊断数据统计 -->
    <div class="dataStatistics">
      <h3>脑血管病出院诊断数据统计</h3>
      <div class="infoSelect">
        <div
          style="
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
          "
        >
          <el-select v-model="data.SearchTimeSelect" style="">
            <el-option label="发病时间" value="1"> </el-option>
            <el-option label="出院时间" value="2"> </el-option>
            <el-option label="登记时间" value="3"> </el-option>
          </el-select>
          <el-button type="primary" @click="reqZData">查询</el-button>
        </div>

        <div class="dateSelect">
          <div class="title">
            <span>开始日期</span>
            <span>结束日期</span>
          </div>
          <div class="picker">
            <el-date-picker
              v-model="data.time_range[0]"
              type="date"
              placeholder="选择开始日期"
              @calendar-change="verifyDate()"
              style="width: 45%"
            >
            </el-date-picker>

            <el-date-picker
              v-model="data.time_range[1]"
              type="date"
              placeholder="选择结束日期"
              @calendar-change="verifyDate()"
              style="width: 45%"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <ul class="bottom-content">
        <li class="bottom-content-box">
          <span class="title">总人数</span>
          <span class="quantity">{{ data.dataSum }}</span>
        </li>
        <li
          class="bottom-content-box"
          v-for="item in data.dataList"
          :key="item.EmrType"
        >
          <span class="title">{{ data.listDataForm[item.EmrType] }}</span>
          <span class="quantity">{{ item.Total }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from "vue";
import * as echarts from "echarts";
import { ElMessage } from "element-plus";
import axios from "@/utils/request.js";

export default defineComponent({
  setup() {
    // echarts 坐标数据
    const data = reactive({
      options: false,
      xData: [],
      yData: [],
      SearchTimeSelect: "1",
      time_range: [
        new Date(new Date().getTime() - 3600 * 1000 * 24 * 30).getFullYear() +
          "-" +
          (new Date(new Date().getTime() - 3600 * 1000 * 24 * 30).getMonth() *
            1 +
            1) +
          "-" +
          new Date(new Date().getTime() - 3600 * 1000 * 24 * 30).getDate(),
        new Date().getFullYear() +
          "-" +
          (new Date().getMonth() * 1 + 1) +
          "-" +
          new Date().getDate(),
      ], //时间绑定值
      dataSum: null, // 总数
      list: [
        {
          id: 2,
          title: "短暂性脑缺血发作",
          number: "10",
        },
        {
          id: 3,
          title: "脑梗死",
          number: "20",
        },
        {
          id: 4,
          title: "自发性脑出血",
          number: "10",
        },
        {
          id: 5,
          title: "自发性蛛网膜下腔出血",
          number: "20",
        },
        {
          id: 6,
          title: "其他疾病",
          number: "20",
        },
        {
          id: 7,
          title: "其他疾病",
          number: "20",
        },
        {
          id: 8,
          title: "其他疾病",
          number: "20",
        },
        {
          id: 9,
          title: "其他疾病",
          number: "20",
        },
        {
          id: 10,
          title: "其他疾病",
          number: "20",
        },
      ],
      dataList: [], // 列表数据
      // 表数据返回查表
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
      // 时间限制
      pickerOptions: {
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
    });

    // echarts绘图
    const drowEchart = (echart) => {
      // console.log(echart);
      // 在绘图之前删除在该元素上的echarts实例
      echart.removeAttribute("_echarts_instance_");
      var myChart = echarts.init(echart);
      var option;
      option = {
        xAxis: {
          type: "category",
          data: data.xData,
        },
        yAxis: {
          type: "value",
        },
        tooltip: {
          trigger: "axis",
          formatter: `日期: {b}<br/>数值: {c}`,
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 40,
          },
          {
            type: "slider",
          },
        ],
        // legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "15%",
          containLabel: true,
        },
        series: [
          {
            data: data.yData,
            type: "bar",
            barMinHeight: "2",
            // 柱子顶部加值
            label: {
              show: true,
              position: "top",
              valueAnimation: true,
            },
          },
        ],
      };
      option && myChart.setOption(option);
    };

    // 获取近一个月病例录入统计
    const reqEchartData = (echart) => {
      let obj = {
        Where: {
          UserName: "wuleqi",
          WorkUnit: "",
          SearchTimeSelect: data.SearchTimeSelect,
          StartDate: "",
          EndDate: "",
        },
      };
      obj.Where.UserName = localStorage.getItem("username");
      obj.Where.StartDate =
        new Date(new Date().getTime() - 3600 * 1000 * 24 * 30).getFullYear() +
        "-" +
        (new Date(new Date().getTime() - 3600 * 1000 * 24 * 30).getMonth() * 1 +
          1) +
        "-" +
        new Date(new Date().getTime() - 3600 * 1000 * 24 * 30).getDate();
      obj.Where.EndDate =
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() * 1 + 1) +
        "-" +
        new Date().getDate();

      console.log(obj);

      // request({
      //     // headers: {
      //     //     'Content-Type': 'application/json'
      //     // },
      //     method: 'post',
      //     url: '/peng/Statistic/Day',
      //     data: obj
      //     // data: JSON.stringify(obj)
      // })
      axios({
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        url: "/peng/Statistic/Day",
        data: JSON.stringify(obj),
      })
        .then((res) => {
          console.log(res);
          let y = [];
          let x = [];
          res.data.data.forEach((item) => {
            y.push(item.Total);
            x.push(item.MDate.slice(5, 7) * 1 + "." + item.MDate.slice(8) * 1);
          });
          data.yData = y;
          data.xData = x;
          drowEchart(echart);
        })
        .catch(() => {
          ElMessage({ type: "error", message: "请求数据失败" });
        });
    };

    // 请求脑中枢数据
    const reqZData = () => {
      let obj = {
        Where: {
          EmrType: "",
          UserName: "",
          WorkUnit: "",
          SearchTimeSelect: data.SearchTimeSelect,
          StartDate: "",
          EndDate: "",
        },
      };
      obj.Where.UserName = localStorage.getItem("username");
      if (data.time_range !== null) {
        obj.Where.StartDate = data.time_range[0];
        obj.Where.EndDate = data.time_range[1];
      }
      axios({
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        method: "post",
        url: "/peng/Statistic/Simple",
        data: obj,
        // data: JSON.stringify(obj)
      })
        .then((res) => {
          data.dataSum = res.data.count;
          data.dataList = res.data.data;
        })
        .catch(() => {
          ElMessage({ type: "error", message: "请求数据失败" });
        });
    };

    const verifyDate = () => {
      // let Date1 = new Date();
      // let Date2 = new Date();
    };

    onMounted(() => {
      const echart = document.getElementById("echart");
      drowEchart(echart);
      reqEchartData(echart);
      reqZData();
    });

    return {
      data,
      reqZData,
      drowEchart,
      reqEchartData,
      verifyDate,
    };
  },
});
</script>

<style lang="scss" scoped>
.keyborderPage {
  padding-bottom: 80px;
  // echarts图表
  .echartsBox {
    height: 400px;
  }

  // 信息选择 日期选择
  .infoSelect {
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

  // 数据统计表格样式
  .bottom-content {
    display: flex;
    width: 100%;
    padding: 0;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    .bottom-content-box {
      width: 30%;
      display: flex;
      background: #f8f9fb;
      border-radius: 8px;
      padding: 30px;
      margin-bottom: 20px;

      .title {
        font: 400 18px/1 "";
        width: 50%;
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
      color: #fff;
      padding: 30px;
      border-radius: 8px;

      .title {
        font: 400 18px/1 "";
        width: 90px;
        height: 60px;
        line-height: 20px;
        display: flex;
        align-items: center;
      }

      .quantity {
        display: inline-block;
        color: #fff;
        font: 400 40px/60px "Impact";
      }
    }
  }
}
</style>
