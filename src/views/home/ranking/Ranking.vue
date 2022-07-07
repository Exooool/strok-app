/** * Created by Lv Cheng on 2022/2/21 * Notes 排名表 */
<template>
  <div class="ranking">
    <div ref="chart" class="ranking-content"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import * as echarts from "echarts";
export default defineComponent({
  props: { data: Array },
  name: "Rank",
  data() {
    return {
      xData: [],
      yData: [],
      rank: [
        32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15,
        14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
      ],
    };
  },
  methods: {
    drawLine() {
      var myChart = echarts.init(this.$refs.chart);
      var option = {
        title: {
          text: "完善住院信息录入统计",
        },
        tooltip: {},
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        visualMap: {
          show: false,
          orient: "horizontal",
          left: "center",
          min: this.xData[0],
          max: this.xData[this.xData.length - 1],
          text: ["Low Score", "High Score"],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ["#426BBA", "#426BBA"],
          },
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: this.yData,
        },
        series: [
          {
            type: "bar",
            data: this.xData,
            label: {
              show: true,
              position: "right",
              valueAnimation: true,
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.drawLine();
    // })
  },
  watch: {
    data: {
      deep: true,
      handler: function (newVal) {
        let arr = [...newVal];
        arr.sort((a, b) => {
          return a.Total - b.Total;
        });
        arr.pop();
        let x = [];
        let y = [];
        arr.forEach((item, index) => {
          x.push(item.Total);
          y.push(item.WorkUnit + "  top(" + (arr.length - index) + ")");
        });
        this.xData = x;
        this.yData = y;
        this.$nextTick(() => {
          this.drawLine();
        });
      },
      immediate: true,
    },
  },
});
</script>

<style scoped lang="scss">
.ranking {
  width: 1000px;
  .ranking-content {
    width: 100%;
    height: 1400px;
    box-sizing: border-box;
    // float: left;
  }
}
</style>
