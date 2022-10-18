<template>
  <div class="speaker">
    <div class="speaker_img">
      <v-avatar size="150" rounded="circle">
        <img :src="imageUrl(item.image)"/>
      </v-avatar>
    </div>
    <div class="speaker_desc">
      <h3 class="speaker_name">{{ t(item.name) }}</h3>
      <p class="speaker_title"  v-html="t(item.title)"></p>
      <p class="speaker_company" v-if="item.company" v-html="t(item.company)"></p>
    </div>
  </div>
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
