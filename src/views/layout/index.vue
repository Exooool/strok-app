<template>
  <div class="layoutPage">
    <!-- 导航头 -->
    <NavBar :title="'主页'"></NavBar>
    <!-- Main content -->
    <router-view></router-view>
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
.layoutPage {
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  padding-top: 50px;
  padding-bottom: 70px;
}
</style>
