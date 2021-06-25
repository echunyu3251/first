<template>
  <div id="app">
    <swiper :options="swiperOption">
      <swiper-slide><img src="../../assets/images/banner.png" class="banner_img"></swiper-slide>
      <swiper-slide><img src="../../assets/images/banner.png" class="banner_img"></swiper-slide>
      <swiper-slide><img src="../../assets/images/banner.png" class="banner_img"></swiper-slide>
      <swiper-slide><img src="../../assets/images/banner.png" class="banner_img"></swiper-slide>
      <swiper-slide><img src="../../assets/images/banner.png" class="banner_img"></swiper-slide>
    </swiper>
    <div class="swiper-pagination swiper_li">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </div>
  </div>
</template>
<script>
export default {
    name: 'banner',
    data() {
      return {
        swiperOption: {
          autoplay: {
            delay: 2000,
            speed: 1000,
          },
          pagination: {
            el: '.swiper-pagination',
            bulletElement: 'li',
          }

        }
      }
    }
  }
</script>
<style scoped>
  @import "./banner.css";
</style>