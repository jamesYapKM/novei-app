<template>
  <v-row>
      <v-col cols="12">
        <h2>{{ t('work.moderator') }}</h2>
      </v-col>
      <v-col md="6" lg="4" cols="12" v-for="(item, i) in moderators" :key="'speaker-'+i">
        <Director :item="item"/>
      </v-col>
  </v-row>
</template>

<script setup>
import { ref, toRefs } from "@vue/reactivity";
import Director from "~/components/director.vue";

import { moderators } from "~/data/workData.json"
import { useI18n } from "vue-i18n";

const { t } = useI18n();

</script>

<style></style>
