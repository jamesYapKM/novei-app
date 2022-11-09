<template>
  <section class="sec_banner sec_main_banner">
    <v-container>
      <WilmarBanner />
    </v-container>
  </section>
  <section class="sec_register">
    <v-container>
      <EventRegistratonForm />
    </v-container>
  </section>
  <section class="sec_free_gift">
    <v-container>
      <FreeGift />
    </v-container>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useMeta } from "vue-meta";

import WilmarBanner from "~/section/wilmar/WilmarBanner.vue";
import EventRegistratonForm from "~/section/wilmar/EventRegistratonForm.vue";
import FreeGift from "~/section/wilmar/FreeGift.vue"

import "~/assets/wilmar.scss";

const { t } = useI18n();
const metaInfo = useMeta({
  title: t("wilmar.banner title"),
});
</script>

<style></style>
