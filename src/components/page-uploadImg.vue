<template>
  <div class="upload">
    <input
      type="file"
      ref="fileInput"
      name="file"
      accept="image/*"
      @change="tirggerFile($event)"
      class="uppic"
    />
    <img src="@/assets/img/up1.png" alt />
    <div class="txt">
      <span class="uploadtxt">上传</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrl: ''
    }
  },
  props: ['value', 'max', 'error', 'callback'],
  methods: {
    tirggerFile (event) {
      var _ = this
      let file = event.target.files[0]
      if (!file) {
        return
      }
      if (file.size > _.max) {
        alert(_.error)
        // eslint-disable-next-line no-self-assign
        event.target.value = ''
        return
      }
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = function (e) {
        _.imgUrl = reader.result
        _.$emit('input', reader.result)
        // eslint-disable-next-line no-unused-expressions
        _.callback ? _.callback(reader.result) : ''
      }
    },
    reset () {
      this.imgUrl = ''
      this.$emit('input', '')
      this.$refs.fileInput.value = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.uppic {
  width: 100px;
  height: 130px;
  cursor: pointer;
  opacity: 0;
  margin-right: 0px;
  position: absolute;
}
.upload {
  width: 100px;
  img {
    width: 100px;
    height: 100px;
  }
}
.txt {
  text-align: center;
}
.uploadtxt {
  color: #3f90f4;
}
</style>
