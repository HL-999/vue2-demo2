import Vue from "vue";
import VueRouter from "vue-router";
import IndexView from "../views/IndexView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexView,
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/HomeView.vue"),
        children: [
          {
            path: "/home/1",
            name: "home1",
            component: () => import("../components/home/1.vue"),
          },
          {
            path: "/home/2",
            name: "home2",
            component: () => import("../components/home/2.vue"),
          },
          {
            path: "/home/3",
            name: "home3",
            component: () => import("../components/home/3.vue"),
          },
        ],
      },
      {
        path: "/echarts",
        name: "echarts",
        component: () => import("../views/EChartsView.vue"),
        children: [
          {
            path: "/echarts/scatter",
            name: "scatter",
            component: () => import("../components/echarts/Scatter.vue"),
          },
          {
            path: "/echarts/radar",
            name: "radar",
            component: () => import("../components/echarts/Radar.vue"),
          },
        ],
      },
      {
        path: "/table",
        name: "table",
        component: () => import("../views/TableView.vue"),
        children: [
          {
            path: "/table/1",
            name: "table1",
            component: () => import("../components/table/Table.vue"),
          },
          {
            path: "/table/2",
            name: "table2",
            component: () => import("../components/table/2.vue"),
          },
          {
            path: "/table/3",
            name: "table3",
            component: () => import("../components/table/3.vue"),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
