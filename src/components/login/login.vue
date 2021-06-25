<template>
  <div id="app">
    <!-- login组件样式需要相对定位 -->
    <div class="login">
      <img src="../../assets/images/login.jpg" alt="登录" class="login_img">
      <span class="login_text1">
        <router-link to="login">Login </router-link>
      </span>
      <span class="login_text2">
        <router-link to="sign"> Sign Up </router-link>
      </span>
    </div>
  </div>
</template>
<!-- ../assets/images/login.jpg -->
<script>
  export default {
    name: 'login'
  }
</script>

<style scoped>
@import './login.css'
</style>