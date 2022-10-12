<template>
  <Banner :showBotton="false"></Banner>
  <section class="sec_register">
    <v-container>
        <EventRegistratonForm></EventRegistratonForm>
    </v-container>
  </section>
  
  <SecSpeakers />
</template>

<script setup>

import "~/assets/zoomtopia.scss";

import Banner from "../section/zoomtopia/banner.vue";
import SecSpeakers from "~/section/zoomtopia/SecSpeakers.vue";
import EventRegistratonForm from "../section/zoomtopia/EventRegistratonForm.vue";

import { useMeta } from "vue-meta";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const metaInfo = useMeta({
  title: t('zoomtopia.title'),
});
</script>

<style></style>
