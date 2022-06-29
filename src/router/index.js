import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/layout/index.vue";
import Home from "../views/home/index.vue";
import CaseList from "../views/caseList/index.vue";
import CaseDetail from "../views/caseList/caseDetail/index.vue";
import Login from "../views/login/login.vue";
import CaseAdd from "../views/caseAdd/index.vue";
import Setting from "../views/setting/index.vue";
import CaseAddModelOne from "../views/caseAdd/model/caseAddModelOne.vue";
import CaseAddModelTwo from "../views/caseAdd/model/caseAddModelTwo.vue";
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
          routerIndex: 0,
          title: "主页",
          canBack: false,
        },
      },
      // 重定向
      {
        path: "/",
        redirect: "/home",
      },
      {
        path: "/caseList",
        redirect: "/caseList/100",
      },
      {
        path: "/caseList/:type",
        name: "caseList",
        component: CaseList,
        meta: {
          routerIndex: 1,
          title: "病例列表",
          canBack: false,
        },
      },
      {
        path: "/caseDetail",
        name: "caseDetail",
        component: CaseDetail,
        meta: {
          routerIndex: 1,
          title: "案例详情",
          canBack: true,
        },
      },
      {
        path: "/caseAdd",
        name: "caseAdd",
        component: CaseAdd,
        meta: {
          routerIndex: 2,
          title: "病例新增",
          canBack: false,
        },
      },
      {
        path: "/caseAddModelOne",
        name: "caseAddModelOne",
        component: CaseAddModelOne,
        meta: {
          routerIndex: 2,
          title: "病例新增1",
          canBack: true,
        },
      },
      {
        path: "/caseAddModelTwo",
        name: "caseAddModelTwo",
        component: CaseAddModelTwo,
        meta: {
          routerIndex: 2,
          title: "病例新增2",
          canBack: true,
        },
      },
      {
        path: "/setting",
        name: "setting",
        component: Setting,
        meta: {
          routerIndex: 3,
          title: "设置",
          canBack: false,
        },
      },
    ],
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
