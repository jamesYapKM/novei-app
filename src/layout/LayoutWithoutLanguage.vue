<template>
    <v-app-bar app elevate-on-scroll>
      <template slot:default class="v-toolbar__content v-container">
        <img class="logo" src="/logo.png" />

        <v-spacer></v-spacer>
      </template>
    </v-app-bar>
    <v-main>
      <slot/>
      <Footer />
    </v-main>
</template>

<script setup>
import Footer from '~/section/footer.vue';
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style>

</style>