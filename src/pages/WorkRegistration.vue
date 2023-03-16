<template>
  <section class="sec_banner sec_main_banner">
    <v-container>
      <Banner :showBotton="false" />
    </v-container>
  </section>
  <!-- <section class="sec_speaker">
    <v-container>
      <Speakers />
    </v-container>
  </section> -->
  <section class="sec_register">
    <v-container>
      <end-register></end-register>
      <!-- <RegistratonForm></RegistratonForm> -->
    </v-container>
  </section>
</template>

<script setup>
import Banner from "~/section/work/Banner.vue";
// import Speakers from "~/section/work/Speakers.vue";
import EndRegister from "~/section/work/EndRegister.vue";

import { useMeta } from "vue-meta";
import { useI18n } from "vue-i18n";
import "~/assets/event.scss";

const { t } = useI18n();
const metaInfo = useMeta({
  title: t("work.banner title"),
});
</script>

<style></style>
