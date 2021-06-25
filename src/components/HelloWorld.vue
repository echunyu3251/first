<template>
  <div class="hello">

    <!-- 登录 注册 -->
    <div class="header1">
      <div class="login">
        <img src="../assets/images/login.jpg" alt="登录" class="login_img">
        <span class="login_text1">
          <router-link to="login">Login</router-link>
        </span>
        <span class="login_text2">
          <router-link to="signUp">Sign Up</router-link>
        </span>
      </div>
    </div>
    <!-- 奥盛 -->
    <div class="header2">
      <!-- logo -->
      <div class="logo">
        <img src="../assets/images/LOGO2.png" alt="logo" class="logo_img">
      </div>
      <!-- 搜索 -->
      <div class="middle">
        <div id="search">
          <input type="text" name="s" class="text" placeholder="" />
          <button type="button" class="submit">
            <img src="../assets/images/search.png" alt="" class="submit_img">
          </button>
        </div>
      </div>
      <!-- 开团 -->
      <div class="group">
        <div id="group">
          <input type="text" name="" class="group_input" placeholder="" />
          <button type="button" class="group_button">
            <img src="../assets/images/group.png" alt="" class="submit_img">
            <span class="group_text">Group</span>
          </button>
        </div>
      </div>
      <!-- 购物车 -->
      <div class="group car">
        <div id="group">
          <input type="text" name="" class="group_input" placeholder="" id="group_car" />
          <button type="button" class="group_button">
            <img src="../assets/images/car.png" alt="" class="submit_img">
            <span class="group_text" id="group_car_text">Car (100)</span>
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
    <!--导航 -->
    <div class="nav">
      <ul>
        <li>
          <router-link to="whole">Whole</router-link>
        </li>
        <li>
          <router-link to="whole">Milk</router-link>
        </li>
        <li>
          <router-link to="whole">Shose</router-link>
        </li>
        <li>
          <router-link to="whole">Mother&Baby</router-link>
        </li>
        <li>
          <router-link to="whole">Health</router-link>
        </li>
        <li>
          <router-link to="whole">Make Up</router-link>
        </li>
        <li>
          <router-link to="whole">Daily</router-link>
        </li>
        <li>
          <router-link to="whole">Jewelry</router-link>
        </li>
        <li>
          <router-link to="whole">AUS</router-link>
        </li>
        <li>
          <router-link to="whole">JPN</router-link>
        </li>
        <li>
          <router-link to="whole">CHN</router-link>
        </li>
        <li>
          <router-link to="whole">Brand</router-link>
        </li>
      </ul>
    </div>
    <!-- 轮播 -->
    <div class="banner"> <img src="../assets/images/banner.png" alt="" style=" width: 1200px;height: 500px;"></div>
    <!-- 更多 -->
    <div class="more">
      <!-- a -->
      <div class="more_a">
        <div class="more_img1">
          <img src="../assets/images/11.png" alt="">
          <div class="more_content">
            <div class="more_text"><span>Weekly Special</span></div>
            <div class="more_more">More ></div>
          </div>
        </div>
        <div class="more_img1"><img src="../assets/images/44.png" alt="">
          <div class="more_content">
            <div class="more_text"><span>Spot Delivery</span></div>
            <div class="more_more">More ></div>
          </div>
        </div>
        <div class="more_img1">
          <img src="../assets/images/22.png" alt="">
          <div class="more_content">
            <div class="more_text"><span>Value Combination</span></div>
            <div class="more_more">More ></div>
          </div>
        </div>
        <!-- b -->

      </div>
      <div class="more_b">
        <div class="more_img1">
          <img src="../assets/images/33.png" alt="">
          <div class="more_content">
            <div class="more_text"><span>Special Clearance</span></div>
            <div class="more_more">More ></div>
          </div>
        </div>
        <div class="more_img1">
          <img src="../assets/images/66.png" alt="">
          <div class="more_content">
            <div class="more_text"><span>Spring & Summer Shoes</span></div>
            <div class="more_more">More ></div>
          </div>
        </div>
        <div class="more_img1">
          <img src="../assets/images/55.png" alt="">
          <div class="more_content">
            <div class="more_text"><span>Winter Shoes</span></div>
            <div class="more_more">More ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 限时 -->
    <div class="Time_box">
      <div class="time1">
        <div class="time1_a">
          <div class="time1_a_TK">Time Limited Second Kill</div>
          <div class="time1_a_SA">Shop All</div>
        </div>
        <div class="time1_b"></div>
      </div>
      <div class="time_list1">
        <div class="time_list1_top">
          <div class="time_list1_top_1"><img src="../assets/images/99.png" alt=""></div>
          <div class="time_list1_top_1"><img src="../assets/images/99.png" alt=""></div>
          <div class="time_list1_top_1"><img src="../assets/images/99.png" alt=""></div>
          <div class="time_list1_top_1"><img src="../assets/images/99.png" alt=""></div>
        </div>

        <div class="time_list1_bottom">
          <div class="time_list1_bottom1">
            <div class="time_list1_bottom1_text">
              <p>*KAMOO</p>
              <p class="bottom1_text">Camel adult milk powder</p>
              <p class="bottom1_text">200G Camel milk powder</p>
              <p>Weight:0.24kg</p>
            </div>
            <div class="time_list1_bottom1_AddCart">
              <p>$ 60</p>
              <span class="AddCart">Add to cart</span>
            </div>
          </div>
          <div class="time_list1_bottom1">
            <div class="time_list1_bottom1_text">
              <p>*KAMOO</p>
              <p class="bottom1_text">Camel adult milk powder</p>
              <p class="bottom1_text">200G Camel milk powder</p>
              <p>Weight:0.24kg</p>
            </div>
            <div class="time_list1_bottom1_AddCart">
              <p>$ 60</p>
              <span class="AddCart">Add to cart</span>
            </div>
          </div>
          <div class="time_list1_bottom1">
            <div class="time_list1_bottom1_text">
              <p>*KAMOO</p>
              <p class="bottom1_text">Camel adult milk powder</p>
              <p class="bottom1_text">200G Camel milk powder</p>
              <p>Weight:0.24kg</p>
            </div>
            <div class="time_list1_bottom1_AddCart">
              <p>$ 60</p>
              <span class="AddCart">Add to cart</span>
            </div>
          </div>
          <div class="time_list1_bottom1">
            <div class="time_list1_bottom1_text">
              <p>*KAMOO</p>
              <p class="bottom1_text">Camel adult milk powder</p>
              <p class="bottom1_text">200G Camel milk powder</p>
              <p>Weight:0.24kg</p>
            </div>
            <div class="time_list1_bottom1_AddCart">
              <p>$ 60</p>
              <span class="AddCart">Add to cart</span>
            </div>
          </div>
        </div>
        <div class="time1">
          <div class="time1_a">
            <div class="time1_a_TK">Hot List</div>
          </div>
          <div class="time1_b"></div>
        </div>
        <div class="time_list2">
          <div class="time_list1_top">
            <div class="time_list1_top_1"><img src="../assets/images/99.png" alt=""></div>
            <div class="time_list1_top_1"><img src="../assets/images/99.png" alt=""></div>
            <div class="time_list1_top_1"><img src="../assets/images/99.png" alt=""></div>
            <div class="time_list1_top_1"><img src="../assets/images/99.png" alt=""></div>
          </div>
          <div class="time_list1_bottom">
            <div class="time_list1_bottom1">
              <div class="time_list1_bottom1_text">
                <p>*KAMOO</p>
                <p class="bottom1_text">Camel adult milk powder</p>
                <p class="bottom1_text">200G Camel milk powder</p>
                <p>Weight:0.24kg</p>
              </div>
              <div class="time_list1_bottom1_AddCart">
                <p>$ 60</p>
                <span class="AddCart">Add to cart</span>
              </div>
            </div>
            <div class="time_list1_bottom1">
              <div class="time_list1_bottom1_text">
                <p>*KAMOO</p>
                <p class="bottom1_text">Camel adult milk powder</p>
                <p class="bottom1_text">200G Camel milk powder</p>
                <p>Weight:0.24kg</p>
              </div>
              <div class="time_list1_bottom1_AddCart">
                <p>$ 60</p>
                <span class="AddCart">Add to cart</span>
              </div>
            </div>
            <div class="time_list1_bottom1">
              <div class="time_list1_bottom1_text">
                <p>*KAMOO</p>
                <p class="bottom1_text">Camel adult milk powder</p>
                <p class="bottom1_text">200G Camel milk powder</p>
                <p>Weight:0.24kg</p>
              </div>
              <div class="time_list1_bottom1_AddCart">
                <p>$ 60</p>
                <span class="AddCart">Add to cart</span>
              </div>
            </div>
            <div class="time_list1_bottom1">
              <div class="time_list1_bottom1_text">
                <p>*KAMOO</p>
                <p class="bottom1_text">Camel adult milk powder</p>
                <p class="bottom1_text">200G Camel milk powder</p>
                <p>Weight:0.24kg</p>
              </div>
              <div class="time_list1_bottom1_AddCart">
                <p>$ 60</p>
                <span class="AddCart">Add to cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/helloworld.css'
</style>