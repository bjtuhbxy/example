<template>
  <div class="menu">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/video-network">video-network</router-link>
      </li>
      <li>
        <router-link to="/random">random</router-link>
      </li>
      <li>
        <router-link to="/ts">Ts</router-link>
      </li>
      <li>
        <router-link to="/screen-shot">Screen shot</router-link>
      </li>
      <li>
        <router-link to="/canvas">canvas</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Menu extends Vue {
  @Prop() private msg!: string;
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
