<template>
  <div> //渲染后鼠标左右滑动可以切换图片
    <swiper :modules="modules" :pagination="{ clickable: true }">
      <swiper-slide>
        <img src="../assets/logo.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/guiyi.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/logo.png" alt="">
      </swiper-slide>
      <!-- 更多轮播项 -->
    </swiper>
  </div>
</template>

<script>
import {Pagination, Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  name: 'SwiperTest',
  data() {
    return {
      modules: {Pagination}   //要是对象而不是数组
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  }
}
</script>

<style scoped>

</style>
