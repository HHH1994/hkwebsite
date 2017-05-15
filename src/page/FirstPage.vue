<template>
  <div>
    <div class="section-one">
      <img class="section-one-ziPic" src="../../static/img/zi.png" alt="">
      <p class="section-one-zi">为您的爱心</p>
      <img class="section-one-charging" src="../../static/img/charging.gif" alt="">
    </div>
    <div class="section-two">
      <div class="describe-word">
        <p>2006-1016的十年里，</p>
        <p >我献血26次，</p>
        <p>今年的一场手术，让我更加意识到</p>
        <p>作为献血者，我是光荣的</p>
        <p>可是申请免费用血，却是让我操碎了心</p>
        <p class="last-row">能不能简单点？</p>
      </div>
      <div class="picture">
        <img class="first-page-phone"  src="../../static/img/shouji1.png" alt="">
      </div>
    </div>
<!--    <div class="section-three">
      <div class="describe-word">
        <p> 充满爱的心，不应该受到一丁点伤害</p>
        <p >对他们而言，也许只是一件小事</p>
        <p>但我们不那么认为</p>
        <p class="last-row">荣誉是他们应得的，还要方便快捷</p>
      </div>
      <div class="picture">
        <img class="second-page-phone"  src="../../static/img/shouji1.png" alt="">
      </div>
    </div>-->
    <div class="section-four">
      <div class="describe-word">
        <p> 你对社会贡献爱</p>
        <p >社会为你生活增添色彩</p>
        <p class="last-row">带着你的荣誉，去拥抱自然</p>
      </div>
        <div class="picture">
          <img src="../../static/img/xiongmao.png" class="panda" alt="">
          <img src="../../static/img/shouji2.png" class="first-page-phone" alt="">
          <div class="up-pand-word">
              <p>//  凭荣誉证免门票  //</p>
              <p>灵隐飞来峰、动物园、植物园、少儿公园、西溪湿地、雷峰塔</p>
              <p>黄公望森林公园、龙门古镇</p>
              <p>大明山景区、钱王陵园、玲珑山公园</p>
              <p>大慈岩分景区、灵栖洞分景区、新叶古村落</p>
              <p>千岛湖中心湖区、东南湖区、石林景区龙川湾景区</p>
              <p>......</p>
          </div>
        </div>
    </div>
    <div class="section-five">
      <div class="describe-word five-word">
        <p> 我们要做的，就是为你们的爱心注入动力</p>
        <p class="together">共同前行!</p>
      </div>
      <div class="picture">
        <img src="" alt="">
      </div>
      <img src="../../static/img/shouji3.png" class="five-phone" alt="">
      <div class="five-card">
        <img src="../../static/img/erweima.png" class="five-erweima" alt="">
        <p class="erweima-word">赶紧扫描二维码下载吧！</p>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style>

  /*描述语句*/
  .describe-word{
    text-align: center;
    margin:78px 0;
    line-height: 25px;
  }
  .last-row{
    font-size:16px;
    font-family: "Adobe Fan Heiti Std B";
    letter-spacing: 2px;
  }
  /*第一块*/
  .section-one{
    background-image:url("../../static/img/bj_shouye.png") ;
    background-size: cover;
    background-position: center;
    padding-top:46.87% ;
    position: relative;
  }
  .section-one-ziPic{
    position: absolute;
    max-width: 30%;
    top:41.3%;
    left:30.6%;
  }
  .section-one-zi{
    color:#fff;
    font-family: "Adobe 黑体 Std R";
    font-size: 23px;
    letter-spacing:4px;
    position: absolute;
    top:55.4%;
    left:47.4%;
  }
  .section-one-charging{
    position: absolute;
    top:55.4%;
    left:56.4%;
  }

  /*第二块*/
  .section-two{
    max-width: 100%;
  }
  /*图片*/
   .section-two .picture{
    padding-top:31.25%;
    background-size: cover;
    background-position: center;
    background-image: url("../../static/img/bj_shouye2.png");
    position: relative;
  }
  .first-page-phone{
    max-width:25%;
    position: absolute;
    top:-10%;
    left:58%;
  }

  /*第三块*/
  /*第四块*/
  .section-four .picture{
    padding-top:31.25%;
    background-size: cover;
    background-position: center;
    background-image: url("../../static/img/bj_shouye3.png") ;
    position: relative;
  }
  .panda{
    width: 10%;
    position: absolute;
    top:20%;
    left:34.6%;
  }
  .up-pand-word{
    width:28.5%;
    color:#fff;
    font-family: "Microsoft YaHei UI";
    text-align: center;
    position: absolute;
    top:35%;
    left:25%;
  }
  .up-pand-word p{
    line-height: 25px;
  }
  .up-pand-word :first-child{
    font-size: 20px;
    margin-bottom:25px;
  }
  .up-pand-word :not(:first-child){
    line-height: 30px;
  }
  /*第五块*/
  .section-five{
    position: relative;
  }
  .section-five .picture{
    padding-top: 24.01%;
    background: #ff0000;
    opacity: 0.5;
  }
  /*手机*/
  .five-phone{
    max-width: 15%;
    position: absolute;
    top:-7%;
    left:22%;
  }

  /*.five-word{*/
    /*text-indent: 81px;*/
  /*}*/
  /*.together{*/
    /*text-indent: -67px;*/
    /*letter-spacing: 3px;*/
  /*}*/

  .five-card{
    display: inline-block;
    position: absolute;
    top:42%;
    left:41%;
    text-align: center;
  }
  .five-erweima{
    max-width: 70%;
  }
  .erweima-word{
    font-size: 10px;
    color:#fff;
    letter-spacing: 2px;
  }
</style>
