import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'
import {VitePluginRadar} from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir: "gitIo"
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    VitePluginRadar({
      enableDev: true,
      analytics: {
        id: 'G-XXXXX',
      },
      gtm: [
        {
          id: 'GTM-XXXXX',
        }
      ],
    }),
    vuetify({
      autoImport: true
    }),
    // Components({
    //   // add option {resolveIcons: true} as parameter for resolving problem with icons
    //   resolvers: [Vuetify3Resolver({ importStyle: "less" })],
    // }),
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      // you need to set i18n resource including paths !
      include: path.resolve(__dirname, './src/lang/*.json')
    }),
  ],
});
