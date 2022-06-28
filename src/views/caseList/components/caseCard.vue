<template>
  <div class="caseCard">
    <!-- 病人个人信息 -->
    <div class="patientInfo">
      <div class="patientImg"></div>
      <div class="profile">
        <span class="name">王萌</span>
        <span class="sexAndYears">女，68岁</span>
      </div>
    </div>
    <el-divider direction="horizontal" content-position="left"></el-divider>
    <!-- 病人病情信息 -->
    <div class="patientOtherInfo">
      <div class="infoItem">
        <span>出院/转诊时间</span><span>2021/4/3 11:06:00</span>
      </div>
      <div class="infoItem">
        <span>随访开始时间</span><span>2022-02-09</span>
      </div>
      <div class="infoItem">
        <span>随访截止时间</span><span>2022-06-09</span>
      </div>
    </div>
    <el-divider
      direction="horizontal"
      content-position="left"
      border-style="dashed"
    ></el-divider>
    <router-link class="showMore" to="/caseDetail">查看详情</router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  // props:{

  // },
  setup() {
    // todo
    return {};
  },
});
</script>

<style lang="scss" scoped>
.caseCard {
  height: 240px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0px 3px 7px 1px #0000001a;

  // 病人个人信息
  .patientInfo {
    display: flex;
    .patientImg {
      height: 50px;
      width: 50px;
      border-radius: 25px;
      background-color: #426bba;
    }
    .profile {
      margin-left: 15px;
      .name {
        font-weight: 500;
      }
      .sexAndYears {
        margin-left: 10px;
        color: grey;
      }
    }
  }
  // 病人病情信息
  .patientOtherInfo {
    .infoItem {
      margin: 10px 0px;
      display: flex;
      justify-content: space-between;
    }
  }
  // 查看详情
  .showMore {
    text-align: center;
    color: #426bba;
    text-decoration: none;
    margin-bottom: 5px;
  }
  // 水平分割线
  .el-divider--horizontal {
    margin: 0px;
  }
}
</style>
