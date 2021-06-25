<template>
  <div class="hello">
    <!-- 登录 注册 -->
    <div class="header1">
      <login></login>
    </div>
    <!-- 奥盛 -->
    <div class="header2">
      <ashead></ashead>
    </div>
    <!--导航 -->
    <div class="nav">
      <navigation></navigation>
    </div>
    <!-- 清除浮动 -->
    <div style="clear: both;"></div>
    <!-- home 隐藏导航 -->
    <div class="hiddenNav">隐藏导航</div>
    <!-- 轮播 -->
    <div class="banner">
      <banner></banner>
    </div>
    <!-- 更多 -->
    <div class="more">
      <more></more>
    </div>
    <!-- 限时 -->
    <div class="Time_box">
      <limitedtime></limitedtime>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
  import navigation from "@/components/navigation/navigation";
  import login from "@/components/login/login";
  import ashead from "@/components/ashead/ashead";
  import banner from "@/components/banner/banner";
  import more from "@/components/more/more";
  import limitedtime from "@/components/limitedtime/limitedtime";

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',

      }
    },
    components: {
      navigation,
      login,
      ashead,
      banner,
      more,
limitedtime
    }
  }
</script>

<style scoped>
  @import "../assets/css/helloworld.css"
</style>