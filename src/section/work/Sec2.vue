<template>
  <v-row class="justify-center align-center">
    <v-col cols="12" md="6" class="order-2 order-md-1">
      <h1 class="about_title">{{ t("work.about title") }}</h1>
      <span v-html="t('work.about description')"></span>
      <v-btn
        class="mt-4"
        color="primary"
        rounded
        size="x-large"
        @click="$router.push({name:'register'})"
        >{{ t("register now") }}</v-btn
      >
    </v-col>
    <v-col cols="12" md="6" class="order-1 order-md-2 text-center">
      <img :src="imageUrl('/training-01-scaled.jpg')" class="rounded-xl" />
    </v-col>
  </v-row>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { imageUrl } from "~/plugins/helper";
const { t } = useI18n();
</script>

<style></style>
