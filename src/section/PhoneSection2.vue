<template>
  <v-row class="justify-center align-center">
    <v-col cols="12" md="6" class="pr-md-6 text-center">
      <img :src="imageUrl('/mobile-01-scaled.jpg')" class="rounded-xl" />
    </v-col>
    <v-col cols="12" md="6">
      <span v-html="t('phone.about description')"></span>
      <v-btn class="mt-4" color="secondary" size="x-large" :href="register_url" target="_blank">{{t('register now')}}</v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { imageUrl } from "~/plugins/helper"
import { register_url } from '~/data/phoneData.json'
const { t } = useI18n();
</script>

<style></style>
