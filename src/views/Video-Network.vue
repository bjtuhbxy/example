<template>
  <div class="home">
    <!-- <Menu msg="Welcome to Your Vue.js App"/> -->
    <video controls src="http://localhost:8078/" autoplay></video>
    <video controls src="http://localhost:8078/" autoplay></video>
    <video controls src="http://localhost:8078/" autoplay></video>
    <video controls src="http://localhost:8078/" autoplay></video>
    <video controls src="http://localhost:8078/" autoplay></video>
    <video controls src="http://localhost:8078/" autoplay></video>
    <video controls src="http://localhost:8078/" autoplay></video>
    <video controls src="http://localhost:8078/" autoplay></video>
    <video controls src="http://localhost:8078/" autoplay></video>
    <video controls src="http://localhost:8078/" autoplay></video>
    <video controls src="http://localhost:8078/" autoplay></video>
    <video controls src="http://localhost:8078/" autoplay></video>
    <p @click="play">播放</p>
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
      const video = document.querySelector('video')
      for (let i = 0; i < video.length; i++) {
        const el = video[i];
        el.play()
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
</style>
