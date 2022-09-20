<template>
  <section class="sec_banner sec_main_banner">
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
  <section class="sec_free_gift">
    <v-container>
      <FreeGift />
    </v-container>
  </section>
  <section class="sec_register">
    <v-container>
        <SectionRegister/>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useMeta } from "vue-meta";

import Speakers from "~/section/speakers.vue";
import Banner from "~/section/banner.vue";
import Section2 from "~/section/section2.vue";
import Section3 from "~/section/section3.vue";
import Timeline from "~/section/timeline.vue";
import FreeGift from "~/section/free-gift.vue";
import SectionRegister from "../section/sectionRegister.vue";

const drawer = ref(false);
const { t } = useI18n();
const metaInfo = useMeta({
  title: t('banner title'),
});
</script>

<style></style>
