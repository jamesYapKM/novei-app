<template>
    <div class="timeline_container">
        <div class="timeline_time v-col-sm-2">
            {{item.date}}
        </div>
        <div class="timeline_description v-col-sm-10">
            <h2>{{t(item.title)}}</h2>
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

<style></style>
