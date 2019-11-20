<template>
  <div>
    <editfrom title="产品编辑" class="fl">
      <!-- 导航栏 -->
      <div class="menu">
        <div class="nav_pro">
          <p :class="{underLine:state===0}" @click="state=0">产品详情</p>
          <p :class="{underLine:state===1}" @click="state=1">规格参数</p>
          <p :class="{underLine:state===2}" @click="state=2">使用说明</p>
        </div>
      </div>
      <!-- 产品内容 -->
      <div v-show="state===0">
        <!-- 富文本编辑器 -->
        <div id="introduc">
          <div id="edit">
            <tinymce ref="editor" height="500px" v-model="model.PicContent" />
          </div>
        </div>
      </div>
      <!-- 规格参数 -->
      <div v-show="state===1">
        <div class="tb">
          <table>
            <colgroup>
              <col style="width: 20%" />
              <col style="width: 30%" />
              <col style="width: 30%" />
              <col style="width: 20%" />
            </colgroup>
            <thead>
              <tr>
                <th>图片</th>
                <th>参数名称</th>
                <th>参数值</th>
                <th>操作</th>
              </tr>
            </thead>
          </table>
        </div>

        <!-- 上传参数 -->
        <div class="up">
          <div class="upload">
            <b-img class="preImg" :src="productStand.icon" alt></b-img>
            <uploadimg
              style="margin-left: 30px;"
              v-model="productStand.icon"
              max="504900"
              error="图片大小不能超过500KB"
            ></uploadimg>
          </div>
        </div>
        <div class="inpt fr">
          <div class="tit fl">
            <input type="text" v-model="productStand.Key" class="form-control" placeholder="参数名" />
          </div>
          <div class="url fl">
            <input type="text" v-model="productStand.Value" class="form-control" placeholder="参数值" />
          </div>
          <button type="button" class="btn btn-primary fl" @click="addStand">添加</button>
        </div>
        <!-- 参数展示 -->
        <ul class="show_Pro">
          <li v-for="(item,index) in model.Parameters" :key="index">
            <div class="showImg">
              <img :src="item.icon" alt />
            </div>
            <div class="show_Input fr">
              <div class="tit fl">
                <input type="text" v-model="item.Key" class="form-control" placeholder="参数名" />
              </div>

              <div class="url fl">
                <input type="text" v-model="item.Value" class="form-control" placeholder="参数值" />
              </div>

              <button type="button" class="btn btn-primary fl" @click="standUp(item)">向上</button>
              <button type="button" class="btn btn-primary fl" @click="standDown(item)">向下</button>
              <button type="button" class="btn btn-danger fl" @click="standDel(item)">×</button>
            </div>
          </li>
        </ul>
      </div>
      <!-- 使用说明 -->
      <div v-show="state===2">
        <!-- 富文本编辑器 -->
        <div id="introduc">
          <div id="edit">
            <tinymce ref="editor" v-model="model.Content" />
          </div>
        </div>
        <!-- 使用说明PDF -->
        <div class="upPDF">
          <button type="button" class="btn btn-default">
            添加说明书文件（PDF）
            <input type="file" accept="application/pdf" />
          </button>
          <img src="@/assets/img/PDF_img.png" alt />
        </div>
      </div>
    </editfrom>
    <div style="position:relative">
      <prephone class="fr" v-model="type">
        <div class="app">
          <!-- mobel_title + mobel_logo -->
          <div class="header">
            <div class="mobel_title fl">
              <span>品牌商</span>
              <h4>松堡王国1</h4>
            </div>
            <div class="mobel_logo fr"></div>
          </div>
          <div class="pro_box">
            <h4>松堡王国儿童家具</h4>
            <ul>
              <li>品牌名称：松堡王国1</li>
              <li>产品名称：松堡王国儿童家具</li>
              <li>产品型号：--</li>
              <li>产品系列：北美系列</li>
            </ul>
          </div>

          <div class="bgc"></div>
          <!-- 产品内容 -->
          <div class="pro_nav">
            <div class="nav_item">
              <div class="main_nav">
                <ul>
                  <li
                    class="nav_title"
                    :class="{hid:state!==0,nav_Line:state===0}"
                    @click="state=0"
                  >
                    产品详情
                    <span>|</span>
                  </li>
                  <li
                    class="nav_title"
                    :class="{hid:state!==1,nav_Line:state===1}"
                    @click="state=1"
                  >
                    规格参数
                    <span>|</span>
                  </li>
                  <li
                    class="nav_title"
                    :class="{hid:state!==2,nav_Line:state===2}"
                    @click="state=2"
                  >使用说明</li>
                </ul>
              </div>
            </div>
            <div class="item_box" v-show="state===0" v-html="model.PicContent">
              <!-- 使用说明展示 -->
            </div>
            <div class="item_box" v-show="state===1">
              <!-- 使用说明展示 -->
              456使用说明展示
            </div>
            <div class="item_box" v-show="state===2" v-html="model.Content">
              <!-- 使用说明展示 -->
              789使用说明展示
            </div>
            <p>*产品的详细信息以实物为准</p>
          </div>
          <div class="bgc"></div>
          <!-- 底部正品公众号 -->
          <div class="qr_pic">
            <div class="code_img">
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
        <b-form-group sm="12">
          <b-col sm="5" style="line-height: 35px;text-align: right;" class="fl">
            <label>标题：</label>
          </b-col>
          <b-col sm="7" class="fr">
            <b-form-input style="height:22px" v-model="model.Title" placeholder="请输入标题"></b-form-input>
          </b-col>
        </b-form-group>
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
import tinymce from '@/components/com-tinymce'
// import upvideo from '@/components/page-upvideo'
import uploadimg from '@/components/page-uploadImg'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      model: {
        Title: '', // 标题
        PicContent: '',
        Content: '',
        Parameters: [
          {
            Key: '',
            Value: '',
            icon:
              'http://admin.zhengpin.so/UploadFiles/628abd51c4224c51ac400bd9c4ef387a.jpg'
          }
        ] // 规格参数列表
      },
      productStand: {
        Key: '',
        Value: '',
        icon: ''
      },
      type: 'infonav',
      state: 0 // 0：产品详情 1:规格阐述 2：使用说明
    }
  },
  created () {
    var _ = this
    _.queryProduct({ id: '77ed9c4007a042bfbe3b529d3ea81cad' }).then(res => {
      Object.assign(_.model, res[0])
      if (res[0].Parameters) {
        _.model.Parameters = JSON.parse(res[0].Parameters)
      }
    })
  },
  methods: {
    ...mapActions(['editProduct', 'queryProduct']),
    save () {
      var _ = this
      _.editProduct(_.model).then(res => {
        alert('成功')
      })
    },
    addStand () {
      if (this.productStand.icon) {
        this.model.Parameters.unshift(
          JSON.parse(JSON.stringify(this.productStand))
        )
        // 清空对象中的值
        Object.keys(this.productStand).map(
          key => (this.productStand[key] = '')
        )
        // 重置上传图片的元素对象
        this.$refs.upBrand.reset()
      } else {
        alert('请选择图片后添加')
      }
    },
    standUp (item) {
      var index = this.model.Parameters.indexOf(item)
      if (index !== 0) {
        swapArray(this.model.Parameters, index, index - 1)
      }
    },
    standDown (item) {
      var index = this.model.Parameters.indexOf(item)
      if (index + 1 !== this.model.Parameters.length) {
        swapArray(this.model.Parameters, index, index + 1)
      }
    },
    standDel (item) {
      this.model.Parameters.splice(this.model.Parameters.indexOf(item), 1)
    }
  },
  components: {
    editfrom,
    tinymce,
    prephone,
    uploadimg
    // upvideo
  }
}
function swapArray (arr, index1, index2) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0]
  return arr
}
</script>

<style lang="scss" scoped>
.preImg {
  position: absolute;
  width: 85px;
  height: 85px;
  left: 55px;
  margin-top: 5px;
}
.add_btn_row {
  position: absolute;
  right: 20px;
  top: 650px;
}
.app {
  padding: 0 5px 0 0;

  img {
    width: 277px;
    height: 155px;
  }
  // mobel_title + mobel_logo
  .header {
    width: 277px;
    height: 80px;
    padding: 10px;
    .mobel_title {
      margin-top: 8px;
      span {
        font-size: 12px;
        color: #666666;
      }
      h4 {
        display: block;
        font-weight: 700;
        color: #222;
        margin-top: 8px;
      }
    }
    .mobel_logo {
      img {
        width: 100px;
        height: 60px;
      }
    }
  }
  .pro_box {
    width: 277px;
    margin-top: 20px;
    h4 {
      margin-left: 10px;
    }
    ul {
      height: 120px;
      overflow: hidden;
      margin-top: 18px;
      padding-left: 10px;
      li {
        font-size: 12px;
        color: #666666;
        line-height: 14px;
        margin-bottom: 10px;
      }
    }
  }
  .bgc {
    width: 97%;
    height: 15px;
    background-color: #f7f7f7;
    margin-top: 10px;
  }
  // 产品内容
  .pro_nav {
    overflow: hidden;
    padding: 0 8px 10px 10px;
    .nav_item {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #eee;

      .main_nav {
        ul {
          height: 40px;
          padding: 0px;
          li {
            width: 33.3%;
            height: 30px;
            font-size: 14px;
            font-weight: 700;
            color: #222;
            line-height: 20px;
            margin: 10px auto;
            padding-left: 10px;
            float: left;
            cursor: pointer;
            // border-right: 1px solid #d9e7fd;
            span {
              font-size: 14px;
              color: #d9e7fd;
              float: right;
            }
          }
          .last {
            border-right: none;
          }
          .nav_Line {
            border-bottom: 2px solid #4285f4;
          }
          .hid {
            font-size: 12px;
            color: #a2a2a2;
          }
        }
      }
    }
    .item_box {
      width: 250px;
      height: 100%;
      margin-top: 15px;
      .pro_list {
        margin: 0;
        padding: 0;
        li {
          margin-top: 5px;
          img {
            width: 258px;
            height: 170px;
          }
        }
      }
    }
    p {
      font-size: 12px;
      color: #4285f4;
      margin-top: 20px;
      margin-bottom: 0px;
    }
  }
  // 正品公众号
  .qr_pic {
    height: 250px;
    margin-top: 20px;
    .code_img {
      width: 110px;
      height: 140px;
      margin: 0 auto;
      background: url("/assets/img/code.png") no-repeat center center;
      background-size: cover;
      padding: 10px 15px 45px;
      margin-bottom: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      height: 20px;
      font-weight: bold;
      text-align: center;
      color: #222;
      font-size: 14px;
      span {
        color: #4285f4;
      }
    }
  }
}
.menu {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ccc;
  .nav_pro {
    cursor: pointer;
    p {
      width: 33.3%;
      float: left;
      font-size: 14px;
      color: #616161;
      text-align: center;
      line-height: 58px;
    }
    .underLine {
      font-size: 14px;
      font-weight: 700;
      color: #2e2e2e;
      border-bottom: 2px solid #4285f4;
    }
  }
}
.tb {
  height: 50px;
  background-color: #f1f1f1;
  table {
    width: 100%;
    thead {
      tr {
        line-height: 33px;
        text-align: center;
        th {
          text-align: center;
        }
      }
    }
  }
}
#introduc {
  height: 600px;
  margin-top: 10px;
  float: left;
  width: 100%;
  #edit {
    height: 100%;
  }
}
.inpt {
  width: 555px;
  // height: 50px;
  margin-left: 10px;
  margin-top: -75px;
  .tit {
    width: 190px;
    line-height: 25px;
    margin-right: 20px;
    input {
      width: 140px;
    }
  }
  .url {
    width: 190px;
    line-height: 25px;
    margin-right: 20px;
    margin-left: -15px;
    input {
      width: 140px;
    }
  }
  button {
    width: 80px;
    height: 35px;
    line-height: 25px;
  }
}
// 参数展示
.show_Pro {
  padding: 0;
  li {
    height: 75px;
    .showImg {
      width: 100%;
      margin-top: 20px;
      margin-left: -20px;
      img {
        width: 75px;
        height: 75px;
        float: left;
        margin-left: 60px;
      }
    }
    .show_Input {
      width: 555px;
      margin-top: 15px;
      .tit {
        width: 160px;
        line-height: 25px;
        margin-right: 35px;
        input {
          width: 140px;
        }
      }
      .url {
        width: 160px;
        line-height: 25px;
        margin-right: 35px;
        input {
          width: 140px;
        }
      }
      button {
        width: 51px;
        height: 30px;
        line-height: 16px;
        margin-left: 2px;
      }
    }
  }
}
.upPDF {
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0;
  button {
    width: 250px;
    height: 38px;
    font-size: 14px;
    line-height: 38px;
    margin: 0 auto;
    display: block;
    input {
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
  }
  img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    display: block;
  }
}
.content input {
  height: 22px;
}
</style>
