<template>
  <div class="home-page">
    <el-row>
      <el-col :span="4">
        <PageSection></PageSection>
        <ComponentList></ComponentList>
      </el-col>
      <el-col :span="20">b</el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import PageSection from '@/components/PageSection/PageSection'
import ComponentList from '@/components/ComponentList/ComponentList'
export default {
  name: 'Home',
  components: {
    ComponentList,
    PageSection
  }
}
</script>

<style lang="scss" scoped>
.home-page{
  height: 100%;
}
</style>
