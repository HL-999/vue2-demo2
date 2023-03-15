import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuData: [
      {
        id: 1,
        path: "/home",
        name: "home",
        label: "首页",
        order: 1,
        children: [
          {
            id: 11,
            path: "/home/home1",
            name: "home1",
            label: "首页一",
          },
          {
            id: 12,
            path: "/home/home2",
            name: "home2",
            label: "首页二",
          },
          {
            id: 13,
            path: "/home/home3",
            name: "home3",
            label: "首页三",
          },
        ],
      },
      {
        id: 2,
        path: "/echarts",
        name: "home",
        label: "ECharts",
        children: [
          {
            id: 11,
            path: "/home/home1",
            name: "home1",
            label: "首页一",
          },
          {
            id: 12,
            path: "/home/home2",
            name: "home2",
            label: "首页二",
          },
          {
            id: 13,
            path: "/home/home3",
            name: "home3",
            label: "首页三",
          },
        ],
      },
      {
        id: 1,
        path: "/home",
        name: "home",
        label: "首页",
        children: [
          {
            id: 11,
            path: "/home/home1",
            name: "home1",
            label: "首页一",
          },
          {
            id: 12,
            path: "/home/home2",
            name: "home2",
            label: "首页二",
          },
          {
            id: 13,
            path: "/home/home3",
            name: "home3",
            label: "首页三",
          },
        ],
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
