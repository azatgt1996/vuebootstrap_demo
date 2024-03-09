import { createApp } from 'vue'
import App from './App.vue'
import { limit } from './directives'

createApp(App)
  .directive('limit', limit)
  .mount('#app')