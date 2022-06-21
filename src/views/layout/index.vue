<template>
  <div class="homePage">
    <!-- 导航头 -->
    <NavBar :title="'主页'"></NavBar>
    <el-main height="">
      <!-- Main content -->
      <router-view></router-view>
    </el-main>
    <!-- 底部菜单栏 -->
    <MenuBar></MenuBar>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "./components/navBar.vue";
import MenuBar from "./components/menuBar.vue";

export default defineComponent({
  components: {
    NavBar,
    MenuBar,
  },
  setup() {
    console.log();
  },
});
</script>

<style lang="scss" scoped>
.homePage {
  height: 100vh;
  position: relative;
}
</style>
