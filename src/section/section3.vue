<template>
  <v-row class="justify-center align-center">
    <v-col cols="12" md="6" class="order-2 order-md-1">
      <h1 class="about_title">{{ t("include title") }}</h1>
      <span v-html="t('include description')"></span>
      <v-btn color="secondary" size="x-large" class="mt-4" :href="register_url" target="_blank">{{t('register now')}}</v-btn>
    </v-col>
    <v-col cols="12" md="6" class="order-1 order-md-2 text-center">
      <img :src="imageUrl('/cover.jpg')" class="rounded-xl" />
    </v-col>
  </v-row>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { imageUrl, register_url } from "~/plugins/helper"

const { t } = useI18n();
</script>

<style></style>
