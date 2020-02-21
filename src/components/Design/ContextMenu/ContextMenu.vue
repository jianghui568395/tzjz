<template>
  <ul class="tzjz-context-menu-component" :style="{left: this.left, top: this.top}" v-show="toggle">
    <li @click="openDesignModal">打开设计器</li>
    <li v-for="o in this.menuList" :key="o.text" @click="menuHandler(o)">{{o.text}}</li>
    <li @click="hide" class="color-999">关闭菜单</li>
  </ul>
</template>

<script>
  export default {
    props: {
      menuList: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        toggle: false,
        left: 0,
        top: 0
      }
    },
    methods: {
      show (e) {
        this.left = `${e.clientX + 5}px`;
        this.top = `${e.clientY + 5}px`;
        this.toggle = true
      },
      hide () {
        this.toggle = false
      },
      menuHandler (o) {
        this.$emit('contextMenuHandler', o);
        this.hide()
      },
      openDesignModal () {
        this.$store.commit('openDesign')
      }
    }
  }
</script>

<style lang="scss" scoped>
.tzjz-context-menu-component{
  position: fixed;
  background-color: #FFFFFF;
  li{
    padding: 8px;
    border: 0.5px solid #EEEEEE;
    cursor: pointer;
    &:hover{
      background-color: #EEEEEE;
    }
  }
}
</style>