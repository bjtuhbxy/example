<template>
  <div class="about">
    <h1>This page is use typescript</h1>
    <p>name: {{ name }}</p>
    <p>age: {{ age }}</p>
    <p>userinfo: {{ userInfo }}</p>
    <button @click="uodateUserInfo">修改用户信息</button>
    <hr/>
    <ts-com :user="user" :msg="msg" @remove="remove"></ts-com>
  </div>
</template>
<script lang="ts">
import TsCom from '@/components/TsCom.vue'
import { Component, Watch, Prop, Vue } from 'vue-property-decorator';
interface User {
  name: string;
  age: string | number;
  sex?: string;
}
@Component({
  components: {
    TsCom,
  }
})
export default class Ts extends Vue {
  name: string = '张三';
  age: number = 18;
  msg: string = '这是一个TS组件'
  user: Array<User> = [
    {
      name: '张三',
      age: 18,
      sex: '男'
    },
    {
      name: '李四',
      age: '16'
    }
  ]
  get userInfo() {
    return this.name + this.age
  }
  uodateUserInfo() {
    this.name = '李四'
    this.age = 16
  }
  remove(index: number) {
    this.user.splice(index, 1)
  }
  @Watch('name')
  nameListener(n: string, o: string) {
    console.log('监听到name被修改:', o, '->', n);
  }
  created() {
    console.log('生命周期created');
  }
  mounted() {
    console.log('生命周期mounted');
  }
}
</script>