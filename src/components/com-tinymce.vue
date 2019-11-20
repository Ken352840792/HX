<template>
  <div class="tinymce-box">
    <editor v-model="myValue" id="edit" :init="init" :disabled="disabled" @onClick="onClick"></editor>
  </div>
</template>

<script>
// tinymce默认hidden，不引入不显示
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver'
// 编辑器插件plugins
// 更多插件参考：https://www.tiny.cloud/docs/plugins/
import 'tinymce/plugins/image' // 插入上传图片插件
// import 'tinymce/plugins/media'// 插入视频插件
import 'tinymce/plugins/table' // 插入表格插件
import 'tinymce/plugins/lists' // 列表插件
import 'tinymce/plugins/wordcount' // 字数统计插件
var envPath = process.env.NODE_ENV !== 'development' ? '/H5Manager/' : ''
export default {
  components: {
    Editor
  },
  name: 'tinymce',
  props: {
    height: {
      type: String,
      default: '350px'
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default: 'lists image table wordcount'
    },
    toolbar: {
      type: [String, Array],
      default:
        'undo redo |  formatselect | fontselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image table'
    }
  },
  data () {
    return {
      init: {
        toolbar_drawer: 'sliding',
        language_url: envPath + '/tinymce/langs/zh_CN.js',
        language: 'zh_CN',
        skin_url: envPath + '/tinymce/skins/ui/oxide',
        // 暗色系:
        // skin_url: 'tinymce/skins/ui/oxide-dark',
        height: this.height,
        plugins: this.plugins,
        toolbar: this.toolbar,
        branding: false,
        menubar: false,
        font_formats:
          '微软雅黑=Microsoft YaHei;宋体=SimSun;新宋体=NSimSun;黑体=SimHei;楷体_GB2312=KaiTi_GB2312;隶书=LiSu;幼园=YouYuan;华文细黑=STXihei;',
        // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
          // debugger
          if (blobInfo.blob().size <= 2097152) {
            const img = 'data:image/jpeg;base64,' + blobInfo.base64()
            success(img)
          } else {
            failure('请选择2M以内的图片进行上传！')
          }
        }
      },
      myValue: this.value
    }
  },
  mounted () {
    tinymce.init({})
  },
  methods: {
    // 添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
    // 需要什么事件可以自己增加
    onClick (e) {
      this.$emit('onClick', e, tinymce)
    },
    // 可以添加一些自己的自定义事件，如清空内容
    clear () {
      this.myValue = ''
    }
  },
  watch: {
    value (newValue) {
      this.myValue = newValue
    },
    myValue (newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>
<style lang="scss"  >
.tinymce {
  p {
    margin: 0;
    padding: 0;
  }
}
</style>
