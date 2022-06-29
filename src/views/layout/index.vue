<template>
  <div class="layoutPage">
    <!-- 导航头 -->
    <NavBar :title="'主页'"></NavBar>
    <el-main>
      <!-- Main content -->
      <router-view></router-view>
    </el-main>
    <!-- 底部菜单栏 -->
    <MenuBar></MenuBar>
  </div>
</template>

<script>
import "element-plus/es/components/message/style/css";
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
.layoutPage {
  height: 100vh;
  position: relative;
  .el-main {
    padding-top: 70px;
    padding-bottom: 70px;
  }
}
</style>
