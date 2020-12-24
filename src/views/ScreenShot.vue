<template>
  <div class="home">
    <iframe crossorigin="use-credentials" src="http://localhost:8080/random" frameborder="0"></iframe>
    <!-- <iframe src="https://image.csslcloud.net/image/88C79C053AFF11E39C33DC5901307461/CC974A80320F558D/index.html" frameborder="0"></iframe> -->
    <button @click="getImage">截图</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import Menu from '@/components/Menu.vue'
import html2canvas from "html2canvas";
import domtoimage from 'dom-to-image';

export default {
  name: 'Video-Work',
  components: {
    // Menu
  },
  data() {
    return {
    }
  },
  mounted() {
    document.domain = 'localhost'
  },
  methods: {
    getImage() {
      let node = document.querySelector('.home')
      domtoimage.toPng(node).then(dataUrl => {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      }).catch(function (error) {
        console.error('oops, something went wrong!', error)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.home {
  width 100%
  height 800px
  iframe {
    width 800px
    height 500px
  }
}
</style>
