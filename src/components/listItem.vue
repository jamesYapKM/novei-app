<template>
    <div class="timeline_container">
        <div class="timeline_time v-col-sm-2">
            {{item.date}}
        </div>
        <div class="timeline_description v-col-sm-10">
            <h2 :class="{'mb-2': !item.speaker}">{{t(item.title)}}</h2>
            <div v-if="item.speaker">
                <p class="list_speaker mb-2">{{t(item.speaker)}}<span v-if="item.speaker_title">, {{t(item.speaker_title)}}</span> <span v-if="item.speaker_company">, {{t(item.speaker_company)}}</span></p>
            </div>
            <div v-if="item.speakers">
                <p class="list_speaker mb-2" v-for="(speaker, i) in item.speakers" :key="i">{{t(speaker.name)}}<span v-if="speaker.title">, {{t(speaker.title)}}</span> <span v-if="speaker.company">, {{t(speaker.company)}}</span></p>
            </div>
            <template v-if="item.description">
                <v-btn color="primary" variant="plain" @click.stop="showContent = !showContent" class="pa-0">{{t('view details')}} <v-icon end :icon="showContent?'mdi-chevron-up':'mdi-chevron-down'"></v-icon></v-btn>
                <div class="content" :class="{'d-block':showContent, 'd-none':!showContent}" v-html="t(item.description)"></div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useI18n } from "vue-i18n";
import { imageUrl } from "~/plugins/helper"
const { t } = useI18n();
const { item } = defineProps({
  item: { type: Object },
});
const showContent = ref(false)
</script>

<style lang="scss">
.list_speaker{
    color: #8B9DB2;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    font-style: italic;
    margin-bottom: 15px;
}
</style>
