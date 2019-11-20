<template>
  <div>
    <editfrom title="资讯编辑" class="fl">
      <!-- 表单列表： -->
      <b-form @submit.stop.prevent>
        <b-form-group>
          <b-col sm="3" class="fl">
            <label>资讯标题：</label>
          </b-col>
          <b-col sm="9" class="fr">
            <b-form-input v-model="model.Title" placeholder="请输入资讯标题"></b-form-input>
          </b-col>
        </b-form-group>
        <b-form-group>
          <b-col sm="3" class="fl">
            <label>副标题：</label>
          </b-col>
          <b-col sm="9" class="fr">
            <b-form-input v-model="model.SubTitle" placeholder="请输入副标题"></b-form-input>
          </b-col>
        </b-form-group>
        <b-form-group>
          <b-col sm="3" class="fl">
            <label>主图链接：</label>
          </b-col>
          <b-col sm="9" class="fr">
            <b-form-input v-model="model.Url" placeholder="请输入URL链接"></b-form-input>
          </b-col>
        </b-form-group>
        <b-form-group>
          <b-col sm="3" class="fl">
            <label>排序：</label>
          </b-col>
          <b-col sm="9" class="fr">
            <b-form-input v-model="model.Sort" placeholder="请输入序号"></b-form-input>
          </b-col>
        </b-form-group>
        <b-form-group>
          <b-col sm="3" class="fl">
            <label placeholder="请输入序号">首页显示：</label>
          </b-col>
          <b-col sm="9" class="fr">
            <b-form-select style="width:98%" v-model="model.IsShowMain">
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
            <b-img left :src="model.ImageUrl" alt style="width:150px;height:150px"></b-img>
            <uploadimg class="fl" v-model="model.ImageUrl" max="504900" error="图片大小不能超过500KB"></uploadimg>
          </b-col>
        </b-form-group>
        <b-form-group>
          <b-col sm="3" class="fl">
            <label>资讯内容：</label>
          </b-col>
          <b-col sm="9" class="fr">
            <tinymce ref="editor" v-model="model.Content" />
          </b-col>
        </b-form-group>
        <b-form-group>
          <b-col sm="3" class="fl">
            <label>资讯视频：</label>
          </b-col>
          <b-col sm="9" class="fr">
            <upvideo
              v-model="model.VideoUrl"
              :poster="model.VideoMainImg"
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
            <b-img left :src="model.VideoMainImg" alt style="width:150px;height:150px"></b-img>
            <uploadimg class="fl" v-model="model.VideoMainImg" max="504900" error="图片大小不能超过500KB"></uploadimg>
          </b-col>
        </b-form-group>
      </b-form>
    </editfrom>
    <div style="position:relative">
      <prephone class="fr" v-model="type">
        <div class="app">
          <img src="@/assets/img/mobel/资讯图片.jpg" alt />
          <div class="info-box">
            <p class="info-tit">{{model.Title}}</p>
            <div class="info-namebox">
              <span class="info-name">作者：正品查询平台</span>
              <span class="info-time">2019/8/14 15:15:00</span>
            </div>
            <div class="info-detail">
              <p class="title">
                <strong>
                  <span>{{model.SubTitle}}</span>
                </strong>
              </p>
              <p v-html="model.Content"></p>
              <div class="videoBox" v-if="model.VideoUrl">
                <video
                  :src="model.VideoUrl"
                  :poster="model.VideoMainImg"
                  preload
                  controls
                ></video>
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
import tinymce from '@/components/com-tinymce'
import upvideo from '@/components/page-upvideo'
import uploadimg from '@/components/page-uploadImg'
import { mapActions } from 'vuex'
import { assetsPath } from '@/axios/comAjax'
export default {
  data () {
    return {
      type: 'infonav',
      assetsPath: assetsPath,
      model: {
        Title: '', // 咨询标题
        Url: '', // 主图链接
        SubTitle: '', // 副标题
        Sort: 0, // 排序号
        IsShowMain: true, // 是否在首页中显示
        ImageUrl: '', // 咨询图片
        Content: '', // 咨询内容
        VideoUrl: '', // 视频
        VideoMainImg: '' // 视频首图
      }
    }
  },
  created () {
    var _ = this
    _.queryInfo({ id: '9cd0e5e9a2754a889c2ab22b97908364' }).then(res => {
      Object.assign(_.model, res)
    })
  },
  methods: {
    ...mapActions(['queryInfo', 'editInfo']),
    save () {
      var _ = this
      _.editInfo(_.model).then(res => {
        alert('成功')
      })
    }
  },
  components: {
    editfrom,
    tinymce,
    prephone,
    uploadimg,
    upvideo
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
