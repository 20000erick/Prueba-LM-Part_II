<template>
<div>
<h2>Module de Productos</h2>
<div v-loading="loading">
  <el-table :data="items" :default-sort = "{prop: 'title', order: 'ascending'}" style="width: 100%">
    <el-table-column prop="id" label="Id" sortable width="50"></el-table-column>
    <el-table-column prop="title" label="Producto" sortable>
      <template slot-scope="scope">
        <a :href="'#/example/' + scope.row.id">{{ scope.row.title }}</a>
      </template>
    </el-table-column>
    <el-table-column prop="body" label="Descripción"></el-table-column>
  </el-table>
</div>
</div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      loading: false,
      items: []
    };
  },
  created() {
    let self = this;
    self.getAll();
  },
  methods: {
    getAll() {
      let self = this;
      self.loading = true;

      self.$store.state.services.exampleService
        .getAll()
        .then(r => {
          self.loading = false;
          self.items = r.data;
        })
        .catch(r => {});
    }

  }
};
</script>