<template>
  <div class="navBar">
    <el-icon class="backIcon" v-if="route.meta.canBack" @click="routerBack()"
      ><Back
    /></el-icon>
    <span class="title" v-if="route.params.type">
      {{ route.params.type ? caseTypeList[route.params.type] : "" }}
    </span>
    <span class="title" v-else>{{ route.meta.title }} </span>
    <span class="logout" @click="logout()">退出</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const caseTypeList = {
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
    };
    console.log(route);

    const routerBack = () => {
      router.back();
    };

    const logout = () => {
      localStorage.removeItem("access_token");
      localStorage.clear();
      let vuex = JSON.parse(localStorage.getItem("vuex"));
      if (vuex !== null) {
        localStorage.removeItem("vuex");
      }
      router.push("/login");
    };
    return {
      route,
      caseTypeList,
      routerBack,
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
.navBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  align-items: center;
  font-weight: 500;
  color: white;
  padding-left: 10px;
  background: linear-gradient(#619ee1, #306ba7);
  z-index: 2000;
  // box-shadow: 6px 6px 40px 0px #0000007d;
  // box-shadow: 4px 4px 10px 0px #00000054;
  .backIcon {
    margin-right: 10px;
  }
  .title {
    // margin-left: 20px;
  }
}
</style>
