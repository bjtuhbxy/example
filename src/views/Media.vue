<template>
  <div class="home">
    <button @click="play('#video1')">播放1</button>
    <button @click="play('#video2')">播放1</button>
    <video id="video1"></video>
    <video id="video2"></video>
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
    play(id) {
      var opt = {
      audio: true,
      video: {
      width: 1920,
      height: 1080
      }
    };
    navigator.mediaDevices.getUserMedia(opt)
      .then(function(mediaStream) {
      var video = document.querySelector(id);
      video.srcObject = mediaStream;
      video.onloadedmetadata = function(e) {
        video.play();
      };
      })
      .catch(function(err) {
      console.log(err.name + ": " + err.message);
      });
    }
  }
}
</script>
<style lang="stylus" scoped>
video {
  display inline-block
  min-width 300px
}
video::-webkit-media-controls {
  // display:block !important;
}
</style>
