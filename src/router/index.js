import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/layout/index.vue";
import Home from "../views/home/index.vue";
import CaseList from "../views/caseList/index.vue";
import CaseDetail from "../views/caseList/caseDetail/index.vue";
import Login from "../views/login/login.vue";
import CaseAdd from "../views/caseAdd/index.vue";
import Setting from "../views/setting/index.vue";

import { ElMessage } from "element-plus";

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "home",
        component: Home,
        meta: {
          title: "主页",
          canBack: false,
        },
      },
      {
        path: "/caseList",
        name: "caseList",
        component: CaseList,
        meta: {
          title: "病例列表",
          canBack: false,
        },
      },
      {
        path: "/caseAdd",
        name: "caseAdd",
        component: CaseAdd,
        meta: {
          title: "病例增加",
          canBack: false,
        },
      },
      {
        path: "/setting",
        name: "setting",
        component: Setting,
        meta: {
          title: "设置",
          canBack: false,
        },
      },
      {
        path: "/setting",
        name: "setting",
        component: Setting,
        meta: {
          title: "设置",
        },
      },
    ],
  },
  {
    path: "/caseDetail",
    name: "caseDetail",
    component: CaseDetail,
    meta: {
      title: "案例详情",
      canBack: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "登录",
      canBack: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.path === "/login") {
    next();
  } else {
    let access_token = localStorage.getItem("access_token");
    if (
      access_token === null ||
      access_token === "" ||
      access_token.length <= 50
    ) {
      ElMessage({ type: "error", message: "登录身份已过期,请重新登录" });
      next("/login");
    } else {
      next();
    }
  }
});

export default router;
