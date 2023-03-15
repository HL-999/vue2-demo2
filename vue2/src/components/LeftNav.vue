<!-- LeftNav 子组件 -->
<template>
  <div>
    <!-- <ul>
    <li
      v-for="item in newLeftNavData.leftNav"
      @click="selectMenu(newLeftNavData.pId)"
      :class="{ active: newLeftNavData.pId === activeIndex }"
      :key="item.id"
    >
      {{ $t(item.name) }}{{ item.id }}
    </li>
    </ul> -->
    <el-aside width="200px">
      <el-menu
        :default-active="activeLeftInd"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <router-link
          :to="item.path"
          v-for="item in newLeftNavData.leftNav"
          :key="item.id"
        >
          <el-menu-item
            :index="item.id"
            :class="{ active: item.id === activeLeftInd }"
          >
            <i :class="item.class"></i>
            <span slot="title">{{ $t(item.name) }}{{ item.id }}</span>
          </el-menu-item>
        </router-link>

        <!-- <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ $t("main.Home") }}1</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-setting"></i>
          <span slot="title">{{ $t("main.Home") }}2</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"> </i>
          <span slot="title">{{ $t("main.Home") }}3</span>
        </el-menu-item> -->
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  props: {
    activeIndex: String,
    newLeftNavData: Object,
    activeLeftInd: String,
  },
  mounted() {
    // console.log(this.activeLeftInd);
    // console.log(this.newLeftNavData.leftNav[0].id);
  },
  methods: {
    selectMenu(index) {
      // this.$emit("select-menu", index); // 向父组件传递选中的菜单项索引值
      // console.log("======", index);
    },
    handleSelect(key, keyPath) {
      this.$emit("select-LeftMenu", key);
      // console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed: {
    // 无用
    navList() {
      const LeftNavData = [
        {
          id: "10",
          pId: "1",
          name: "main.Home",
          class: "el-icon-menu",
          leftNav: [
            {
              id: "11",
              name: "main.Home",
              class: "el-icon-menu",
              path: "/home/1",
            },
            {
              id: "12",
              name: "main.Home",
              class: "el-icon-setting",
              path: "/home/2",
            },
            {
              id: "13",
              name: "main.Home",
              class: "el-icon-menu",
              path: "/home/3",
            },
          ],
        },
        {
          id: "20",
          pId: "2",
          name: "main.ECharts",
          class: "el-icon-menu",
          leftNav: [
            {
              id: "21",
              name: "main.ECharts",
              class: "el-icon-menu",
              path: "/echarts/scatter",
            },
            {
              id: "22",
              name: "main.ECharts",
              class: "el-icon-setting",
              path: "/echarts/radar",
            },
            {
              id: "23",
              name: "main.ECharts",
              class: "el-icon-menu",
              path: "/echarts/3",
            },
            {
              id: "24",
              name: "main.ECharts",
              class: "el-icon-menu",
              path: "/echarts/4",
            },
          ],
        },
        {
          id: "30",
          pId: "3",
          name: "main.Table",
          class: "el-icon-menu",
          leftNav: [
            {
              id: "31",
              name: "main.Table",
              class: "el-icon-menu",
              path: "/table/1",
            },
            {
              id: "32",
              name: "main.Table",
              class: "el-icon-setting",
              path: "/table/2",
            },
            {
              id: "33",
              name: "main.Table",
              class: "el-icon-menu",
              path: "/table/3",
            },
          ],
        },
      ];

      // return ["菜单1", "菜单2", "菜单3", "菜单4"];
      return LeftNavData.map((item) => {
        // console.log(item.id / 10, Number(this.activeIndex));
        if (item.pId === this.activeIndex) {
          // console.log(item.leftNav);
          return item;
        }
      });
    },
  },
};
</script>


<style lang="less" scoped>
// .active {
//   color: green;
// }
</style>