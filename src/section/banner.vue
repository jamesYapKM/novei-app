<template>
    <v-row class="v-row justify-center ">
        <v-col md="6" cols="12" class="order-md-1 order-2">
            <h1 class="banner_main_title">{{ t('banner title')}} </h1>
            <p class="banner_sub_title_1">{{ t('banner sub title')}} </p>
            <div class="div_banner_location">
                <span class="banner_location">{{ t('banner location')}}</span>
                <span class="banner_date">{{ t('banner time')}}</span>
            </div>
            <v-btn color="secondary" size="x-large" :href="register_url" target="_blank">{{t('register now')}}</v-btn>
        </v-col>
        <v-col md="6" cols="12" class="order-md-2 order-1">
            <img :src="imageUrl('/edu_summit_img.png')" class="rounded-xl"/>
        </v-col>
    </v-row>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { imageUrl, register_url } from "~/plugins/helper"
const { t } = useI18n();
</script>

<style>

</style>