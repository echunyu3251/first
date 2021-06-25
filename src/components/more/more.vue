<template>
    <div id="app">
  <!-- a -->
      <div class="more_a">
        <div class="more_img1">
          <img src="../../assets/images/11.png" alt="">
          <div class="more_content">
            <div class="more_text"><span>Weekly Special</span></div>
            <div class="more_more">
              <router-link to="moreItem">More ></router-link>
            </div>
          </div>
        </div>
        <div class="more_img1"><img src="../../assets/images/44.png" alt="">
          <div class="more_content">
            <div class="more_text"><span>Spot Delivery</span></div>
            <div class="more_more">
              <router-link to="moreItem">More ></router-link>
            </div>
          </div>
        </div>
        <div class="more_img1">
          <img src="../../assets/images/22.png" alt="">
          <div class="more_content">
            <div class="more_text"><span>Value Combination</span></div>
            <div class="more_more">
              <router-link to="moreItem">   More ></router-link>
            </div>
          </div>
        </div>
      </div> 
        <!-- b -->

      <div class="more_b">
        <div class="more_img1">
          <img src="../../assets/images/33.png" alt="">
          <div class="more_content">
            <div class="more_text"><span>Special Clearance</span></div>
            <div class="more_more">
              <router-link to="moreItem">More ></router-link>
            </div>
          </div>
        </div>
        <div class="more_img1">
          <img src="../../assets/images/66.png" alt="">
          <div class="more_content">
            <div class="more_text"><span>Spring & Summer Shoes</span></div>
            <div class="more_more">
              <router-link to="moreItem">More ></router-link>
            </div>
          </div>
        </div>
        <div class="more_img1">
          <img src="../../assets/images/55.png" alt="">
          <div class="more_content">
            <div class="more_text"><span>Winter Shoes</span></div>
            <div class="more_more">
              <router-link to="moreItem">More ></router-link>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
    export default {
      name: 'more'
    }
  </script>
  
  <style scoped>
  @import "./more.css"
  </style>