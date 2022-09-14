<script setup>
import { markRaw, ref, watch } from "vue";
import { useRoute } from "vue-router";
import LayoutWithLanguageVue from "~/layout/LayoutWithLanguage.vue";

const layout = ref();
const route = useRoute();

watch(
  () => route.meta?.layout,
  async (metaLayout) => {
    try {
      const component =
        metaLayout && (await import(/* @vite-ignore */ `./layout/${metaLayout}.vue`));
      layout.value = markRaw(component?.default || LayoutWithLanguageVue);
    } catch (e) {
      layout.value = markRaw(LayoutWithLanguageVue);
    }
  },
  { immediate: true }
);
</script>

<template>
  <component :is="layout"> <router-view /> </component>
</template>
