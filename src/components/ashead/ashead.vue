<template>
  <div id="app">

    <!-- logo -->
    <div class="logo">
      <img src="../../assets/images/LOGO2.png" alt="logo" class="logo_img">
    </div>
    <!-- 搜索 -->
    <div class="middle">
      <div id="search">
        <input type="text" name="s" class="text" placeholder="" />
        <button type="button" class="submit">
          <img src="../../assets/images/search.png" alt="" class="submit_img">
        </button>
      </div>
    </div>
    <!-- 开团 -->
    <div class="group">
      <div id="group">
        <div class="group_input"></div>
        <button type="button" class="group_button">
          <img src="../../assets/images/group.png" alt="" class="submit_img">
          <span class="group_text">Group</span>
        </button>
      </div>
    </div>
    <!-- 购物车 -->
    <div class="group car">
      <div id="group">
        <div class="group_input" id="group_car"></div>
        <button type="button" class="group_button">
          <img src="../../assets/images/car.png" alt="" class="submit_img " id="car_img">
          <span class="group_text" id="group_car_text">Car(10)</span>
        </button>
      </div>
    </div>

    <!-- 直邮 -->
    <div class="mail">
      <span class="mail_text">
        <router-link to="direct">Direct Mail Mall</router-link>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ashead',
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  @import "./ashead.css"
</style>