<template>
  <v-row class="justify-center align-center">
    <v-col cols="12" md="6" class="pr-md-6 text-center">
      <img :src="imageUrl('/training-03-scaled.jpg')" class="rounded-xl" />
    </v-col>
    <v-col cols="12" md="6">
      <h1 class="about_title">{{ t("event.about title") }}</h1>
      <span v-html="t('event.about description')"></span>
      <v-btn
        class="mt-4"
        color="secondary"
        size="x-large"
        @click="$router.push({name:'register'})"
        >{{ t("register now") }}</v-btn
      >
    </v-col>
  </v-row>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { imageUrl } from "~/plugins/helper";
const { t } = useI18n();
</script>

<style></style>
