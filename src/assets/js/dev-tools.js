
  class Hd {
    constructor(id = 'hdLog') {
        let el = document.getElementById(id)
        if (!el) {
            el = document.createElement('div')
            el.setAttribute('id', id)
            el.setAttribute('class', `${id.toLocaleLowerCase()} hd-fold`)
            el.addEventListener('dblclick', e => {
                let elClass = el.getAttribute('class')
                el.setAttribute('class', elClass.indexOf('hd-fold') > -1 ? elClass.replace(/fold/g, 'open') : elClass.replace(/open/g, 'fold'))
            })
            let x = 0;
            let y = 0;
            let l = 0;
            let t = 0;
            let isDown = false;
            //设置样式  
            el.style.cursor = 'move';
            el.onmousedown = e => {
              x = e.clientX;
              y = e.clientY;
          
              //获取左部和顶部的偏移量
              l = el.offsetLeft;
              t = el.offsetTop;
              //开关打开
              isDown = true;
              //设置样式  
              el.style.cursor = 'move';
            }
            //鼠标移动
            window.onmousemove = function(e) {
              if (isDown == false) {
                  return;
              }
              //获取x和y
              var nx = e.clientX;
              var ny = e.clientY;
              //计算移动后的左偏移量和顶部的偏移量
              var nl = nx - (x - l);
              var nt = ny - (y - t);

              el.style.left = nl + 'px';
              el.style.top = nt + 'px';
            }
            //鼠标抬起事件
            el.onmouseup = function() {
              //开关关闭
              isDown = false;
              el.style.cursor = 'default';
            }
            const body = document.querySelector('body')
            let elStyle = document.createElement('style')
            elStyle.setAttribute('type', 'text/css')
            elStyle.innerHTML = 
            `
            .${id.toLocaleLowerCase()} {
                position: fixed;
                top: 35px;
                left: 10%;
                background-color: rgba(0, 0, 0, 0.3);
                z-index: 99999;
                overflow: scroll;
                border-radius: 3px;
            }
            .${id.toLocaleLowerCase()} p {
                word-break: break-all;
                max-height: 45px;
                overflow-y: scroll;
                user-select: text;
            }
            p.hd-warn {
                color: yellow;
            }
            p.hd-error {
                color: red;
            }
            .${id.toLocaleLowerCase()}.hd-fold {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                overflow: hidden;
            }
            .${id.toLocaleLowerCase()}.hd-open {
                width: 300px;
                height: 300px;
            }
            .${id.toLocaleLowerCase()}.hd-show {
                display: block;
            }
            .${id.toLocaleLowerCase()}.hd-hide {
                display: none;
            }
            `
            body.append(el, elStyle)
        }
        this.el = el
        this.style = ''
    }
    render() {
        let els = []
        for (const k in arguments) {
            if (arguments.hasOwnProperty(k)) {
                typeof arguments[k] === 'object' && (arguments[k] = JSON.stringify(arguments[k]))
                const el = document.createElement('p')
                el.setAttribute('class', `console hd-${this.style}`)
                el.innerHTML = arguments[k]
                el.title = arguments[k]
                els.push(el)
            }
        }
        this.el.append(...els)
        this.el.scrollTop = this.el.scrollHeight
    }
    log() {
        this.style = 'log'
        this.render(...arguments)
    }
    info() {
        this.style = 'info'
        this.render(...arguments)
    }
    warn() {
        this.style = 'warn'
        this.render(...arguments)
    }
    error() {
        this.style = 'error'
        this.render(...arguments)
    }
    open() {
        let elClass = this.el.getAttribute('class')
        this.el.setAttribute('class', `${elClass.replace(/hd-fold/g, '').replace(/  /g, ' ').trim()} hd-open`)
    }
    fold() {
        let elClass = this.el.getAttribute('class')
        this.el.setAttribute('class', `${elClass.replace(/hd-open/g, '').replace(/  /g, ' ').trim()} hd-fold`)
    }
    hide() {
        let elClass = this.el.getAttribute('class')
        this.el.setAttribute('class', `${elClass.replace(/hd-hide/g, '').replace(/  /g, ' ').trim()} hd-show`)
    }
    show() {
        let elClass = this.el.getAttribute('class')
        this.el.setAttribute('class', `${elClass.replace(/hd-show/g, '').replace(/  /g, ' ').trim()} hd-hide`)
    }
  }
export default Hd