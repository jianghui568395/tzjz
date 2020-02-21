<template>
  <div class="home-page" @contextmenu.prevent.stop="contextMenu">
    <!-- <Container></Container> -->

    <!-- 邮件 -->
    <ContextMenu ref="contextMenu"></ContextMenu>
    <!-- 设计器 -->
    <DesignModal v-show="$store.state.Design.toggle"></DesignModal>
  </div>
</template>

<script>
// @ is an alias to /src
import Container from '@/components/Page/Container/Container'
import ContextMenu from "@/components/Design/ContextMenu/ContextMenu";
import DesignModal from "@/components/Design/DesignModal/DesignModal";
export default {
  name: 'Home',
  components: {
    DesignModal,
    ContextMenu,
    Container
  },
  data () {
    return {
    }
  },
  methods: {
    contextMenu (e) {
      this.$refs.contextMenu.show(e);
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page{
  height: 100%;
}
</style>
