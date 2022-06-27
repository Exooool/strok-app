import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/layout/index.vue";
import Home from "../views/home/index.vue";
import CaseList from "../views/caseList/index.vue";
import CaseDetail from "../views/caseList/caseDetail/index.vue";
import Login from "../views/login/login.vue";
import Setting from "../views/setting/index.vue";

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
        },
      },
      {
        path: "/caseList",
        name: "caseList",
        component: CaseList,
        meta: {
          title: "病例列表",
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
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "登录",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
