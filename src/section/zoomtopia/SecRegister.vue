<template>
    <v-row class="text-center">
      <v-col cols="12">
        <h2 class="register_main_title">{{ t("zoomtopia.title") }}</h2>
        <h3 class="register_sub_title">{{ t("zoomtopia.subtitle") }}</h3>
      </v-col>

      <v-col cols="12" class="text-center">
          <a class="zoom_btn " @click="$router.push({name:'zoomtopia-register'})"
              >{{t('register now')}}</a
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
  