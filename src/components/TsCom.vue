<template>
  <div class="menu">
    <h1>{{ msg }}</h1>
    <p v-for="(item, index) in user" :key="index">
      <span>用户{{ index + 1 }}：</span>
      <span>{{ item.name }}</span>
      <span>{{ item.age }}</span>
      <span>{{ SEX[item.sex] }}</span>
      <button @click="remove(index)">删除</button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
enum Sex {
  '男' = '男性',
  '女' = '女性',
  undefined = '保密'
}
@Component
export default class Menu extends Vue {
  @Prop()
  private msg!: string;
  @Prop()
  private user!: Array<object>;
  
  SEX: any = Sex

  @Emit('remove')
  remove(index: number) {
    return index
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
