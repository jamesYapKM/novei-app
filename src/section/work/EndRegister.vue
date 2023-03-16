<template>
    <v-row class="justify-center align-center">
      <v-col cols="12" md="6" class="pr-md-6 text-center">
        <h2>{{ t("work.end of registration") }}</h2>
      </v-col>
    </v-row>
  </template>
  
  <script setup>
  import { useI18n } from "vue-i18n";
  import { imageUrl } from "~/plugins/helper";
  const { t } = useI18n();
  </script>
  
  <style></style>
  