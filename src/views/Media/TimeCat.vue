<template>
  <el-row :gutter="24">
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>屏幕录制</span>
        </div>
        <div>
          <el-button @click="record" style="padding: 3px 0" type="text">屏幕录制</el-button>
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
import { Recorder, Player } from 'timecatjs';
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
    record(id) {
      const r = new Recorder({
        emitter: (data, db) => {
          console.log(data, db);
        }
      })
      setTimeout(() => {
        window.p = new Player()
        window.r = r
        console.log(r);
      }, 3000);
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
