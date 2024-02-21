<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld @deliver="getData" :msg="message"/>   <!--传父组件message的值给子组件msg-->
  <!--  如果直接赋值的话不需要冒号，即 <HelloWorld msg="Welcome to Your Vue.js App"/>   -->

  <SwiperTest/>
  <AxiosTest/>

  <nav class="nav-links">
    <router-link to="/RouterTestOne">RouterTestOne</router-link>
    <router-link to="/RouterTestTwo">RouterTestTwo</router-link>
    <router-view></router-view>   <!--不能省略router-view，否则无反应-->
  </nav>

  <VuexTest/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SwiperTest from "@/components/SwiperTest.vue";
import AxiosTest from "@/components/AxiosTest.vue";
import VuexTest from "@/components/VuexTest.vue";

export default {
  name: 'App',
  data() {
    return {
      message: "Welcome to Your Vue.js App",
      data: "666",
    }
  },
  components: {
    VuexTest,
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

.nav-links a { //注意不是.nav-links router-link
  margin: 20px;
  color: purple;
}
</style>
