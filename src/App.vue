<template>
    <metainfo>
      <template v-slot:title ="{ content }">{{ content ? `${content}` : `Everyting Zoom`}} </template>
    </metainfo>
  <v-app v-scroll="onScroll">
    <AppLayout  :offsetTop="isOffsetTop" />
    <ScrollToTop :offsetTop="isOffsetTop" />
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import AppLayout from "~/AppLayout.vue";
import ScrollToTop from "~/components/ScrollToTop.vue";

const { t } = useI18n();
const isOffsetTop = ref(false);
const onScroll = (e) => {
  isOffsetTop.value = e.target.scrollingElement.scrollTop == 0;
  // this.offsetTop = e.target.scrollingElement.scrollTop;
};
/*
const route = useRoute()
onMounted(() => {
  if(route.hash){
    const target = document.getElementById(route.hash.substring(1))?.getBoundingClientRect()?.top;
    if(target > 0){
      window.scrollTo({
        top: target,
        behavior: 'smooth'
      })
      console.log(route.hash, target)
    }
  }
});*/
</script>
