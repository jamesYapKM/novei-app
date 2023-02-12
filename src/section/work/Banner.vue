<template>
    <v-row class="">
        <v-col md="8" lg="6" cols="12" class="order-md-1 order-2 col_banner_desc">
            <h1 class="banner_main_title" v-html="t('work.banner title')"></h1>
            <!-- <p class="banner_main_title">{{ t('work.banner sub title')}} </p> -->
            <div class="div_banner_time_and_desc">
                <p class="div_banner_time">
                    <span class="banner_location">{{ t('work.banner date')}}</span>
                    <span class="banner_date">{{ t('work.banner time')}}</span>
                </p>
            </div>
            <div class="div_banner_location" v-html="t('work.banner location')">
            </div>

            <v-btn v-if="showBotton" rounded color="primary" size="x-large" @click="$router.push({name:'register'})">{{t('register now')}}</v-btn>
        </v-col>
        <!-- <v-col md="6" cols="12" class="order-md-2 order-1">
            <img :src="imageUrl('/edu_summit_img.png')" class="rounded-xl"/>
        </v-col> -->
    </v-row>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { imageUrl } from "~/plugins/helper"
import { register_url } from '~/data/phoneData.json'
import { toRef } from "@vue/reactivity";
const { t } = useI18n();
const {showBotton} = defineProps({
    showBotton: {type:Boolean,default:true},
})
</script>

<style>

</style>