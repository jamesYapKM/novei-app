<template>
  <v-timeline-item dot-color="purple-lighten-2" fill-dot size="x-small">
    <template v-slot:opposite> {{t(item.date)}} </template>
    <v-card class="timeline_display">
      <v-card-text class="bg-purple-lighten-2" v-html="t(item.title)"> </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useI18n } from "vue-i18n";
import { imageUrl } from "~/plugins/helper"
const { t } = useI18n();
const { item } = defineProps({
  item: { type: Object },
});
</script>

<style lang="sass" scoped>
</style>
