<template>
  <div class="tzjz-container-component" @contextmenu.prevent.stop="contextMenu" :style={...this.style}>
    <ContextMenu ref="contextMenu" :menuList="menuList"></ContextMenu>
  </div>
</template>

<script>
import ContextMenu from "@/components/Design/ContextMenu/ContextMenu";
export default {
  components: {
    ContextMenu
  },
  data() {
    return {
      style: {
        height: '200px'
      },
      menuList: [{ text: "设置" }]
    };
  },
  methods: {
    contextMenu(e) {
      this.$refs.contextMenu.show(e);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Container.scss";
</style>
