<template>
  <section class="sec_banner">
    <v-container fluid>
      <div class="div_top_banner_image">
        <img
          class="Gradient"
          src="/topia/bg-gradient.png"
          alt=""
        />
        <div class="Images">
          <img
            class="Moon"
            src="/topia/moon.png"
            alt=""
          />
          <img
            class="Circle"
            src="/topia/circles.png"
            alt=""
          />
          <img
            class="Build"
            src="/topia/right.png"
            alt=""
          />
        </div>
      </div>
      <div class="v-container div_banner_content">
        <div class="Image">
          <img
            src="/topia/zoomtopia.png"
            alt="zoomtopia"
            loading="lazy"
            width=""
            height=""
          />
        </div>
        <h1 class="h_title">{{t('zoomtopia.title')}}</h1>
        <h2 class="h_subtitle">{{t('zoomtopia.subtitle')}}</h2>
        <p class="p_date">{{t('zoomtopia.date')}}</p>
        <div class="div_box_buttons">
            <a class="zoom_btn btn_self" @click="$router.push({name:'zoomtopia-register'})"
              >In-person | Register Now</a
            >
        </div>
        <p class="p_date" v-html="t('zoomtopia.location')"></p>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n"; 

const {showBotton} = defineProps({
    showBotton: {type:Boolean,default:true},
})
const { t } = useI18n();
</script>

<style></style>
