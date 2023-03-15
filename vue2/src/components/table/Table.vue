<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%; border: 1px solid #000"
    :cell-style="{ background: '#2d3d5c' }"
    :header-cell-style="{ background: '#192c56' }"
  >
    <el-table-column prop="date" label="手机号" width="150">
      <template slot-scope="scope">
        <span v-if="scope.row.isEdit">
          <el-input ref="editRef" v-model="temp.date" />
          <!-- {{ scope.row.isEdit }} -->
        </span>
        <span v-else>{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="用户名" width="120"> </el-table-column>
    <el-table-column prop="province" label="昵称" width="120">
    </el-table-column>
    <el-table-column prop="city" label="银行账户名" width="120">
    </el-table-column>
    <el-table-column prop="address" label="备注" width="300"> </el-table-column>
    <el-table-column prop="zip" label="客户码" width="120"> </el-table-column>
    <el-table-column prop="id" label="邀请人用户名" width="120">
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="180">
      <template slot-scope="scope">
        <el-button
          @click="handleClick(scope.row.id)"
          :type="scope.row.isEdit ? 'success' : 'primary'"
          :icon="scope.row.isEdit ? 'el-icon-check' : 'el-icon-edit'"
          size="small"
          >{{ scope.row.isEdit ? "OK" : "编辑" }}</el-button
        >
        <el-button
          @click="open(scope.row.id)"
          type="primary"
          icon="el-icon-star-off"
          size="small"
          >勋章</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    handleClick(id) {
      // console.log(id);
      this.tableData = JSON.parse(
        JSON.stringify(
          this.tableData.map((item, index) => {
            if (id === item.id) {
              this.temp = { ...item };
              if (item.isEdit) {
                this.temp.isEdit = false;
                this.temp.date = this.$refs.editRef.value;
              } else {
                this.temp.isEdit = true;
              }
              return { ...this.temp };
            }
            return { ...item };
          })
        )
      );
    },
    open(id) {
      const h = this.$createElement;
      const that = this;
      this.$msgbox({
        title: "勋章",
        message: h("div", null, [
          h("span", null, "会员等级："),
          h(
            "el-select",
            {
              props: { value: that.value },
              ref: "selectView",
              on: {
                change: (e) => {
                  this.value = e;
                  this.$refs.selectView.value = e; // select下拉框值改变，回显到页面上
                },
              },
              clearable: true,
              placeholder: "请选择",
            },
            that.options.map((item, index) => {
              return h("el-option", {
                props: {
                  key: item.value,
                  value: item.value,
                  label: item.label,
                },
              });
            })
          ),
        ]),
        showCancelButton: true,
        closeOnClickModal: false,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          done();
          // if (action === "confirm") {
          //   instance.confirmfirmButtonLoading = false;
          //     }, 300);
          //   }, 3000);
          // } else {
          //   done();
          // }ButtonLoading = true;
          //   instance.confirmButtonText = "执行中...";
          //   setTimeout(() => {
          //     done();
          //     setTimeout(() => {
          //       instance.con
        },
      })
        .then((action) => {
          this.$message({
            type: "success",
            message: "修改成功",
          });
        })
        .catch(() => {});
    },
    upDataVal(val) {
      this.value = val;
      that.$refs.selectView.value = val;
    },
  },

  data() {
    return {
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          isEdit: false,
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          isEdit: false,
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          isEdit: false,
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          isEdit: false,
        },
      ],
      temp: null,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-table,
.el-table_expanded-cell {
  // background-color: #192c56;
  border: 1px solid red;
}
</style>
<style  lang="less">
/*
改变表格内竖线颜色 */
.el-table--border td,
.el-table--border th,
.el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
  border-right: 1px solid #e9eef3 !important;
  color: #fff;
}
/**
改变表格内行线颜色
 */
.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #e9eef3 !important;
}

.el-table thead tr th {
  border-color: #e9eef3;
  line-height: normal;
}
</style>
