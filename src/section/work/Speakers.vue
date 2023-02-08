<template>
  <v-row>
      <v-col cols="12">
        <h2>{{ t('speakers') }}</h2>
      </v-col>
      <v-col md="6" lg="4" cols="12" v-for="(item, i) in speakers" :key="'speaker-'+i">
        <Director :item="item"/>
      </v-col>
  </v-row>
</template>

<script setup>
import { ref, toRefs } from "@vue/reactivity";
import Director from "~/components/director.vue";

import { speakers } from "~/data/workData.json"
import { useI18n } from "vue-i18n";

const { t } = useI18n();

</script>

<style></style>
