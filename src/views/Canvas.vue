<template>
  <div class="home">
    <div>
      <button @click="drawPen">画笔</button>
      <button @click="eraser">橡皮</button>
      <button @click="revoke">撤销</button>
      <button @click="clear">清空</button>
      <button @click="save">存档</button>
      <button @click="read">读档</button>
    </div>
    <canvas id="canvas" width="1000" height="800" style="border:1px solid red"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Canvas',
  components: {
    // Menu
  },
  data() {
    return {
      draw: {
        type: 2,  // 画笔
      },
      mouseDown: false,
      canvas: null,
      context: null,
      canvasData: null,
      eventMap: {
        2: 'drawPenEvent',
        3: 'eraserEvent'
      }
    }
  },
  mounted() {
    const vue = this
    window.canvasData = vue.canvasData
    let canvas = document.getElementById("canvas")
    let context = canvas.getContext('2d')
    vue.canvas = canvas
    vue.context = context
    document.addEventListener('mousedown', e => {
      vue.mouseDown = true
      vue[vue.eventMap[vue.draw.type]](e, 'down')
    })
    document.addEventListener('mouseup', e => {
      vue.mouseDown = false
    })
    document.addEventListener('mousemove', e => {
      if (vue.mouseDown) {
        vue[vue.eventMap[vue.draw.type]](e, 'move')
      }
    })
  },
  methods: {
    eraser() {
      this.draw.type = 3
    },
    eraserEvent(e, event) {
      const vue = this
      const context = vue.context
      context.save()
      context.beginPath()
      context.arc(e.offsetX, e.offsetY,30,0,2*Math.PI);
      context.clip()
      context.clearRect(0,0,1000,800);
      context.restore();
    },
    drawPen() {
      this.draw.type = 2
    },
    drawPenEvent(e, event) {
      const vue = this
      const context = vue.context
      if (event === 'down') {
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY);
      }
      if (event === 'move') {
        context.lineTo(e.offsetX, e.offsetY)
        context.lineWidth = 1
        context.lineCap="round"
        context.strokeStyle = "red"
        context.stroke()
      }
    },
    revoke() {
      const vue = this
      let context = vue.context
      console.log(context.getImageData(0, 0, 1000, 800));
      // context.putImageData(data[data.length - 1], 0, 0, 0, 0, 1000, 400)
    },
    clear() {
      const vue = this
      let context = vue.context
      context.clearRect(0,0,1000, 800)
    },
    save() {
      const vue = this
      let context = vue.context
      vue.canvasData = context.getImageData(0, 0, 1000, 800)
    },
    read() {
      const vue = this
      let context = vue.context
      let data = vue.canvasData
      context.putImageData(data, 0, 0, 0, 0, 1000, 800)
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
