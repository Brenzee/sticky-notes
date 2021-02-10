import Vue from "vue"
import App from "./App.vue"
import TextareaAutosize from "vue-textarea-autosize"

import { BootstrapVue } from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
Vue.use(TextareaAutosize)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount("#app")
