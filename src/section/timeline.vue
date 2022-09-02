<template>
    <v-row>
        <v-col cols="12">
          <h2 class="timeline_main_title">{{ t('agenda') }}</h2>
        </v-col>
        <v-col cols="12" class="col-md-4 col-sm-6"  v-for="(item, i) in timelines" :key="'timeline-'+i">
            <ListItem :item="item"/>
        </v-col>
    </v-row>
</template>

<script setup>
import ListItem from '../components/listItem.vue';
import { useI18n } from "vue-i18n"; 
import { timelines } from "~/data/eventData.json"
import { ref } from '@vue/reactivity';

const { t } = useI18n();
// const timelines = ref(timelines)
</script>

<style>

</style>