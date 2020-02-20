<template>
  <el-card class="box-card" shadow="never">
    <div slot="header" class="clearfix">
      <span>页面</span>
      <el-button style="float: right; padding: 3px 0" type="text">新建页面</el-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{ "列表内容 " + o }}
    </div>
  </el-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
