<template>
  <div class="caseDetail">
    <el-main>
      <caseDetailModelOneVue v-if="type === '1' || type === '100'" />
      <caseDetailModelTwoVue v-else />
    </el-main>
    <el-main> </el-main>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import caseDetailModelOneVue from "./model/caseDetailModelOne.vue";
import caseDetailModelTwoVue from "./model/caseDetailModelTwo.vue";

export default defineComponent({
  components: {
    caseDetailModelOneVue,
    caseDetailModelTwoVue,
  },
  setup() {
    const route = useRoute();
    const type = route.params.type;
    // console.log(type);
    return {
      type,
    };
  },
});
</script>

<style lang="scss" scoped>
.caseDetail {
}
</style>
