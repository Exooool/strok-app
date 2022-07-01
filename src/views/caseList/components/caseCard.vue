<template>
  <div class="caseCard">
    <!-- 病人个人信息 -->
    <div class="patientInfo">
      <div class="patientImg"></div>
      <div class="profile">
        <span class="name">{{ name }}</span>
        <span class="sexAndYears"
          >{{ enums.sex[sex] }}{{ age === "" ? "" : "，" + age + "岁" }}</span
        >
      </div>
    </div>
    <el-divider direction="horizontal" content-position="left"></el-divider>
    <!-- 病人病情信息 -->
    <div class="patientOtherInfo">
      <div class="infoItem">
        <span>登记时间</span><span>{{ time }}</span>
      </div>
      <div class="infoItem">
        <span>病例类型</span><span>{{ enums.disease_type[type] }}</span>
      </div>
      <div class="infoItem">
        <span>90天随访</span
        ><span
          ><el-tag v-if="visitStatus90 === '1'" type="success">已随访 </el-tag>
          <el-tag v-else-if="visitStatus90 === '2'">未随访 </el-tag>
          <el-tag v-else-if="visitStatus90 === '3'" type="warning"
            >随访提醒
          </el-tag>
          <el-tag v-else-if="visitStatus90 === '4'" type="danger"
            >随访已超时
          </el-tag>
          <el-tag v-else>未随访 </el-tag></span
        >
      </div>
      <div class="infoItem">
        <span>180天随访</span
        ><span
          ><el-tag v-if="visitStatus180 === '5'" type="success">已随访 </el-tag>
          <el-tag v-else-if="visitStatus180 === '6'">未随访 </el-tag>
          <el-tag v-else-if="visitStatus180 === '7'" type="warning"
            >随访提醒
          </el-tag>
          <el-tag v-else-if="visitStatus180 === '8'" type="danger"
            >随访已超时
          </el-tag>
          <el-tag v-else>未随访 </el-tag></span
        >
      </div>
      <div class="infoItem">
        <span>状态</span
        ><span
          ><el-tag v-if="status == '3'" type="success">已归档 </el-tag>
          <el-tag v-else type="danger">待归档 </el-tag></span
        >
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
  props: {
    name: String,
    age: String,
    sex: String,
    time: String,
    type: String,
    visitStatus90: String,
    visitStatus180: String,
    status: String,
  },
  setup() {
    const enums = {
      sex: {
        1: "男",
        2: "女",
      },
      disease_type: {
        100: "缺血性脑血管病",
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
    };

    const visitStatus90List = {
      1: "已随访",
      2: "未随访",
      3: "随访提醒",
      4: "随访已超时",
    };

    const visitStatus180List = {
      5: "已随访",
      6: "未随访",
      7: "随访提醒",
      8: "随访已超时",
    };

    return {
      enums,
      visitStatus90List,
      visitStatus180List,
    };
  },
});
</script>

<style lang="scss" scoped>
.caseCard {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);

  // 病人个人信息
  .patientInfo {
    display: flex;
    margin-bottom: 10px;
    .patientImg {
      height: 50px;
      width: 50px;
      border-radius: 25px;
      background-color: #426bba;
    }
    .profile {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 15px;
      .name {
        font-weight: 500;
      }
      .sexAndYears {
        color: grey;
      }
    }
  }
  // 病人病情信息
  .patientOtherInfo {
    margin-bottom: 10px;
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
