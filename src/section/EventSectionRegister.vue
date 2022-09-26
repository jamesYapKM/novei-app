<template>
  <v-row class="text-center">
    <v-col cols="12">
      <h2 class="register_main_title">{{ t("event.register main title") }}</h2>
      <v-btn
        color="secondary"
        size="x-large"
        class="mt-4"
        @click="$router.push({name:'register'})"
        >{{ t("event.register today") }}</v-btn
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
