<template>
  <v-row class="text-center">
    <v-col cols="12">
      <h2 class="register_main_title">{{ t("register main title") }}</h2>
      <p class="register_sub_title">{{ t("register sub title") }}</p>
      <v-btn
        color="secondary"
        size="x-large"
        class="mt-4"
        :href="register_url"
        target="_blank"
        >{{ t("register today") }}</v-btn
      >
    </v-col>
  </v-row>
</template>

<script setup>
import { register_url } from "~/plugins/helper";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style></style>
