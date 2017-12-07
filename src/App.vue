<template>
  <el-container>
    <el-header><h1>Low</h1></el-header>
    <el-main><router-view/></el-main>
  </el-container>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
header {
  border-bottom: 1px solid #f2f2f2;
  color: #2c3e50;
  margin-bottom: 0;
}

.el-main {
  padding-right: 0;
}
</style>
