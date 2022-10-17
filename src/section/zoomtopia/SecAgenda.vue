<template>
  <section class="sec_agenda sec_speakers">
    <div class="div_agenda_background">
      <div class="Images">
        <div class="Circle">
          <img
            src="/topia/circle-sparkles.png"
            alt=""
          />
        </div>
        <div class="Square">
          <img
            src="/topia/speakers-square.png"
            alt=""
          />
        </div>
        <div class="Cube">
          <img
            src="/topia/speakers-cube.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <v-container class="div_speakers">
      <v-row >
        <v-col cols="12">
          <h2 class="speakers_header text-start">{{t('zoomtopia.agenda')}}</h2>
        </v-col>
      </v-row>
      <v-row>
        <!-- <v-col cols="12">
          <v-timeline truncate-line="start" side="end">
            <Timeline  v-for="(item, i) in timelines" :key="'timeline-'+i" :item="item"></Timeline>
          </v-timeline>
        </v-col> -->
        <v-col cols="12" class="col-md-4 col-sm-6"  v-for="(item, i) in timelines" :key="'timeline-'+i">
            <ListItem :item="item"/>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>

import ListItem from '~/components/listItem.vue';
import { useI18n } from "vue-i18n"; 
import { timelines } from "~/data/topiaData.json"
import { ref } from '@vue/reactivity';

const { t } = useI18n();
</script>

<style lang="sass" scoped>
.v-timeline--vertical.v-timeline
  grid-template-columns: 230px min-content auto
</style>
