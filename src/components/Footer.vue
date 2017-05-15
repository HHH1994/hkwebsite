<template>
  <div class="footer-component">
    <Row>
      <Col span="8" offset="8" >
        <Card dis-hover :border="false">
          <p >
            <img src="../../static/img/logo3.png">
          </p>
          <p class="footer-component-middle">
            <span class="foot-component-left">Con-health Technology Inc.</span>
            <span class="foot-component-right"> 浙江红康互联网科技有限公司</span>
          </p>
          <p>浙 ICP 备15053449 号</p>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default{

  }
</script>
<style>
  .footer-component p{
    text-align: center;
    font-family: "Adobe 黑体 Std R";
  }
  .footer-component .ivu-card{
    background: none!important;
  }
  .footer-component-middle{
    margin-top: 39px;
    margin-bottom: 20px;
    font-size: 16px;
  }
  .footer-component .ivu-card-bordered{
    border:0;
  }
  .foot-component-left{
    display: inline-block;
  }
  .foot-component-right{
    display: inline-block;
    position: relative;
    left:28px
  }
</style>
