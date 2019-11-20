<template>
  <div>
    <b-modal id="modal-1" title="请选择视频" size="lg" hide-footer centered scrollable>
       <b-table striped hover :items="items" :fields="fields" @row-dblclicked="dblclicked"></b-table>
       <b-button class="mt-3" block @click="$bvModal.hide('modal-1')">关 闭</b-button>
    </b-modal>
    <video preload controls="controls" :poster="poster"  style="width: 260px;
    height: 180px;" :src="assetsPath+value"></video>
    <div class="up fr">
      <div class="upload">
        <input
          type="file"
          name="file"
          multiple="multiple"
          @change="tirggerFile($event)"
          accept="video/mp4"
        />
        <div class="txt">
          <span class="uppic">添加本地视频</span>
        </div>
      </div>
      <div class="upload" @click="$bvModal.show('modal-1')">
        <div class="txt" style="margin-top: 75px;" >
          <span class="uppic" v-b-modal.modal-1>选择品牌视频</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Axios from '@/axios/axios'
import { assetsPath } from '@/axios/comAjax'
export default {
  data () {
    return {
      assetsPath: assetsPath,
      video: '',
      fields: [
        {
          key: 'Title',
          label: '标题'
        },
        {
          key: 'ATTACHMENT_OLDFILENAME',
          label: '文件名称'
        },
        {
          key: 'ROW_CREATETIME',
          label: '上传时间'
        }
      ],
      items: [
        { Title: 40, ATTACHMENT_OLDFILENAME: '49d689788ae94d9eaef8d4e89c0a90e4.mp4', ROW_CREATETIME: '', ATTACHMENT_URI: 'http://admin.zhengpin.so/UploadFiles/d10e4cb2e4d7460a811823f40aaf814f.mp4' },
        { Title: 41, ATTACHMENT_OLDFILENAME: '49d689788ae94d9eaef8d4e89c0a90e4.mp4', ROW_CREATETIME: '', ATTACHMENT_URI: '' },
        { Title: 42, ATTACHMENT_OLDFILENAME: '49d689788ae94d9eaef8d4e89c0a90e4.mp4', ROW_CREATETIME: '', ATTACHMENT_URI: '' }
      ]
    }
  },
  props: ['value', 'poster'],
  mounted () {

  },
  methods: {
    dblclicked (item) {
      let _ = this
      _.video = item.ATTACHMENT_URI
      _.$emit(
        'input', item.ATTACHMENT_URI)
      _.$bvModal.hide('modal-1')
    },
    tirggerFile ($event) {
      let _ = this
      var formData = new FormData()
      for (let i = 0; i < $event.target.files.length; i++) {
        formData.append('file', $event.target.files[i])
      }
      return Axios.post('DataScreenHandler.ashx', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        $event.target.value = ''
        _.$emit(
          'input',
          res.Url
        )
        _.video =
          res.Url
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.up {
  width: 100%;
  height: 100px;
  margin-top: 10px;
  margin-left: 80px;

  .upload,
  .upload:hover {
    display: inline-block;
    width: 75px;
    height: 75px;
    border-radius: 2px;
    cursor: pointer;
    margin-right: 30px;
  }
  .upload {
    background: url("../assets/img/up1.png") center center no-repeat;
    background-size: 85px 85px;
    input {
      width: 75px;
      height: 75px;
      cursor: pointer;
      opacity: 0;
      margin-right: 0px;
    }
    img {
      display: block;
      width: 25px;
      height: 25px;
      line-height: 25px;
      border: 1px solid #e5e5e5;
      float: left;
    }
  }
  .upload:hover {
    background: url("../assets/img/up2.png") center center no-repeat;
    background-size: 85px 85px;
  }
  .txt {
    width: 500px;
    cursor: pointer;
    .uppic {
      color: #3f90f4;
    }
    .tip {
      color: #ed1c24;
      font-size: 12px;
      line-height: 25px;
      margin-left: 10px;
    }
  }
}
</style>
