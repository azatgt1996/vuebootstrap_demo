import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { limit } from './directives'

createApp(App)
  .use(router)
  .directive('limit', limit)
  .mount('#app')