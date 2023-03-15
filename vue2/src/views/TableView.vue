<template>
  <div class="table">
    <router-view />
    <!-- <Table></Table> -->
  </div>
</template>
  
<script>
import Table from "@/components/table/Table.vue";
export default {
  name: "TableView",
  components: {
    Table,
  },
  methods: {
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
.table {
  display: flex;
  flex-direction: row;
}
</style>
  