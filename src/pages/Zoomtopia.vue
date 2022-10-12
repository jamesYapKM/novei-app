<template>
  <!-- <SecHeader /> -->
  <Banner />
  <SecDescription />
  <SecSpeakers />
  <SecAgenda />
  <section class="sec_join_us">
    <v-container>
      <SecRegister></SecRegister>
    </v-container>
  </section>
</template>

<script setup>
import "~/assets/zoomtopia.scss";
import Banner from "~/section/zoomtopia/banner.vue";
import SecDescription from "~/section/zoomtopia/SecDescription.vue";
import SecSpeakers from "~/section/zoomtopia/SecSpeakers.vue";
import SecAgenda from "~/section/zoomtopia/SecAgenda.vue";
import SecHeader from "~/section/zoomtopia/SecHeader.vue";
import SecRegister from "../section/zoomtopia/SecRegister.vue";
import { useMeta } from "vue-meta";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const metaInfo = useMeta({
  title: t('zoomtopia.title'),
});
</script>

<style></style>
