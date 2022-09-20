<template>
    <v-app-bar app elevate-on-scroll>
      <template slot:default class="v-toolbar__content v-container">
        <img class="logo" src="/logo.png" />

        <v-spacer></v-spacer>

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon color="primary" v-bind="props">{{ $i18n.locale }}</v-btn>
          </template>
          <v-list v-model="$i18n.locale">
            <v-list-item
              v-for="locale in languages"
              :key="`locale-${locale}`"
              :value="locale"
              @click="$i18n.locale = locale"
              :disabled="locale == $i18n.locale"
            >
              <v-list-item-title>{{
                t("language " + locale)
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
const languages = ['en','bi','vi']
</script>

<style>

</style>