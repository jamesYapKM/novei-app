<template>
  <section class="sec_phone_banner sec_banner">
    <v-container>
      <PhoneBanner />
    </v-container>
  </section>
  <section class="sec_about">
    <v-container>
      <PhoneSection2 />
    </v-container>
  </section>
  <section class="sec_speaker">
    <v-container>
      <PhoneSpeakers />
    </v-container>
  </section>
  <section class="sec_timeline">
    <v-container>
      <PhoneTimeline />
    </v-container>
  </section>
  <section class="sec_register">
    <v-container>
      <PhoneSectionRegister />
    </v-container>
  </section>
</template>

<script setup>
import PhoneBanner from "../section/PhoneBanner.vue";
import PhoneSection2 from "../section/PhoneSection2.vue";
import PhoneSectionRegister from "../section/PhoneSectionRegister.vue";
import PhoneTimeline from "../section/PhoneTimeline.vue";
import PhoneSpeakers from "../section/PhoneSpeakers.vue";
import { useMeta } from "vue-meta";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const metaInfo = useMeta({
  title: t('phone.banner title'),
});
</script>

<style></style>
