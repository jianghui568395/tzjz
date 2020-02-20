<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="组件" name="first">
      
    </el-tab-pane>
    <el-tab-pane label="页面" name="second">页面</el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    data () {
      return {
        activeName: 'first'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>