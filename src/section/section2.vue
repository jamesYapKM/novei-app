<template>
  <v-row class="justify-center align-center">
    <v-col cols="12" md="6" class="pr-md-6 text-center">
      <img :src="imageUrl('/about.jpg')" class="rounded-xl" />
    </v-col>
    <v-col cols="12" md="6">
      <h1 class="about_title">{{ t("about title") }}</h1>
      <span v-html="t('about description')"></span>
    </v-col>
  </v-row>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { imageUrl } from "~/plugins/helper"
const { t } = useI18n();
</script>

<style></style>
