<template>
  <v-app v-scroll="onScroll">
    <v-app-bar app elevate-on-scroll>
      <template slot:default class="v-toolbar__content v-container">
        <img class="logo" src="/logo.png" />

        <v-spacer></v-spacer>
        <!-- <v-btn class="text-white bg-primary mr-2" flat>{{ t("login") }}</v-btn>
        <v-btn class="text-white bg-secondary" flat>{{ t("sign up") }}</v-btn> -->

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="indigo" v-bind="props">{{ $i18n.locale }}</v-btn>
          </template>
          <v-list v-model="$i18n.locale">
            <v-list-item
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              :value="locale"
              @click="$i18n.locale = locale"
            >
              <v-list-item-title>{{
                t("language " + locale)
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>
    <v-main>
      <section class="sec_banner">
        <v-container>
          <Banner />
        </v-container>
      </section>
      <section class="sec_about">
        <v-container>
          <Section2 />
        </v-container>
      </section>
      <section class="sec_include">
        <v-container>
          <Section3 />
        </v-container>
      </section>
      <section class="sec_speaker">
        <v-container>
          <Speakers />
        </v-container>
      </section>
      <section class="sec_timeline">
        <v-container>
          <Timeline />
        </v-container>
      </section>
      <Footer />
    </v-main>
    <ScrollToTop :offsetTop="isOffsetTop" />
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import "~/assets/event.scss";

import Speakers from "./section/speakers.vue";
import Banner from "./section/banner.vue";
import Section2 from "./section/section2.vue";
import Section3 from "./section/section3.vue";
import Timeline from "./section/timeline.vue";
import Footer from "./section/footer.vue";
import ScrollToTop from "./components/ScrollToTop.vue";

const drawer = ref(false);
const { t } = useI18n();
const isOffsetTop = ref(false);
const onScroll = (e) => {
  isOffsetTop.value = e.target.scrollingElement.scrollTop == 0;
  // this.offsetTop = e.target.scrollingElement.scrollTop;
};
</script>
