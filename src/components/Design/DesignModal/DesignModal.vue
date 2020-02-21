<template>
  <div class="tzjz-design-modal-componet" v-show={toggle}>
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
  background-color: red;
}
</style>