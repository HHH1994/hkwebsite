<template>
  <div class="contain">
    <div class="header">
      <img :src="logoSrc"  class="logo-header" alt="">
      <Menu class="navigate" mode="horizontal" active-name="first-page" @on-select="jumpPage">
        <Menu-item name="first-page">
            首页
        </Menu-item>
        <Menu-item name="product">
          产品中心
        </Menu-item>
        <Menu-item name="trends">
          公司动态
        </Menu-item>
        <Menu-item name="case">
          典型案列
        </Menu-item>
        <Menu-item name="about-us">
          关于我们
        </Menu-item>
<!--        <li name="firstPage" @click="">首页</li>
        <li name="product">产品中心</li>
        <li name="company">公司动态</li>
        <li name="case">典型案列</li>
        <li name="us">关于我们</li>-->
      </Menu>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
    <div :class="foot">
        <bottom></bottom>
    </div>
  </div>
</template>
<script>
    import Footer from '../components/Footer.vue'
    export default{
        data(){
          return{
              /*动态class配置*/
              foot:'footer',
            /*头部logo地址动态配置*/
              logoSrc:'../../static/img/logo1.png'
          }
        },
        components:{
            bottom:Footer
        },
        methods:{
            jumpPage:function (name) {
              this.$router.push(name);
              /*配置footer样式*/
                name=='trends'||name=='about-us'?this.foot='footer-news':this.foot='footer-ordinary';
              /*配置头部*/
                name=='first-page'?this.logoSrc='../../static/img/logo1.png':this.logoSrc='../../static/img/logo2.png';
            }
        }
    }
</script>
<style>
    .content{
      position:relative;
      top:-100px;
      z-index: -111;
    }

    /*头部*/
    .header{
      position: relative;
      height:100px;
      font-weight:bold;
      font-family: "Microsoft YaHei UI";
      font-size: 16px;
      letter-spacing: 2px;
    }
    .logo-header{
      position: relative;
      left:60px;
      top:30px;
    }
      /*头部导航*/
      .navigate{
        display: inline-block!important;
        position: absolute!important;
        right: 0;
        top:30px;
        line-height:60px;
        background: none!important;
      }
      .ivu-menu-item{
        border: 0!important;
        color:#474747!important;

      }
      .ivu-menu-item-active,.ivu-menu-item:hover{
        color: #e7141a!important;
      }
      .ivu-menu-horizontal.ivu-menu-light:after{
        height: 0!important;
      }
/*      .navigate li{
        list-style: none;
        display: inline-block;
    }*/
      .navigate-menu:active{
        color:#ff0000;
      }
      /*底部*/
  .footer-news{
    background: #f5f5f5;
  }
  .footer-ordinary{
    background: #fff;
  }
</style>
