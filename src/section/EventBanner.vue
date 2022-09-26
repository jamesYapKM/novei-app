<template>
    <v-row class="">
        <v-col md="8" lg="6" cols="12" class="order-md-1 order-2 col_banner_desc">
            <h1 class="banner_main_title">{{ t('event.banner title')}} </h1>
            <div class="div_banner_time_and_desc">
                <p class="div_banner_time">
                    <span class="banner_location">{{ t('event.banner date')}}</span>
                    <span class="banner_date">{{ t('event.banner time')}}</span>
                </p>
                <p class="div_time_descriprion">{{ t('event.banner description')}}</p>
            </div>
            <div class="div_banner_location" v-html="t('event.banner location')">
            </div>

            <v-btn v-if="showBotton" color="secondary" size="x-large" @click="$router.push({name:'register'})">{{t('register now')}}</v-btn>
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