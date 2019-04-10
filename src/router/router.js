import Vue from 'vue'
import VueRouter from 'vue-router'
import Line from '../pages/line/line'
import Pie from '../pages/pie/pie'

Vue.use(VueRouter)

const routes = [
  {path: '/line', component: Line},
  {path: '/pie', component: Pie}
]

export default () => new VueRouter({
  routes
})
