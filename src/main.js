import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import { loadFonts } from './plugins/webfontloader'
import router from './plugins/router'
import {createMetaManager, plugin as vueMetaPlugin} from 'vue-meta'


loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(i18n)
  .use(vueMetaPlugin)
  .use(createMetaManager())
  .mount('#app')
