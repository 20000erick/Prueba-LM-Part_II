<template>
<el-container>
  <el-header>
    <h1>Marketplace 2019</h1>
  </el-header>
  <el-container>
    <el-aside style="width:240px;">
      <navegationmenu></navegationmenu>
    </el-aside>
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="24">
            <router-view></router-view>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>{{ 'Año: ' + new Date().getFullYear() }}</a></el-footer>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
import navegationmenu from "@/components/shared/Menu";

export default {
  components: {
    navegationmenu
  },
  props: {
    source: String
  }
};
</script>