<template>
  <section class="sec_overall">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <p>
            Explore New Dimensions at Zoomtopia Singapore 2022. For the first
            time ever, we’ll host Zoomtopia Singapore onsite. Enjoy this highly
            curated experience, where you’ll dive deep beneath the surface
            exploring Zoom’s integrated platform, and discover how it elevates
            your experience–bringing you closer to your vision, your work, and
            your world.
          </p>
          <p>
            Zoomtopia is designed for you, featuring interactive, engaging,
            educational, and thought-provoking sessions. This half-day
            experience offers interactive and engaging sessions, customer
            panels, and guest speakers designed to provide value and offer a
            glimpse into the future of communications.
          </p>

          <p>
            Join us and dive deep into Zoom’s integrated platform, and discover
            how to elevate your communication and collaboration experiences!
          </p>
        </v-col>
        <v-col cols="12" class="text-center">
          <a class="zoom_btn " @click="$router.push({name:'zoomtopia-register'})"
              >{{t('register now')}}</a
            >
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n"; 

const { t } = useI18n();
</script>

<style></style>
