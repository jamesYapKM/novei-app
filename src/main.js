
import { createSSRApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import { loadFonts } from './plugins/webfontloader'
import router from './plugins/router'
import {createMetaManager, plugin as vueMetaPlugin} from 'vue-meta'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSocialSharing from 'vue-social-sharing'

// createApp(App)
//   .use(router)
//   .use(vuetify)
//   .use(i18n)
//   .use(vueMetaPlugin)
//   .use(createMetaManager())
//   .mount('#app')
  
// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  if(!import.meta.env.SSR){loadFonts()}
  const app = createSSRApp(App)
  app.use(router)
  .use(vuetify)
  .use(i18n)
  .use(vueMetaPlugin)
  .use(createMetaManager())
  .use(VueAxios, axios)
  .use(VueSocialSharing)
  return { app, router }
}