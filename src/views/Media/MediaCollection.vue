<template>
  <el-row :gutter="24">
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>音视频采集</span>
          <el-button @click="playVideo('#video')" style="float: right; padding: 3px 0" type="text">采集</el-button>
        </div>
        <div>
          <video id="video"></video>
        </div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>桌面共享采集</span>
          <el-button v-if="shareTrack" @click="stopPlayShare" style="float: right; padding: 3px 0" type="text">停止采集</el-button>
          <el-button @click="playShare('#share')" style="float: right; padding: 3px 0" type="text">采集</el-button>
        </div>
        <div>
          <video id="share"></video>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
// import Menu from '@/components/Menu.vue'

export default {
  name: 'Video-Work',
  components: {
    // Menu
  },
  data () {
    return {
      shareTrack: null, // 桌面共享流轨
    }
  },
  methods: {
    playVideo(id) {
      var constraints = {
        audio: true,
        video: {
        width: 320,
        height: 240
        }
      };
      navigator.mediaDevices.getUserMedia(constraints)
      .then(mediaStream => {
        var video = document.querySelector(id);
        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
          video.play();
        };
      })
      .catch(function(err) {
        console.log(err.name + ": " + err.message);
      });
    },
    playShare(id) {
      const vue = this
      var constraints={
        video:true,
        audio: true
      }
      navigator.mediaDevices.getDisplayMedia(constraints)
      .then(mediaStream => {
        vue.shareTrack = mediaStream.getTracks()[0]
        var share = document.querySelector(id);
        share.srcObject = mediaStream;
        share.onloadedmetadata = function(e) {
          share.play();
        };
      })
      .catch()
    },
    stopPlayShare() {
      const vue = this
      vue.shareTrack.stop()
      vue.shareTrack = null
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
