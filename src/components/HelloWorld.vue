<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <p>vue in study</p>

    <div>{{ rawHtml }}</div>
    <!--  v-bind:可以简写成:  -->
    <div v-html="rawHtml" :id="rawId"></div>

    <!--双括号中可以放单个js表达式-->
    {{ flag ? 'yes' : 'no' }}

    <!--v-if和v-show的区别-->
    <!--返回 `true` 值的时候渲染-->
    <p v-if="flag">渲染成功</p>
    <p v-else>渲染失败</p>

    <!--区别：即使flag为假也会渲染，只不过会隐藏-->
    <p v-show="flag">渲染by v-show</p>

    <!--v-for生成列表-->
    <ul>
      <li v-for="item in arr" :key="item.id">{{ item.name }}</li>
    </ul>

    <!--v-on绑定事件-->
    <button @click="greet('hi!')">Greet</button>

    <!--v-model双向绑定-->
    <br><br>
    <label>请输入用户名：</label>
    <!--.lazy是输入完成后才同步，而.trim是去除首尾的空格-->
    <input v-model.lazy.trim="username" :placeholder="'username'">
    <p>你的用户名是：{{ username }}</p>

    <!--prop从父组件接收数据-->
    <p>从父组件接收数据：{{ msg }}</p>

    <button @click="deliver">子组件传递数据到父组件</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      message: 'Hello Vue!',
      rawHtml: '<a href="https://www.baidu.com">百度</a>',
      rawId: 'id10088',
      flag: true, //true或false
      arr: [
        {id: 1001, name: 'Alice1'},
        {id: 1002, name: 'Alice2'},
        {id: 1003, name: 'Alice3'},
        {id: 1004, name: 'Alice4'},
      ],
      username: '',
    };
  },
  methods: {
    greet(message) {
      console.log(message);
      console.log(this.message);  //this是外层的,不是函数的
      console.log(event);
    },
    deliver() {
      this.$emit('deliver', this.message);
    }
  },
  beforeCreate() {
    console.log("beforeCreate:组件创建之前");
  },
  created() {
    console.log("created:组件创建完成");
  },
  beforeMount() {
    console.log("beforeMount:渲染之前");
  },
  mounted() {
    console.log("mounted:组件渲染完成");
    // 把网络请求放到这里
  },
  beforeUpdate() {
    console.log("beforeUpdate:组件更新之前");
  },
  updated() {
    console.log("updated:组件更新之后");
  },
  beforeUnmount() {
    console.log("beforeUnmount:组件卸载之前");
    // 卸载之前，把消耗性能的处理都干掉
    // 定时器
  },
  unmounted() {
    console.log("unmounted:组件卸载之后");
  }
}
</script>

<!-- 添加“scoped”属性后，下面的 CSS 仅适用于本组件 -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}

#id10088 {
  font-size: 50px;
}

</style>
