<template>
  <div class="box">
    <div class="bg">
      <div class="title">中国家具正品查询平台</div>
      <div class="brand" :class="value"></div>
      <div class="content">
        <happy-scroll color="rgba(0,0,0,0.5)" hide-horizontal size="5">
          <div style="height:100%;width: 260px">
            <slot></slot>
          </div>
        </happy-scroll>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['value']
}
</script>

<style lang="scss" scoped>
.brandnav {
  background-image: url("../assets/img/brandnav.png");
}
.infonav {
  background-image: url("../assets/img/infonav.png");
}
.productnav {
  background-image: url("../assets/img/productnav.png");
}
.box {
  width: 285px;
  height: 600px;
  background-image: url("../assets/img/IPhoneX.png");
  background-size: contain;
}
.bg {
  padding-top: 40px;
  padding-right: 11px;
  padding-left: 11px;
  .title {
    text-align: center;
  }
  .brand {
    height: 35px;
    background-size: cover;
  }
  .content {
    height: 440px;
    width: 100%;
  }
}
</style>
