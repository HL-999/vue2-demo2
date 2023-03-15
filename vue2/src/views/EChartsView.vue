<template>
  <div class="echarts">
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "EChartsView",
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.echarts {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;

  .main {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
