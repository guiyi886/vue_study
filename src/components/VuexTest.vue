<template>
  <h3>{{ store.state.storeFlag }}</h3>
</template>

<script>
import store from "@/store";

export default {  //没有这个的话其他vue文件导入会是白色
  name: 'VuexTest',
  computed: {
    store() {
      return store
    }
  },
}
</script>

