<template>
  <div id="app">
    <div class="login_box">
      <login></login>
    </div>
    <div class="logo">
      <img src="../../../assets/images/ASLOGO.png" alt="">
    </div>
    <div class="forgetPassword">
      <p>Membership registration</p>
    </div>
    <p class="p">Registration and modification of member information <span>Must</span> Be sure to enter trhe location of
      the tag.</p>


    <span class="titleSpan">Customer information</span>
    <div class="information">
      <div class="number">
        <div class="number_box">
          <span class="telephone">Telephone number</span> <span class="must">Must</span>
        </div>
        <input type="text" class="number_text">
      </div>
      <div class="address">
        <div class="address_box">
          <span class="address_span">Address</span>
        </div>
        <input type="text" class="address_text">
        <p>Please note that the town name and address are missing</p>
      </div>
    </div>


    <span class="titleSpan">Password</span>
    <div class="password">
      <div class="a">
        <p>lf you like.please enter your password</p>
        <p>password is very important for us to use the store comfortably in the future</p>
        <p> Be sure to register content that you will never forget</p>
      </div>
      <div class="passw_">
        <div class="passw_box">
          <span class="telephone">Password</span> <span class="must">Must</span>
        </div>
        <input type="text" class="number_text">

        <div class="passw_p">
          <p>For half width alphanumeric symbols. please input more than 6 characters anc less than 20 characters.</p>
          <p>The registered email address is not provided as a password.</p>
          <p>*Passwords with three consecutive identical characters are not available( AAA.etc.)</p>
          <p> The following symbols can be used</p>
          <p>! # $ % () = ~ \ @ ; [ 1 . / ( + * } ? _ </p>
        </div>
      </div>
    </div>
    <div class="address" style="margin-top: 1px;">
      <div class="address_box">
        <span class="address_span">Password (confirm)</span><span class="must">Must</span>
      </div>
      <input type="text" class="address_text">
      <p>(Please input confirmation again)</p>
    </div>


    <span class="titleSpan">Membership_terms</span>
    <div class="terms">
      <div class="a b">
        <p>Please read and agree tro the membershp therms when you register as a member</p>
      </div>
      <div class="number terms_number">
        <div class="number_box terms_number_box"><span class="must">Must</span></div>
        <p><img src="../../../assets/images/correct.png" alt="">Acceptance clause (confirm member terms)</p>
        <p class="p2"> The member agreement,consent, occasion and login of the member</p>
      </div>
    </div>
  
    <div class="button_box">
      <router-link to="/"><button class="return">Return</button> </router-link>
      <button class="det">Determine</button>
    </div>
  </div>
</template>

<script>
  import login from '@/components/login/login';

  export default {
    name: 'sign',
    data() {
      return {

      }
    }, components: {
      login
    }
  }
</script>

<style scoped>
  @import './sign.css'
</style>