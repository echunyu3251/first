<template>
  <div id="app">
    <div class="login_box">
      <login></login>
    </div>
    <div class="logo">
      <img src="../../../assets/images/ASLOGO.png" alt="">
    </div>
    <div class="forgetPassword">
      <p>Forget The Password</p>
    </div>
    <p class="p">Please da not ingut 0 or 8 and other lang-distance area code in the first piace, in case the
      verification code cannot be received</p>
    <div class="submit_box">
      <div class="box1">
        <div class="sel" id="sel">
          <select name="sel">
            <option selected value="1">China 86</option>
            <option value="2">China 86</option>
            <option value="3">China 86</option>
            <option value="4">China 86</option>
          </select>
        </div>
        <input type="tel" name="" id="tel" placeholder="Cell-Phone Number">
      </div>
      <div class="box2">
        <input type="text" name="" class="tel2" placeholder="Verification Code" />
        <input type="text" name="" class="sel2" placeholder="Get Verification Code" />
      </div>
      <div class="box3">
        <input type="text" name="" class="t1" placeholder="Enter new password" />
        <input type="text" name="" class="t1" placeholder="Enter the new password again" />
        <button type="text" class="t1 t1_submit">submit</button>
        <router-link to="sign"> <p>New users ? Start here</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import login from '@/components/login/login';
  export default {
    name: 'forgetpassword',
    data() {
      return {

      }
    },
    components: {
      login,
    }
  }
</script>

<style scoped>
  @import './ForgetPassword.css'
</style>