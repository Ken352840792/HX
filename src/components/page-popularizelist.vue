<template>
  <div>
    <div class="showPic">
      <div class="pics">
        <ul class="list_Pic">
          <!-- 推广图片（最多上传8张） -->
          <li
            ref="dragging"
            v-for="(item,index) in data"
            v-dragging="{ item: item, list:data, group: 'item' }"
            :key="index"
            class="list fl"
          >
            <img src="@/assets/img/x.jpg" @click="brandDel(item)" class="ximg" alt />
            <img :src="item.AttachmentUri" class="img" alt />
            <div class="pic_tit">
              <span>
                标题：
                <input type="text" v-model="item.Title" class="form-control" />
              </span>
              <span>
                链接：
                <input type="text" v-model="item.Url" class="form-control" />
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    brandDel (item) {
      this.$emit('del', item)
    }
  },
  mounted () {
    let _ = this
    _.$dragging.$on('dragged', ({ value }) => {
      _.$emit('call', null)
    })
  },
  props: ['data'],
  components: {}
}
</script>

<style lang="scss" scoped>
.showPic {
  height: 100%;
  .pics {
    height: 100%;
    .list_Pic {
      width: 100%;
      height: 100%;
      padding-left: 55px;
      .list {
        margin-right: 10px;
        margin-bottom: 10px;
        width: 175px;
        height: 175px;
        margin-top: 25px;
        position: relative;
        .ximg {
          width: 35px;
          height: 35px;
          position: absolute;
          z-index: 1;
          left: 150px;
          top: -15px;
        }
        .img {
          width: 170px;
          height: 100px;
          display: block;
        }
        .pic_tit {
          margin-top: 10px;
          span {
            height: 34px;
            display: block;
            input {
              width: 110px;
              height: 15px;
              float: right;
            }
          }
        }
      }
    }
  }
}
</style>
