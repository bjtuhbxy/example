<template>
  <div class="home">
    <!-- <Menu msg="Welcome to Your Vue.js App"/> -->
    <h1>{{ name }}</h1>
    <div class="btn">
      <p @click="random">{{ btnLable }}</p>
    </div>
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
  data() {
    return {
      name: '开始',
      users: [
        '王侃',
        '陈浩',
        '周传香',
        '陈欣欣',
        '齐明浩',
        '罗慧卿',
        '侯兵帅',
        '李伟娜',
        '田梦茹',
        '党金',
        '刘强强',
        '刘长付',
        '宋培东',
        '陈飞玉',
        '王越',
        '刘金灵',
        '刘钧石',
        '邓佳瑞',
        '张伟'
      ],
      isStart: true,
      timer: null
    }
  },
  methods: {
    random() {
      const vue = this
      if (!vue.isStart) {
        vue.stop()
        return
      }
      vue.isStart = false
      let index = 0
      if (vue.timer === null) {
        vue.timer = setInterval(() => {
          index = index < vue.users.length ? index :  0
          vue.name = vue.users[index]
          index ++
        }, 100);
      }
    },
    stop() {
      const vue  = this
      vue.isStart = true
      clearInterval(vue.timer)
      vue.timer = null
    }
  },
  computed: {
    btnLable() {
      return this.isStart ? '开始' : '暂停'
    }
  }
}
</script>
<style lang="stylus" scoped>
.home {
  h1 {
    font-size 200px;
  }
  .btn {
    display flex
    justify-content space-evenly
    align-items center
    p {
      width: 90px;
      height: 30px;
      display inline-block
      line-height: 30px;
      text-align: center;
      background: #ff9502;
      border-radius: 4px;
      cursor: pointer;
      color white
    }
  }
}
</style>
