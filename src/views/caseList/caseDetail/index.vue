<template>
  <div class="caseDetail">
    <NavBar></NavBar>
    <el-main>
      <inHospitalInfo1></inHospitalInfo1>
    </el-main>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "../../layout/components/navBar.vue";
import inHospitalInfo1 from "./components/inHospitalInfo1.vue";

export default defineComponent({
  components: {
    NavBar,
    inHospitalInfo1,
  },
  setup() {
    // todo
    return {};
  },
});
</script>

<style lang="scss" scoped>
.caseDetail {
  height: 100vh;
}
</style>
