<template>
  <section class="sec_banner sec_main_banner">
    <v-container>
      <Banner/>
    </v-container>
  </section>
  <section class="sec_about">
    <v-container>
      <Sec1/>
    </v-container>
  </section>
  <section class="sec_include">
    <v-container>
      <Sec2/>
    </v-container>
  </section>
  <!-- <section class="sec_speaker">
    <v-container>
        <Moderator/>
    </v-container>
  </section> -->
  <section class="sec_speaker">
    <v-container>
        <Speakers/>
    </v-container>
  </section>
  <section class="sec_timeline">
    <v-container>
        <Timeline/>
    </v-container>
  </section>
  <section class="sec_register">
    <v-container>
        <SectionRegister/>
    </v-container>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useMeta } from "vue-meta";
import Banner from "~/section/work/Banner.vue";
import Sec1 from "~/section/work/Sec1.vue";
import Sec2 from "~/section/work/Sec2.vue";
import Moderator from "~/section/work/Moderator.vue";
import Speakers from "~/section/work/Speakers.vue";
import Timeline from "~/section/work/Timeline.vue";
import SectionRegister from "~/section/work/SectionRegister.vue";
import "~/assets/event.scss";

const { t } = useI18n();
const metaInfo = useMeta({
  title: t('work.banner title'),
});
</script>

<style></style>
 