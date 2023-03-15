<template>
  <div class="home">
    <router-view />
    <el-button type="primary" @click="timeCount" :disabled="isDisabled">{{
      title
    }}</el-button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      title: sessionStorage.getItem("title")
        ? sessionStorage.getItem("title")
        : "start",
      timeStart:
        parseInt(sessionStorage.getItem("timeStart")) > 0
          ? parseInt(sessionStorage.getItem("timeStart"))
          : 30,
      timeStep: -1,
      timer: null,
      isDisabled: false,
    };
  },
  mounted() {
    if (!(this.timeStart === 30)) {
      this.timeCount();
    }
  },
  methods: {
    timeCount() {
      console.log(this.timeStart);
      this.isDisabled = true;
      this.timeStart += this.timeStep;
      this.title = this.timeStart + "s";
      sessionStorage.setItem("timeStart", this.timeStart);
      // sessionStorage.setItem("title", this.title);
      if (this.timeStart < 0) {
        this.timeStart = 30;
        // this.title = $t("main.Begin");
        this.title = "start";
        this.isDisabled = false;
        sessionStorage.setItem("timeStart", JSON.stringify(this.timeStart));
        sessionStorage.setItem("title", this.title);
      } else {
        this.timer = setTimeout(() => {
          this.timeCount();
        }, 1000);
      }
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
.home {
  display: flex;
  flex-direction: row;

  .el-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 200px auto;
    width: 80px;
    height: 40px;
  }
}
</style>