<template>
  <div class="box">
    <div class="top">
      <p>{{title}}</p>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
.box {
  width: 850px;
  border: 1px solid #dddddd;
  position: relative;
  .top {
    height: 40px;
    background-color: #4285f4;
    p {
      color: #ffffff;
      line-height: 40px;
      text-align: center;
    }
  }
  .content{
    padding: 20px;
  }
}
</style>
