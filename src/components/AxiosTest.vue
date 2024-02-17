<template>
  <div>
    <h3>axios-get方法获取数据：</h3>
    <p>{{ data1 }}</p>
    <h3>axios-post方法获取数据：</h3>
    <p>{{ data2 }}</p>
  </div>
</template>

<script>
import axios from 'axios';  // 导入 Axios 模块
import qs from 'qs'

export default {
  name: 'AxiosTest',
  data() {
    return {
      data1: null,
      data2: null,
    }
  },
  mounted() {
    // 在组件挂载后发送请求并更新数据
    axios.get('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
        .then(response => {
          this.data1 = response.data;
        })
        .catch(error => {
          this.data1 = 'axios获取数据失败';
          console.error('Error', error);
        });

    axios.post("http://iwenwiki.com/api/blueberrypai/login.php", qs.stringify({
      user_id: "iwen@qq.com",
      password: "iwen123",
      verification_code: "crfvw"
    }))
        .then(res => {
          this.data2 = res.data;
        })
  },
}

</script>

<style scoped>

</style>