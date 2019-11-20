<template>
  <div>
    <editfrom title="品牌介绍管理" class="fl">
      <div class="line c">
        <div class="line_content_first_title fl">
          <span>品牌商</span>
          <h4>{{model.Brand_Name}}</h4>
        </div>
        <div class="fr">
          <img :src="model.ImgLogo" class="brandLogo" alt />
        </div>
      </div>
      <div class="line c">
        <addpopularize @callback="brandAdd" ref="brandAdd"></addpopularize>
      </div>
      <div class="line c">
        <popularizelist :data="model.BrandAptitudeList" @call="brandDragged" @del="brandDel"></popularizelist>
      </div>
      <div class="line c">
        <span>品牌介绍：</span>
        <tinymce v-model="model.Brand_Remark" class="fr context_right"></tinymce>
      </div>
      <div class="line c">
        <span>视频标题：</span>
        <div class="fr context_right">
          <input type="text" v-model="model.BrandVideoTitle" class="form-control videoinput" />
        </div>
      </div>
      <div class="line c">
        <span>视频首图：</span>
        <div class="fr context_right">
          <img class="videopic" :src="model.BrandVideoMainImg" v-if="model.BrandVideoMainImg" alt />
          <uploadimg
            class="fl"
            v-model="model.BrandVideoMainImg"
            max="504900"
            error="图片大小不能超过500KB"
          ></uploadimg>
        </div>
      </div>
      <div class="line c">
        <span>品牌视频：</span>
        <upvideo
          class="fr context_right"
          v-model="model.BrandVideo"
          :poster="model.BrandVideoMainImg"
        ></upvideo>
      </div>
      <div class="line c">
        <span>公众号二维码：</span>
        <div class="fr context_right">
          <img :src="model.QRCode" class="brandLogo" alt />
        </div>
      </div>
      <div class="line c">
        <span>品牌资质：</span>
        <div class="fr context_right">
          <ul class="qualificationslist">
            <li v-for="(item,index) in model.OrgBannerList" :key="index">
              <img :src="item.AttachmentUri" class="listx" alt />
              <img src="@/assets/img/x.jpg"  @click="orgbrandDel(item)" class="listimg" />
            </li>
          </ul>
          <uploadimg
            class="fl"
            ref="upOrgBrand"
            v-model="OrgBannerImgModel.AttachmentUri"
            max="504900"
            :callback="orgBrandCallBack"
            error="图片大小不能超过500KB"
          ></uploadimg>
        </div>
      </div>
    </editfrom>
    <div style="position:relative">
      <prephone class="fr" v-model="type">
        <div class="detailIner">
          <div class="detail-top">
            <div class="detail-mark">
              <span>品牌商</span>
            </div>
            <div class="detail-icon">
              <img :src="model.ImgLogo" />
            </div>
            <p class="detail-title">{{model.Brand_Name}}</p>
          </div>
        </div>
        <!-- 轮播图 -->
        <div class="swip_box">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in model.BrandAptitudeList" :key="index">
              <a href="javascript:;">
                <i
                  style="height: 190px;display: block; background-repeat: no-repeat;
    background-size: cover;"
                  v-bind:style="{backgroundImage:'url(' + item.AttachmentUri + ')'}"
                ></i>
              </a>
            </swiper-slide>
            <div class="swiper-button-prev swiper-button-prev1" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-next1" slot="button-next"></div>
          </swiper>
          <!-- 分页器 -->
          <div class="swiper-pagination page" slot="pagination"></div>
        </div>
        <div class="int-p">
          <p v-html="model.Brand_Remark"></p>
        </div>

        <div class="videoBox">
          <video :src="model.BrandVideo" :poster="model.BrandVideoMainImg" preload controls></video>
        </div>
        <span class="int-line"></span>
        <div class="pinp-Box">
          <div class="pinp-title">品牌商公众号</div>
          <img :src="model.QRCode" alt />
        </div>
        <div class="detail-footer-link">
          <a class="detail-footer-tel" href="tel:021-88888888">021-88888888</a>
        </div>
        <div class="int-nav">
          <div class="int-nav-item f-cb">
            <div class="consultation-head active">
              <span class="consultation-head-title">公司资质</span>
              <span class="consultation-mark"></span>
            </div>
            <div class="consultation-head">
              <span class="consultation-head-title">附近门店</span>
              <span class="consultation-mark"></span>
            </div>
          </div>
          <div class="item-Box" style>
            <swiper :options="swiperOption1">
              <swiper-slide v-for="(item,index) in model.OrgBannerList" :key="index">
                <a href="javascript:;">
                  <i
                    style="height: 190px;display: block; background-repeat: no-repeat;
    background-size: cover;"
                    v-bind:style="{backgroundImage:'url(' + item.AttachmentUri + ')'}"
                  ></i>
                </a>
              </swiper-slide>
              <div class="swiper-button-prev swiper-button-prev1" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-next1" slot="button-next"></div>
            </swiper>
            <!-- 分页器 -->
            <div class="swiper-pagination page" slot="pagination"></div>
          </div>
          <div class="code">
            <div class="code-img">
              <img
                src="http://admin.zhengpin.so/uploadFiles/8aa96cb4c7244bcd8ec5c5ca39e0e6a7.jpg"
                alt
              />
            </div>
            <p>正品公众号</p>
            <p>
              长按二维码&nbsp;&nbsp;
              <span>一键关注</span>
            </p>
          </div>
        </div>
      </prephone>
      <div class="add_btn_row">
        <b-form-group sm="12" style="text-align: center;">
          <b-button variant="primary" style="width: 100px;height: 35px;" @click="save">保存</b-button>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
import editfrom from '@/components/page-editfrom'
import prephone from '@/components/page-prephone'
import addpopularize from '@/components/page-addpopularize'
import popularizelist from '@/components/page-popularizelist'
import tinymce from '@/components/com-tinymce'
import upvideo from '@/components/page-upvideo'
import uploadimg from '@/components/page-uploadImg'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      type: 'brandnav',
      model: {
        Brand_Name: '', //  品牌名称
        BrandAptitudeList: [
          {
            AttachmentUri: '', //  图片URL
            Sort: '0', //  排序号
            Title: '', //  标题
            Url: '' // 连接URL
          }
        ], //  推广图片
        ImgLogo:
          'http://admin.zhengpin.so/uploadFiles/43998185c40e4b19997751ab0e33f3fa.png', //  企业logo图
        Brand_Remark: '', //  品牌介绍
        BrandVideoTitle: '', //  视频标题
        BrandVideo: '', // 视频链接
        BrandVideoMainImg: '', // 视频首图
        QRCode: '', // 公众号二维码图片
        OrgBannerList: [
          {
            AttachmentUri: '' //  图片URL
            // Sort: '0', //  排序号
            // Title: '', //  标题
            // Url: '' // 连接URL
          }
        ] // 品牌资质
      },
      BrandImgModel: {
        AttachmentUri: '', //  图片URL
        Title: '', //  标题
        Url: '' // 连接URL
      },
      OrgBannerImgModel: {
        AttachmentUri: '' //  图片URL
      },
      orgBrandOne: [],
      orgBrandTwo: [],
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next.swiper-button-next1',
          prevEl: '.swiper-button-prev.swiper-button-prev1'
        }
      },
      swiperOption1: {
        slidesPerView: 2,
        slidesPerGroup: 4,
        spaceBetween: 10,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        centerInsufficientSlides: true,
        pagination: {
          nextEl: '.swiper-button-next.swiper-button-next2',
          prevEl: '.swiper-button-prev.swiper-button-prev2'
        }
      }
    }
  },
  created () {
    // 获取目前的品牌商数据
    let _ = this
    _.queryBrandInfo({
      id: '074a14a5547e456db9435cd2637909c5'
    }).then(res => {
      Object.assign(_.model, res)
    })
  },
  mounted () {
    // let _ = this
    // this.$dragging.$on('dragged', ({ value }) => {
    //   _.model.BrandAptitudeList.map((item, index) => (item.Sort = index))
    // })
  },
  methods: {
    ...mapActions(['queryBrandInfo', 'editBrandInfo']),
    save () {
      var _ = this
      _.editBrandInfo(_.model).then(res => {
        // 保存后返回
        alert('成功')
      })
    },
    // 推广图片添加
    brandAdd (model) {
      this.BrandImgModel = model
      // 保证图片不为空的时候就添加
      if (this.BrandImgModel.AttachmentUri) {
        if (this.model.BrandAptitudeList.length <= 8) {
          this.model.BrandAptitudeList.unshift(
            JSON.parse(JSON.stringify(this.BrandImgModel))
          )
          this.$refs.brandAdd.reset()
          // 构建排序号
          this.model.BrandAptitudeList.map(
            (item, index) => (item.Sort = index)
          )
        } else {
          alert('图片最多添加8条')
        }
      } else {
        alert('请选择图片后添加')
      }
    },
    brandDragged () {
      this.model.BrandAptitudeList.map((item, index) => (item.Sort = index))
    },
    // 推广图片删除
    brandDel (item) {
      this.model.BrandAptitudeList.splice(
        this.model.BrandAptitudeList.indexOf(item),
        1
      )
      // 构建排序号
      this.model.BrandAptitudeList.map((item, index) => (item.Sort = index))
    },
    // 资质图片回调
    orgBrandCallBack (res) {
      this.OrgBannerImgModel.AttachmentUri = res
      if (this.OrgBannerImgModel.AttachmentUri) {
        if (this.model.OrgBannerList.length <= 7) {
          this.model.OrgBannerList.unshift(
            JSON.parse(JSON.stringify(this.OrgBannerImgModel))
          )
          // 清空对象中的值
          Object.keys(this.OrgBannerImgModel).map(
            key => (this.OrgBannerImgModel[key] = '')
          )
          // 重置上传图片的元素对象
          this.$refs.upOrgBrand.reset()
        } else {
          alert('图片最多添加8条')
        }
      } else {
        alert('请选择图片后添加')
      }
    },
    // 资源图片删除
    orgbrandDel (item) {
      this.model.OrgBannerList.splice(
        this.model.OrgBannerList.indexOf(item),
        1
      )
    }
  },
  components: {
    editfrom,
    prephone,
    addpopularize,
    popularizelist,
    tinymce,
    upvideo,
    uploadimg
  }
}
</script>

<style lang="scss" scoped>
.add_btn_row {
  position: absolute;
  right: 90px;
  top: 650px;
}
.line {
  margin-top: 10px;
  .line_content_first_title {
    // width: 100px;
  }
  .brandLogo {
    width: 190px;
    height: 105px;
  }
}
.context_right {
  width: 710px;
}
.videopic {
  width: 150px;
  height: 100px;
  float: left;
}
.videoinput {
  width: 680px;
  height: 20px;
}
.qualificationslist {
  margin-left: -10px;
  li {
    position: relative;
    float: left;
    margin: 10px;
  }
  .listimg {
    position: absolute;
    right: 0px;
    width: 35px;
    height: 35px;
  }
  .listx {
        width: 145px;
    height: 165px;
  }
}
// 手机预览部分
.detailIner {
  padding: 15px;
  .detail-mark {
    margin-top: 8.5px;
    width: 100px;
    float: left;
    span {
      font-size: 14px;
      color: #888;
      height: 10px;
      line-height: 10px;
      padding-right: 12.5px;
      margin: 0 12.5px 12.5px 0;
      display: inline-block;
    }
  }
  .detail-icon {
    float: right;
    vertical-align: top;
    width: 105px;
    font-weight: bold;
    font-size: 12px;
    color: #2d5a2b;
    text-align: center;
    background-size: 34px 28px;
    background-repeat: no-repeat;
    background-position: center 9px;
    height: 60px;
    overflow: hidden;
    img {
      width: 100% !important;
      height: 100% !important;
    }
  }
  .detail-title {
    width: 125px;
    color: #222;
    font-weight: bold;
    font-size: 14px;
    display: inline-block;
    vertical-align: top;
  }
}
.int-p {
  line-height: 24px;
  font-size: 14px;
  color: #666;
  margin-top: 20px;
  text-transform: capitalize;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 20px;
}
.int-p :first-letter {
  font-size: 28px;
  color: #222;
}
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
.int-line {
  width: 100%;
  font-weight: 700;
  height: 1px;
  display: block;
  background-color: #eeeeee;
}
.pinp-Box {
  margin-top: 22.5px;
  padding-bottom: 18px;
  .pinp-title {
    font-size: 12px;
    color: #888;
    text-align: center;
    line-height: 1;
    margin-bottom: 15px;
  }
  img {
    width: 80px;
    height: 80px;
    display: block;
    margin: 0 auto;
  }
}
.detail-footer-link {
  text-align: center;
  margin: 8px;
  .detail-footer-tel {
    text-decoration: none;
    font-size: 13px;
    color: #4285f4;
    background: url("../../../assets/img/tel.png") no-repeat left center;
    background-size: 12px 12px;
    padding-left: 22px;
    margin: 0 auto;
    line-height: 1;
  }
}
.int-nav {
  padding: 0 15px 50px 15px;
  margin-top: 22.5px;
  background: #fff;
  .int-nav-item {
    border-bottom: 0.5px solid #eee;
    height: 48px;
    line-height: 48px;
  }
  .consultation-head {
    width: 50%;
    float: left;
    position: relative;
    .consultation-head-title {
      font-size: 13px;
      color: #999999;
      font-weight: bold;
    }
  }
  .consultation-head.active {
    .consultation-head-title {
      font-size: 13px;
      color: #222;
      font-weight: bold;
    }
    .consultation-mark {
      width: 13px;
      height: 3.5px;
      background-color: #4285f4;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  .item-Box {
    width: 100%;
    height: 230px;
    margin-top: 19px;
    .company-swiper .swiper-slide a {
      width: 115px;
      height: 83px;
      border: 1 solid #eee;
      float: left;
      margin-right: 5px;
      margin-bottom: 5px;
      img {
        border: 1 solid #eee;
        width: 110px;
        height: 83px;
      }
    }
    .item-page {
      .item-line {
        // background: url(../img/ico1.png) no-repeat center;
        width: 35.5px;
        height: 5px;
        background-size: cover;
        display: block;
        margin-bottom: 10px;
      }
      .item-page-box {
        color: #999999;
        font-size: 12px;
      }
      .activePage {
        font-size: 18px;
        color: #4285f4;
        font-weight: bold;
      }
      .allPage {
        color: #999999;
        font-size: 12px;
      }
    }
  }
}
.code {
  padding: 9px 0 27px 0;
  background-color: #fff;
  margin-top: 9px;
  .code-img {
    width: 93px;
    height: 120px;
    margin: 0 auto;
    //background-image: url(../img/sta11.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 12px 12px 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    font-weight: bold;
    text-align: center;
    font-size: 12px;
    color: #222;
  }
  span {
    color: #4285f4;
  }
}
.swip_box {
  height: 200px;
  width: 270px;
  position: relative;
  .page {
    position: absolute;
    right: 0;
    bottom: -15px;
    left: auto;
    width: auto;
  }
  // 分页：
  .item-page {
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-right: 10px;
  }
}
</style>
