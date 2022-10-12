<template>
<section class="sec_banner sec_main_banner">
    <v-container>
    <EventBanner :showBotton="false"/>
    </v-container>
</section>
  <section class="sec_register">
    <v-container>
        <EventRegistratonForm/>
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
</template>

<script setup>

import { useI18n } from "vue-i18n";
import { useMeta } from "vue-meta";

import EventBanner from "~/section/EventBanner.vue";
import EventRegistratonForm from '~/section/EventRegistratonForm.vue';
import EventSpeakers from "~/section/EventSpeakers.vue";
import EventModerator from "~/section/EventModerator.vue";

import "~/assets/event.scss";

const { t } = useI18n();
const metaInfo = useMeta({
  title: t('event.banner title'),
});
</script>

<style></style>
