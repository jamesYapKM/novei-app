<template>
  <v-row class="justify-center">
    <v-col md="10" cols="12">
      <v-row class="justify-center">
        <v-col cols="12" class="text-center">
          <h2 class="font-weight-bold">join the Kahoot! game at the end of the training and win Zoom swags.</h2>
          <v-btn
            class="mt-4"
            color="primary"
            size="x-large"
            @click="scrollTo('reg-form')"
            >{{ t("register now") }}</v-btn
          >
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { imageUrl } from "~/plugins/helper";
const { t } = useI18n();

const scrollTo =(target)=>{
  const element = document.getElementById(target).offsetTop - 60;
  window.scrollTo({
    top: element,
    behavior: 'smooth'
  })
}
</script>

<style></style>
