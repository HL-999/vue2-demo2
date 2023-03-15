 <template>
  <div class="radar">
    <div class="home">
      <div ref="left" style="width: 600px; height: 600px"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "radar",
  mounted() {
    this.left();
  },
  methods: {
    left() {
      let left = this.$echarts.init(this.$refs.left);
      var dataMax = [
        {
          name: "易用性",
          max: 100,
        },
        {
          name: "功能",
          max: 100,
        },
        {
          name: "拍照",
          max: 100,
        },
        {
          name: "跑分",
          max: 100,
        },
        {
          name: "续航",
          max: 100,
        },
      ];
      var option = {
        radar: {
          indicator: dataMax, // 配置各个维度的最大值
          shape: "polygon", // 配置雷达图最外层的图形 circle polygon
        },
        series: [
          {
            type: "radar", // radar 此图表时一个雷达图
            label: {
              // 设置标签的样式
              show: true, // 显示数值
            },
            areaStyle: {}, // 将每一个产品的雷达图形成阴影的面积
            data: [
              {
                name: "华为手机1",
                value: [80, 90, 80, 82, 90],
              },
              {
                name: "中兴手机1",
                value: [70, 82, 75, 70, 78],
              },
            ],
          },
        ],
      };
      left.setOption(option);
    },
  },
};
</script>