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
</script>

<style></style>
