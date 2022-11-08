// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { VBtn, VRow, VCol, VApp, VMain, VSpacer, VAvatar, VImg, VCard, VCardText, VAppBar } from "vuetify/components";
import * as directives from "vuetify/directives";
// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    components:{VBtn, VRow, VCol, VApp, VMain, VSpacer, VAvatar, VImg, VCard, VCardText, VAppBar},
    directives,
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#0b5cff", // #E53935
            secondary: "#00ff91", // #FFCDD2
          },
        },
        dark: {
          colors: {
            primary: "#0b5cff", // #E53935
            secondary: "#00ff91", // #FFCDD2
          },
        },
      },
    },
  }
);
