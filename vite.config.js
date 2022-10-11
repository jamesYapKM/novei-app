import path from "path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";
import { VitePluginRadar } from "vite-plugin-radar";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // build: {
    //   outDir: "zoomDist",
    // },
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
          id: env.VITE_GA_ID,
        },
        gtm: [
          {
            id: env.VITE_GTM_ID,
          },
        ],
      }),
      vuetify({
        autoImport: true,
      }),
      // Components({
      //   // add option {resolveIcons: true} as parameter for resolving problem with icons
      //   resolvers: [Vuetify3Resolver({ importStyle: "less" })],
      // }),
      vueI18n({
        // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
        // compositionOnly: false,

        // you need to set i18n resource including paths !
        include: path.resolve(__dirname, "./src/lang/*.json"),
      }),
    ],
    ssr: {
      // TODO: workaround until they support native ESM
      noExternal: [/vue-i18n/, 'vuetify', 'vue-meta','vform'],
    },
  };
});
