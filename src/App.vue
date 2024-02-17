<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld @deliver="getData" :msg="message"/>   <!--传父组件message的值给子组件msg-->
  <!--  如果直接赋值的话不需要冒号，即 <HelloWorld msg="Welcome to Your Vue.js App"/>   -->
  <SwiperTest/>
  <AxiosTest/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SwiperTest from "@/components/SwiperTest.vue";
import AxiosTest from "@/components/AxiosTest.vue";

export default {
  name: 'App',
  data() {
    return {
      message: "Welcome to Your Vue.js App",
      data: "666",
    }
  },
  components: {
    AxiosTest,
    SwiperTest,
    HelloWorld
  },
  methods: {
    getData(data) {
      this.data = data;
      console.log('接收到数据：', this.data);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
