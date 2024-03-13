import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { limit } from './directives'

import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App)
  .use(bootstrap)
  .use(router)
  .directive('limit', limit)
  .mount('#app')