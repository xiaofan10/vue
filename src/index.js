import Vue from 'vue'
import Router from './router/router'
import MintUI from 'mint-ui'
// import {Button, Cell} from 'mint-ui'
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'mint-ui/lib/style.css'
import App from './app'
import utils from './utils/utils.js'

utils.setAdaption()
const root = document.createElement('div')

document.body.appendChild(root)
Vue.component('v-chart', ECharts)
Vue.use(MintUI)
// Vue.use(Button)
// Vue.use(Cell)

new Vue({
  router: Router(),
  render: (h) => h(App)
}).$mount(root)
