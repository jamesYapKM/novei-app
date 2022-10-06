<template>
    <v-app-bar app elevate-on-scroll>
      <template slot:default class="v-toolbar__content v-container">
        <img class="ace-logo" src="/ace_logo.jpg" style="height: 50px;">
        <v-spacer></v-spacer>
        <img class="logo" src="/logo.png" />        
        <!-- <v-btn class="text-white bg-primary mr-2" flat>{{ t("login") }}</v-btn>
        <v-btn class="text-white bg-secondary" flat>{{ t("sign up") }}</v-btn> -->

        <!-- <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon color="primary" v-bind="props">{{ $i18n.locale }}</v-btn>
          </template>
          <v-list v-model="$i18n.locale">
            <v-list-item
              v-for="locale in $i18n.availableLocales"
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
        </v-menu> -->
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