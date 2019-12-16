<template>
  <div>
    <editfrom title="资讯编辑" class="needs-validation fl" novalidate>
      <!-- 表单列表： -->
      <b-form>
        <b-form-group>
          <b-col sm="3" class="fl">
            <label>
              <font>*</font>资讯标题：
            </label>
          </b-col>
          <b-col sm="9" class="fl">
            <b-form-input
              aria-describedby="input-title-feedback"
              v-model="$v.model.Title.$model"
              :state="$v.model.Title.$dirty ? !$v.model.Title.$error : null"
              placeholder="请输入资讯标题"
            ></b-form-input>
            <b-form-invalid-feedback id="input-title-feedback">请输入资讯标题</b-form-invalid-feedback>
          </b-col>
        </b-form-group>
        <b-form-group>
          <b-col sm="3" class="fl">
            <label>
              <font>*</font>副标题：
            </label>
          </b-col>
          <b-col sm="9" class="fl">
            <b-form-input
              aria-describedby="input-subtitle-feedback"
              v-model="$v.model.SubTitle.$model"
              :state="$v.model.SubTitle.$dirty ? !$v.model.SubTitle.$error : null"
              placeholder="请输入副标题"
            ></b-form-input>
            <b-form-invalid-feedback id="input-subtitle-feedback">请输入副标题</b-form-invalid-feedback>
          </b-col>
        </b-form-group>
        <b-form-group>
          <b-col sm="3" class="fl">
            <label>
              <font>*</font>主图链接：
            </label>
          </b-col>
          <b-col sm="9" class="fl">
            <b-form-input
              aria-describedby="input-url-feedback"
              v-model="$v.model.Url.$model"
              :state="$v.model.Url.$dirty ? !$v.model.Url.$error : null"
              placeholder="请输入主图链接"
              required
            ></b-form-input>
            <b-form-invalid-feedback id="input-url-feedback">请输入URL链接</b-form-invalid-feedback>
          </b-col>
        </b-form-group>
        <b-form-group>
          <b-col sm="3" class="fl">
            <label>
              <font>*</font>排序：
            </label>
          </b-col>
          <b-col sm="9" class="fl">
            <b-form-input
              aria-describedby="input-sort-feedback"
              v-model="$v.model.Sort.$model"
              :state="$v.model.Sort.$dirty ? !$v.model.Sort.$error : null"
              placeholder="请输入序号"
            ></b-form-input>
            <b-form-invalid-feedback id="input-sort-feedback">请输入正确的数字序号</b-form-invalid-feedback>
          </b-col>
        </b-form-group>
        <b-form-group>
          <b-col sm="3" class="fl">
            <label>
              <font>*</font>首页显示：
            </label>
          </b-col>
          <b-col sm="9" class="fl">
            <b-form-select style="width:97%" v-model="$v.model.IsShowMain.$model">
              <option value="true">是</option>
              <option value="false">否</option>
            </b-form-select>
          </b-col>
        </b-form-group>
        <b-form-group>
          <b-col sm="3" class="fl">
            <label>资讯图片：</label>
          </b-col>
          <b-col sm="9" class="fr">
            <b-img
              left
              :src="$v.model.ImageUrl.$model"
              v-if="$v.model.ImageUrl.$model"
              alt
              style="width:150px;height:150px"
            ></b-img>
            <uploadimg class="fl" v-model="$v.model.ImageUrl.$model" max="504900" error="图片大小不能超过500KB"></uploadimg>
            <b-form-invalid-feedback  >请选择资讯图片</b-form-invalid-feedback>
          </b-col>
        </b-form-group>
        <b-form-group>
          <b-col sm="3" class="fl">
            <label>资讯内容：</label>
          </b-col>
          <b-col sm="9" class="fr">
            <tinymce ref="editor" v-model="$v.model.Content.$model" />
          </b-col>
        </b-form-group>
        <b-form-group>
          <b-col sm="3" class="fl">
            <label>资讯视频：</label>
          </b-col>
          <b-col sm="9" class="fr">
            <upvideo
              v-model="$v.model.VideoUrl"
              :poster="$v.model.VideoMainImg"
              class="fr context_right"
              style="position: relative;left: -25px;"
            ></upvideo>
          </b-col>
        </b-form-group>
        <b-form-group>
          <b-col sm="3" class="fl">
            <label>视频首图：</label>
          </b-col>
          <b-col sm="9" class="fr">
            <b-img
              left
              v-if="$v.model.VideoMainImg"
              :src="$v.model.VideoMainImg"
              alt
              style="width:150px;height:150px"
            ></b-img>
            <uploadimg
              class="fl"
              v-model="$v.model.VideoMainImg"
              max="504900"
              error="图片大小不能超过500KB"
            ></uploadimg>
          </b-col>
        </b-form-group>
      </b-form>
    </editfrom>
    <div style="position:relative">
      <prephone class="fr" v-model="type">
        <div class="app">
          <a :href="model.Url" target="_blank">
            <img :src="model.ImageUrl" alt />
          </a>
          <div class="info-box">
            <p class="info-tit">{{model.Title}}</p>
            <div class="info-namebox">
              <span class="info-name">作者：正品查询平台</span>
              <span class="info-time">{{getTime()}}</span>
            </div>
            <div class="info-detail">
              <p class="title">
                <strong>
                  <span>{{model.SubTitle}}</span>
                </strong>
              </p>
              <p v-html="model.Content"></p>
              <div class="videoBox" v-if="model.VideoUrl&&model.VideoMainImg">
                <video :src="model.VideoUrl" :poster="model.VideoMainImg" preload controls></video>
              </div>
            </div>
            <div class="foot_pic">
              <img src="@/assets/img/mobel/正品公众号.jpg" alt />
            </div>
          </div>
        </div>
      </prephone>
      <div class="add_btn_row">
        <b-form-group sm="12" style="text-align: center;">
          <b-button variant="primary" @click="save" style="width: 100px;height: 35px;">保存</b-button>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
import editfrom from '@/components/page-editfrom'
import prephone from '@/components/page-prephone'
// import tinymce from '@/components/com-tinymce'
// import upvideo from '@/components/page-upvideo'
// import uploadimg from '@/components/page-uploadImg'
import { mapActions, mapGetters } from 'vuex'
import { assetsPath } from '@/axios/comAjax'
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  data () {
    return {
      type: 'infonav',
      assetsPath: assetsPath,
      valid: false, // 默认是否验证
      model: {
        Title: null, // 咨询标题
        Url: null, // 主图链接
        SubTitle: null, // 副标题
        Sort: null, // 排序号
        IsShowMain: true, // 是否在首页中显示
        ImageUrl: null, // 咨询图片
        Content: '', // 咨询内容
        VideoUrl: '', // 视频
        VideoMainImg: '' // 视频首图
      }
    }
  },
  validations: {
    model: {
      Title: {
        required,
        minLength: minLength(4)
      },
      Url: {
        required,
        minLength: minLength(4)
      },
      SubTitle: {
        required,
        minLength: minLength(4)
      },
      Sort: {
        required
      }
    }
  },

  created () {
    // var _ = this
    // _.queryInfo({ id: '9cd0e5e9a2754a889c2ab22b97908364' }).then(res => {
    //   Object.assign(_.model, res)
    // })
  },
  methods: {
    ...mapGetters(['getTime']),
    ...mapActions(['queryInfo', 'editInfo']),
    save () {
      this.$v.model.$touch()
      if (this.$v.model.$anyError) {
        return
      }
      alert(1)
    }
  },
  components: {
    editfrom,
    // tinymce,
    prephone
    // uploadimg,
    // upvideo
  }
}
</script>

<style lang="scss" scoped>
.videoBox {
  position: relative;
  height: 200px;
  margin-bottom: 20px;
  video {
    width: 100%;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
  }
}
label font {
  color: red;
}
.form-group .col-sm-3 {
  text-align: right;
}
.form-group input,
select {
  height: 22px;
}
.app {
  padding: 0 5px 0 0;

  img {
    width: 277px;
    height: 155px;
  }
  .info-box {
    margin-top: 10px;
    padding-left: 3px;
    .info-tit {
      text-align: center;
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 20px;
    }
    .info-namebox {
      margin-left: 5px;
      margin-bottom: 20px;
      .info-name {
        font-size: 12px;
        font-weight: 700;
        color: #999;
        margin-right: 25px;
      }
      .info-time {
        font-size: 12px;
        font-weight: 700;
        color: #999;
      }
    }

    .info-detail {
      color: #222;
      padding-bottom: 10px;
      .title {
        margin-top: 20px;
        text-align: center;
        line-height: 22px;
      }
      p {
        width: 252px;
        line-height: 18px;
        span {
          font-size: 14px;
          font-family: 宋体;
          letter-spacing: 1px;
        }
        img {
          width: 98.5%;
          height: 95%;
        }
      }
    }
  }
  .foot_pic {
    margin-bottom: 20px;
    img {
      width: 95%;
      height: 370px;
    }
  }
}
.add_btn_row {
  position: absolute;
  right: 90px;
  top: 650px;
}
</style>
