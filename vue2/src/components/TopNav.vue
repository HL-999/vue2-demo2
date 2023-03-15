<!-- TopNav 子组件 -->
<template>
  <!-- <ul>
    <li
      v-for="(item, index) in navList"
      :class="{ active: index === activeIndex }"
      :key="index"
    >
      {{ item }}
    </li>
  </ul> -->
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item
      v-for="item in navList"
      :key="item.id"
      :index="item.id"
      :class="{ active: item.id === activeIndex }"
    >
      {{ $t(item.name) }}
    </el-menu-item>
    <!-- <router-link to="/echarts/scatter">
      <el-menu-item index="2" :class="{ active: index === activeIndex }"
        >{{ $t("main.ECharts") }}
      </el-menu-item>
    </router-link>
    <router-link to="/table">
      <el-menu-item index="3" :class="{ active: index === activeIndex }">
        {{ $t("main.Table") }}</el-menu-item
      >
    </router-link> -->
  </el-menu>
</template>

<script>
export default {
  props: {
    activeIndex: String,
  },
  computed: {
    navList() {
      return [
        { id: "1", name: "main.Home", path: "/home/1" },
        { id: "2", name: "main.ECharts", path: "/echarts/scatter" },
        { id: "3", name: "main.Table", path: "/table/1" },
      ];
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      // this.$emit("setNavList", key);
      this.$emit("select-menu", key);
      // this.$emit("setActiveLeftInd");
      // console.log();
      // console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
// .active {
//   color: red;
// }
//
</style>
