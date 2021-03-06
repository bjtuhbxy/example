import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import VideoNetWork from '../views/Video-Network.vue'
import Random from '../views/Random.vue'
import ScreenShot from '../views/ScreenShot.vue'
import Canvas from '../views/Canvas.vue'
import Ts from '../views/Ts.vue'
import Media from '../views/Media.vue'
import MediaCollection from '../views/Media/MediaCollection.vue'
import TimeCat from '../views/Media/TimeCat.vue'
import CodeEdit from '../views/CommonTools/CodeEdit.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ts',
    name: 'ts',
    component: Ts
  },
  {
    path: '/screen-shot',
    name: 'ScreenShot',
    component: ScreenShot
  },
  {
    path: '/video-network',
    name: 'VideoNetWork',
    component: VideoNetWork
  },
  {
    path: '/random',
    name: 'Random',
    component: Random
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: Canvas
  },
  {
    path: '/media',
    name: 'Media',
    component: Media
  },
  {
    path: '/mediacollection',
    name: 'MediaCollection',
    component: MediaCollection
  },
  {
    path: '/timecat',
    name: 'timecat',
    component: TimeCat
  },
  {
    path: '/codeedit',
    name: 'codeedit',
    component: CodeEdit
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
