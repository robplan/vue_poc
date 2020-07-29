// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks';
import Apptegy from '@apptegy/components'

Vue.use(Apptegy);
Vue.use(TurbolinksAdapter)

import App from '../app.vue'
Vue.component('app', App)

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#vue',
  })
})
