import Vue from 'vue'
import App from './app.vue'

import utils from './utils/utils.js'
// import './assest/styles/global.sass'
console.log(utils)
utils.setAdaption()

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)
