<template>
  <div class="navBar">
    <el-icon v-if="route.meta.canBack" @click="routerBack()"><Back /></el-icon>
    <span class="title">{{ route.meta.title }}</span>
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
    console.log(route);

    const routerBack = () => {
      router.back();
    };
    return {
      route,
      routerBack,
    };
  },
});
</script>

<style lang="scss" scoped>
.navBar {
  height: 50px;
  display: flex;
  align-items: center;
  font-weight: 500;
  color: white;
  padding-left: 10px;
  background: linear-gradient(#619ee1, #306ba7);
  // box-shadow: 6px 6px 40px 0px #0000007d;
  // box-shadow: 4px 4px 10px 0px #00000054;
  .title {
    // margin-left: 20px;
  }
}
</style>
