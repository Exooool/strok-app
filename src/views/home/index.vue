<template>
  <div class="homePage">
    <el-main>
      <AdministratorPage v-if="role === '99'"></AdministratorPage>
      <KeyborderPage v-else></KeyborderPage>
    </el-main>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AdministratorPage from "./components/administratorPage.vue";
import KeyborderPage from "./components/keyborderPage.vue";

export default defineComponent({
  components: {
    AdministratorPage,
    KeyborderPage,
  },
  setup() {
    const role = localStorage.getItem("user_role");
    return {
      role,
    };
  },
});
</script>

<style lang="scss" scoped></style>
