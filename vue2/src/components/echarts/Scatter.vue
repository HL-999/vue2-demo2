<template>
  <div class="scatter">
    <div class="home">
      <div ref="left" style="width: 600px; height: 600px"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "scatter",
  mounted() {
    this.left();
  },
  methods: {
    left() {
      let left = this.$echarts.init(this.$refs.left);
      let option = {
        xAxis: {
          data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        yAxis: {},
        series: [
          {
            type: "scatter",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
        ],
      };
      left.setOption(option);
    },
  },
};
</script>