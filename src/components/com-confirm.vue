<template>
  <transition name="mask-bg-fade">
    <!-- 弹框组件 -->
    <div class="mask">
      <div class="mask_bg"></div>
      <transition name="slide-fade">
        <div class="modelBox">
          <div class="title">
            <p>{{AlertOption.title}}</p>
          </div>
          <div class="message">{{AlertOption.msg}}</div>
          <div class="model_btnBox">
            <button
              v-for="btn in AlertOption.buttons"
              @click="btn.callback"
              :key="btn.title"
            >{{btn.title}}</button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['AlertOption'])
  }
}
</script>
<style scoped lang='scss'>
.mask {
  .modelBox {
    width: 500px;
    height: 300px;
    margin: 100px auto;
    background-color: #ccc;
    border: 1px solid #245580;
    position: relative;
    top: calc(22%);
    border-radius: 5px;
  }
  .title {
    padding: 5px;
    text-align: center;
    // display: flex;
    // justify-content: center;
    background-color: #aaa;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    p {
      flex: 1;
      color: #666;
    }
  }
  .message {
    // padding: 5px;
    margin: 70px;
    height: 30px;
    span {
      display: inline-block;
      padding: 10px;
      background-color: #24d08e;
      width: 20px;
      margin: 5px;
      color: white;
      text-align: center;
      border-radius: 2px;
    }
  }
  .model_btnBox {
    text-align: center;
    button {
      padding: 5px 5px;
      border: none;
      color: white;
      border-radius: 2px;
      margin: 0 60px;
      &:nth-child(1) {
        width: 80px;
        height: 35px;
        padding: 4px 4px;
        border-radius:3px;
        background-color: #337ab7;
        // background-color: #245580;
        // background-color: #24d08e;
      }
      &:nth-child(2) {
        width: 80px;
        height: 35px;
        padding: 4px 4px;
        border-radius:3px;
        background-color: #337ab7;
        // background-color: #245580;
        // background-color: #24d08e;
      }
    }
  }
}
</style>
