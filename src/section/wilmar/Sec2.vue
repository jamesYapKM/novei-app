<template>
  <v-row class="justify-center">
    <v-col md="10" cols="12">
      <v-row class="justify-center">
        <v-col cols="12" class="text-center ">
          <h2 class="font-weight-bold text-primary" v-html="t('wilmar.win gift title')"></h2>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { imageUrl } from "~/plugins/helper";
const { t } = useI18n();
</script>

<style></style>
