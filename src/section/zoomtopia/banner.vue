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
        <h1 class="h_title">Explore New Dimensions</h1>
        <h2 class="h_subtitle">Zoomtopia Singapore 2022</h2>
        <p class="p_date">17 November 2022</p>
        <p class="p_date">2 Collyer Quay, Singapore 049327</p>
        <div class="div_box_buttons">
            <a class="zoom_btn btn_self" @click="$router.push({name:'zoomtopia-register'})"
              >In-person</a
            >
            <a class="zoom_btn btn_monti"  @click="$router.push({name:'zoomtopia-register'})">MONTI</a>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const {showBotton} = defineProps({
    showBotton: {type:Boolean,default:true},
})
</script>

<style></style>
