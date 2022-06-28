<template>
  <div class="menuBar">
    <ul class="menuWrapper">
      <li
        v-for="(item, index) in data.menuList"
        :key="index"
        :class="item.path === route.path ? 'menuSelected' : ''"
      >
        <router-link :to="item.path">
          <img
            class="menuLogo"
            :src="item.path === route.path ? item.iconTo : item.iconFrom"
            alt=""
          />
          <span class="menuTitle">{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    // 获取路由信息
    const route = useRoute();
    const data = reactive({
      menuList: [
        {
          name: "主页",
          path: "/home",
          iconTo: require("@/assets/1.png"),
          iconFrom: require("@/assets/1-1.png"),
        },
        {
          name: "病例增加",
          path: "/caseAdd",
          iconTo: require("@/assets/2.png"),
          iconFrom: require("@/assets/2-2.png"),
        },
        {
          name: "病例列表",
          path: "/caseList",
          iconTo: require("@/assets/3.png"),
          iconFrom: require("@/assets/3-3.png"),
        },
        // {
        //   name: "质控条件",
        //   path: "",
        //   iconTo: require("@/assets/4.png"),
        //   iconFrom: require("@/assets/4-4.png"),
        // },
        {
          name: "设置",
          path: "/setting",
          iconTo: require("@/assets/6.png"),
          iconFrom: require("@/assets/6-6.png"),
        },
      ],
    });
    return {
      data,
      route,
    };
  },
});
</script>

<style lang="scss" scoped>
.menuBar {
  display: flex;
  justify-content: center;
  background: linear-gradient(#619ee1, #306ba7);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: -3px -4px 7px 0px #0000000d;
  z-index: 2000;

  .menuSelected {
    background-color: white;
    .menuTitle {
      color: black;
    }
  }

  // 菜单logo
  .menuLogo {
    height: 25px;
    width: 25px;
    margin-bottom: 10px;
  }
  // 菜单标题
  .menuTitle {
    color: white;
  }
  // 列表用ul创建
  ul {
    margin: 0px;
    list-style: none;
    padding: 0;
    li {
      display: inline-block;
      padding: 10px;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        &:hover {
          background: none;
        }
      }
    }
  }
}
</style>
