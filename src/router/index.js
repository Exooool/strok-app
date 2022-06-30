import { createRouter, createWebHistory } from "vue-router";
import { ElMessage } from "element-plus";

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("../views/layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home/index.vue"),
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
        component: () => import("../views/caseList/index.vue"),
        meta: {
          routerIndex: 1,
          title: "病例列表",
          canBack: false,
        },
      },
      {
        path: "/caseDetail",
        name: "caseDetail",
        component: () => import("../views/caseList/caseDetail/index.vue"),
        meta: {
          routerIndex: 1,
          title: "案例详情",
          canBack: true,
        },
      },
      {
        path: "/caseAdd",
        name: "caseAdd",
        component: () => import("../views/caseAdd/index.vue"),
        meta: {
          routerIndex: 2,
          title: "病例新增",
          canBack: false,
        },
      },
      {
        path: "/caseAddModelOne",
        name: "caseAddModelOne",
        component: () => import("../views/caseAdd/model/caseAddModelOne.vue"),
        meta: {
          routerIndex: 2,
          title: "病例新增1",
          canBack: true,
        },
      },
      {
        path: "/caseAddModelTwo",
        name: "caseAddModelTwo",
        component: () => import("../views/caseAdd/model/caseAddModelTwo.vue"),
        meta: {
          routerIndex: 2,
          title: "病例新增2",
          canBack: true,
        },
      },
      {
        path: "/setting",
        name: "setting",
        component: () => import("../views/setting/index.vue"),
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
    component: () => import("../views/login/login.vue"),
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
    //当前时间的毫秒数
    const start = new Date().getTime();
    let access_token = localStorage.getItem("access_token");
    if (
      access_token === null ||
      access_token === "" ||
      access_token.length <= 50 ||
      !localStorage.getItem("endTime")
    ) {
      ElMessage({ type: "error", message: "登录身份已过期,请重新登录" });
      next("/login");
    } else {
      if (start > localStorage.getItem("endTime")) {
        localStorage.clear();
        ElMessage.error("登录身份已过期,请重新登录");
        next("/login");
      } else {
        next();
      }
    }
  }
});

export default router;
