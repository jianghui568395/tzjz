<template>
  <div class="tzjz-design-modal-componet" v-show={toggle} @contextmenu.stop="">
    设计器弹出层
  </div>
</template>

<script>
  export default {
    data (){
      return {
        toggle: false
      }
    }
  }
</script>

<style lang="scss" scoped>
.tzjz-design-modal-componet{
  position: fixed;
  left: 10%;
  top: 5%;
  width: 80%;
  height: 90%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>