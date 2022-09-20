<template>
  <metainfo>
    <template v-slot:title ="{ content }">{{ content ? `${content}` : `Everyting Zoom`}} </template>
  </metainfo>
  <v-app v-scroll="onScroll">
    <AppLayout/>
    <ScrollToTop :offsetTop="isOffsetTop" />
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import "~/assets/event.scss";
import AppLayout from "~/AppLayout.vue";
import ScrollToTop from "~/components/ScrollToTop.vue";

const { t } = useI18n();
const isOffsetTop = ref(false);
const onScroll = (e) => {
  isOffsetTop.value = e.target.scrollingElement.scrollTop == 0;
  // this.offsetTop = e.target.scrollingElement.scrollTop;
};
</script>
