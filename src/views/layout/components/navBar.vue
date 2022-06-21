<template>
  <div class="navBar">
    {{ route.meta.title }}
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const route = useRoute();
    console.log(route);
    return {
      route,
    };
  },
});
</script>

<style lang="scss" scoped>
.navBar {
  height: 60px;
  line-height: 60px;
  font-weight: 600;
  color: white;
  padding-left: 20px;
  background-color: #426bba;
  box-shadow: 6px 6px 40px 0px #0000007d;
  box-shadow: 4px 4px 10px 0px #00000054;
}
</style>
