import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* 片标打码 */ '../components/Home.vue')
  },
  {
    path: '/code/card',
    name: 'codeCard',
    component: () => import(/* 片标打码 */ '../views/code-card/index.vue')
  },
  {
    path: '/code/sn',
    name: 'codeSN',
    component: () => import(/* SN 扫码 */ '../views/code-sn/index.vue')
  },


]



//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
  routes
})

export default router
