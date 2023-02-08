<template>
  <v-row class="text-center">
    <v-col cols="12">
      <h2 class="register_main_title">{{ t("work.register main title") }}</h2>
      <p class="register_sub_title">{{ t("work.register sub title") }}</p>
      <p class="register_sub_title text-start font-italic font-weight-bold ">{{ t("work.register additional text") }}</p>
      <v-btn
        color="primary"
        size="x-large"
        class="mt-4"
        rounded
        @click="$router.push({name:'register'})"
        >{{ t("work.register today") }}</v-btn
      >
    </v-col>
  </v-row>
</template>

<script setup>
import { register_url } from '~/data/phoneData.json'
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style></style>
