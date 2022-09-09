<template>
    <v-row class="justify-center">
        <v-col md="10" cols="12">
            <v-row class="justify-center">
                <v-col cols="12" class="text-center">
                    <h2>{{t('win gift title')}}</h2>
                    <p v-html="t('win gift description')"></p>
                </v-col>
                <v-col cols="8" md="4" sm="6">
                    <img :src="imageUrl('/zoom-bag.jpg')" class="rounded-circle img_gift" />
                </v-col>
                <v-col cols="8" md="4" sm="6">
                    <img :src="imageUrl('/zoom-shirt.jpg')" class="rounded-circle img_gift" />
                </v-col>
                <v-col cols="8" md="4" sm="6">
                    <img :src="imageUrl('/zoom-bottle.jpg')" class="rounded-circle img_gift" />
                </v-col>
        </v-row>
        </v-col>
    </v-row>
</template>

<script setup>
    import { useI18n } from "vue-i18n";
    import { imageUrl } from "~/plugins/helper"
    const { t } = useI18n();
</script>

<style>

</style>