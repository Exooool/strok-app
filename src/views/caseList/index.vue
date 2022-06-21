<template>
  <div class="caseList">
    <CaseCard v-for="(item, index) in 9" :key="index"></CaseCard>
  </div>
</template>

<script>
import { defineComponent } from "vue";
// 病例卡片
import CaseCard from "./components/caseCard.vue";

export default defineComponent({
  components: {
    CaseCard,
  },
  setup() {
    // todo
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
