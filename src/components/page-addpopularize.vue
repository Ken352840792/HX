<template>
  <div>
    <div class="title">
      <span>推广图片：</span>
    </div>
    <img class="preimg" :src="model.AttachmentUri" alt />
    <uploadImg
      ref="img"
      v-model="model.AttachmentUri"
      max="504900"
      class="up"
      error="图片大小不能超过500KB"
    ></uploadImg>
    <div class="fr">
      <div class="inpt fl">
        <div class="tit fl">
          标题：
          <input type="text" v-model="model.Title" class="form-control" />
        </div>
        <div class="tit fl">
          链接：
          <input type="text"  v-model="model.Url" class="form-control" />
        </div>
        <button type="button" class="btn btn-primary fl" @click="Add">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
import uploadImg from '@/components/page-uploadImg.vue'
export default {
  data () {
    return {
      model: {
        AttachmentUri: '',
        Title: '',
        Url: '',
        Sort: 0
      }
    }
  },
  components: {
    uploadImg
  },
  methods: {
    Add () {
      this.$emit('callback', this.model)
    },
    reset () {
      // 清空对象中的值
      Object.keys(this.model).map(key => (this.model[key] = ''))
      // 重置上传图片的元素对象
      this.$refs.img.reset()
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  float: left;
  width: 100px;
}
.preimg {
  width: 90px;
  height: 80px;
  float: left;
  position: absolute;
  margin-top: -15px;
}
.up {
  float: left;
  margin-top: -25px;
}
.inpt {
  width: 510px;
  margin-right: 30px;
  .tit {
    width: 195px;
    line-height: 25px;
    margin-left: 20px;
    input {
      width: 120px;
      height: 20px;
      float: right;
    }
  }
  .btn {
    margin-left: 20px;
  }
}
</style>
