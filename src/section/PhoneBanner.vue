<template>
    <v-row class="">
        <v-col md="8" lg="6" cols="12" class="order-md-1 order-2 col_banner_desc">
            <h1 class="banner_main_title">{{ t('phone.banner title')}} </h1>
            <div class="div_banner_location">
                <span class="banner_location">{{ t('phone.banner date')}}</span>
                <span class="banner_date">{{ t('phone.banner time')}}</span>
            </div>
            <v-btn color="secondary" size="x-large" :href="register_url" target="_blank">{{t('register now')}}</v-btn>
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
const { t } = useI18n();
</script>

<style>

</style>