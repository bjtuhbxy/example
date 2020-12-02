<template>
  <div class="home">
    <!-- <Menu msg="Welcome to Your Vue.js App"/> -->
    <video webkit-playsinline="true" playsinline="true" v-for="(item, index) in [1,2,3,4,5,6,7,8]" :key="index" controls :src="'http://localhost:8078/' + (index + 1) + '.mp4'" autoplay></video>
    <p @click="play">播放</p>
    <p @click="stop">暂停</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import Menu from '@/components/Menu.vue'

export default {
  name: 'Video-Work',
  components: {
    // Menu
  },
  methods: {
    play() {
      const video = document.querySelectorAll('video')
      for (let i = 0; i < video.length; i++) {
        const el = video[i];
        el.play()
        el.controls = true
      }
    },
    stop() {
      const video = document.querySelectorAll('video')
      for (let i = 0; i < video.length; i++) {
        const el = video[i];
        el.pause()
        el.controls = true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
video {
  display inline-block
  width 300px
}
video::-webkit-media-controls {
  // display:block !important;
}
</style>
