<template>
    <section>
        <div class='mock'>
            <div class='main'>
              <img src="../assets/img/loading.jpg" alt="">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scope>
  section{
    width:100%;
    height:100%;
    position:relative;
    .mock{
      position:absolute;
      top:0;
      left:0;
      bottom: 0;
      right: 0;
      z-index:100;
      background-color:#E5DDDB;
    .main{
      margin:100px auto;
      text-align:center;
      img{
        width: 200px;
        height: 200px;
      }
      p{
        color: #EBA65C;
        font-size: 22px;
      }
    }
  }
}
</style>
