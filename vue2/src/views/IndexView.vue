<template>
  <div class="home">
    <el-container>
      <el-header>
        <TopNav
          :activeIndex="activeIndex"
          @setNavList="navList"
          @select-menu="selectMenu"
          @setActiveLeftInd="setActiveLeftInd"
        />

        <el-dropdown>
          <span class="el-dropdown-link">
            {{ lang }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(v, i) in langList" :key="v">
              <div :data-index="i" @click="selectlang">{{ v }}</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside>
          <LeftNav
            :activeIndex="activeIndex"
            :newLeftNavData="newLeftNavData"
            :activeLeftInd="activeLeftInd"
            @select-LeftMenu="selectLeftMenu"
          />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "../components/TopNav.vue";
import LeftNav from "../components/LeftNav.vue";

export default {
  name: "HomeView",
  components: {
    TopNav,
    LeftNav,
  },
  data() {
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
            name: "main.Scatter",
            class: "el-icon-menu",
            path: "/echarts/scatter",
          },
          {
            id: "22",
            name: "main.Radar",
            class: "el-icon-setting",
            path: "/echarts/radar",
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
    return {
      lang: "zh",
      langList: ["en", "zh"],
      newLeftNavData: [],
      activeIndex: sessionStorage.getItem("activeIndex")
        ? sessionStorage.getItem("activeIndex")
        : "1", // 默认选中第一个菜单项
      activeLeftInd: sessionStorage.getItem("activeLeftInd")
        ? sessionStorage.getItem("activeLeftInd")
        : "", // 默认选中第一个左侧菜单项
      LeftNavData,
    };
  },
  created() {
    // 获取缓存的语种，如若没有（新用户），保存当前默认语言\
    if (localStorage.getItem("lang") != "undefined") {
      console.log(localStorage.getItem("lang"));
      this.lang = localStorage.getItem("lang");
      this.$i18n.locale = this.lang; //切换字典文件
    } else {
      localStorage.setItem("lang", this.lang);
    }

    this.navList();
    // this.init();
  },
  watch: {
    activeIndex(val, oldVal) {
      this.navList();
      this.setActiveLeftInd();
    },
  },
  methods: {
    selectMenu(index) {
      this.activeIndex = index; // 用户点击菜单项时更新activeIndex
      sessionStorage.setItem("activeIndex", this.activeIndex);
      // console.log("++++++", index);
    },
    selectLeftMenu(index) {
      this.activeLeftInd = index; // 用户点击菜单项时更新activeLeftInd
      sessionStorage.setItem("activeLeftInd", this.activeLeftInd);
    },

    selectlang(e) {
      // console.log(e.target.dataset);
      //   console.log(e.target.selectedIndex);
      // 根据监听改变获取到的值去数组里找到对应的值
      localStorage.setItem("lang", this.langList[e.target.dataset.index]);
      this.lang = this.langList[e.target.dataset.index];
      // console.log(this.$i18n.locale);
      this.$i18n.locale = this.langList[e.target.dataset.index]; //切换字典文件
    },

    navList() {
      this.newLeftNavData = this.LeftNavData.filter((item) => {
        if (item.pId === this.activeIndex) {
          return item;
        }
      })[0];
      this.newLeftNavData = this.newLeftNavData ? this.newLeftNavData : {};
      // console.log(this.newLeftNavData);
    },
    setActiveLeftInd() {
      this.activeLeftInd = this.newLeftNavData.leftNav[0].id;
      sessionStorage.setItem("activeLeftInd", this.activeLeftInd);
      this.$router.push(this.newLeftNavData.leftNav[0].path);
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  height: calc(100vh - 60px);
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .el-menu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  .el-dropdown {
    width: 200px;
    height: 100%;
    span {
      display: block;
      height: 100%;
    }
  }
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-header {
  padding: 0;
  padding-left: 200px;
  background-color: #545c64;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
  // height:100vh;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>

