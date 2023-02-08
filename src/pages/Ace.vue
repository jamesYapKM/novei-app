<template>
  <section class="sec_banner sec_main_banner">
    <v-container>
      <EventBanner />
    </v-container>
  </section>
  <section class="sec_about">
    <v-container>
      <EventSec1/>
    </v-container>
  </section>
  <section class="sec_include">
    <v-container>
      <EventSec2/>
    </v-container>
  </section>
  <section class="sec_speaker">
    <v-container>
        <EventModerator/>
    </v-container>
  </section>
  <section class="sec_speaker">
    <v-container>
        <EventSpeakers/>
    </v-container>
  </section>
  <section class="sec_timeline">
    <v-container>
        <EventTimeline/>
    </v-container>
  </section>
  <section class="sec_register">
    <v-container>
        <EventSectionRegister/>
    </v-container>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useMeta } from "vue-meta";

import EventBanner from "~/section/EventBanner.vue";
import EventSec1 from "~/section/EventSec1.vue";
import EventSec2 from "~/section/EventSec2.vue";
import EventSpeakers from "~/section/EventSpeakers.vue";
import EventModerator from "~/section/EventModerator.vue";
import EventTimeline from "~/section/EventTimeline.vue";
import EventSectionRegister from "~/section/EventSectionRegister.vue";
import "~/assets/event.scss";

const { t } = useI18n();
const metaInfo = useMeta({
  title: t('event.banner title'),
});
</script>

<style></style>
 