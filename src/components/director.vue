<template>
  <v-card>
    <v-card-text>
      <div class="d-flex flex-no-wrap">
        <div class="v-col-3 pa-0">
          <v-avatar size="80" rounded="circle" v-if="item.image">
            <img :src="imageUrl(item.image)"/>
          </v-avatar>
        </div>
        <div class="v-col-9 pa-0">
          <v-card-title class="pa-0"> {{ t(item.name) }} </v-card-title>
          <div class="div_speaker_subtitle">
            <p class="speaker_subtitle subtitle-2 text-grey-darken-1" v-html="t(item.description)"></p>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { imageUrl } from "~/plugins/helper"

const { item } = defineProps({
  item: { type: Object },
});

const { t } = useI18n();
</script>

<style></style>
