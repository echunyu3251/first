<template>
  <div id="app">
    <div class="login_box">
      <login></login>
    </div>
    <div class="logo">
      <img src="../../../assets/images/ASLOGO.png" alt="">
    </div>
    <div class="sign_in">
      <p>Sign In</p>
      <p>Member Customers</p>
    </div>
    <div class="sign_content">
      <p>Please Enter Your Cell- Phane Number And Password To Sign In.</p>
      <div class="xinxi">
        <div class="text_l">
          <p>Cell Phonse Number</p>
          <p>Password:</p>
        </div>
        <div class="text_r">
          <input type="text" class="text1">
          <input type="text" class="text1">
        </div>
      </div>
      <div class="submit_box">
        <router-link to="sign"> <button class="text2 t1">Forget The Password</button></router-link>

        <button class="text2 t2">Submit</button>
      </div>
      <p>
        <router-link to="ForgetPassword">If You Forget Your Password, Click Here.</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import login from "@/components/login/login";

  export default {
    name: 'Login',
    data() {
      return {

      }
    },
    components: {
      login
    }
  }
</script>

<style scoped>
  @import "Login.css"
</style>