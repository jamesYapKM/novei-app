<template>
  <section class="sec_speakers">
    <div class="div_speakers_background">
      <div class="Images">
        <div class="Circle">
          <img src="/topia/circle-sparkles.png" alt="" />
        </div>
        <div class="Square">
          <img src="/topia/speakers-square.png" alt="" />
        </div>
        <div class="Cube">
          <img src="/topia/speakers-cube.png" alt="" />
        </div>
      </div>
    </div>
    <v-container class="div_speakers">
      <v-row class="text-center">
        <v-col cols="12">
          <h2 class="speakers_header">Speakers</h2>
          <v-dialog v-model="dialog" max-width="600">
            <v-card v-if="showItem.value">
              <v-card-text class="speaker_model">
                <v-row>
                  <v-col cols="12" class="text-center">
                    <Speaker :item="showItem.value"/>
                  </v-col>
                  <v-col cols="12" v-html="t(showItem.value.description)" v-if="showItem.value.description">
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <v-row class="text-center justify-center">
        <v-col cols="12" md="6" lg="4" class="speaker_list" v-for="(item, i) in speakers" :key="'speaker-'+i">
          <Speaker :item="item" @click="showPopup(item)"/>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { speakers } from "~/data/topiaData.json"

import { useI18n } from "vue-i18n";
import Speaker from "~/components/Speaker.vue";

const { t } = useI18n();
const dialog = ref(false);
const showItem = reactive({});

const showPopup = (item) => {
  showItem.value = item;
  dialog.value = true;
  console.log(showItem);
};
</script>

<style></style>
