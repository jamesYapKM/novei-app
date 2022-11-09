<template>
    <v-row class="">
        <v-col md="8" lg="6" cols="12" class="order-md-1 order-2 col_banner_desc">
            <h1 class="banner_main_title">{{ t('wilmar.banner title')}} </h1>
            <p class="banner_sub_title_1">{{ t('wilmar.banner sub title')}} </p>
            <div class="div_banner_location">
                <span class="banner_location">{{ t('wilmar.banner location')}}</span>
                <span class="banner_date">{{ t('wilmar.banner time')}}</span>
            </div>
        </v-col>
        <!-- <v-col md="6" cols="12" class="order-md-2 order-1">
            <img :src="imageUrl('/edu_summit_img.png')" class="rounded-xl"/>
        </v-col> -->
    </v-row>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { imageUrl, register_url } from "~/plugins/helper"
const { t } = useI18n();
</script>

<style>

</style>