<template>
  <v-row class="justify-center align-center">
    <v-col cols="12" md="6" class="order-2 order-md-1 text-center">
      <h1 class="about_title">In this training, we will cover:</h1>
    </v-col>
    <v-col cols="12" md="6" class="order-1 order-md-2 text-center">
      <table>
        <tbody>
        <tr><td>1</td><td>Sign in & Configuration</td></tr>
        <tr><td>2</td><td>Using Zoom Phone</td></tr>
        <tr><td>3</td><td>Zoom Mobile App</td></tr>
        <tr><td>4</td><td>Resources & Support</td></tr>
        <tr><td>5</td><td>Best Practices</td></tr>
        <tr><td>6</td><td>Active Call</td></tr>
        <tr><td>7</td><td>Walkthroughs</td></tr>
      </tbody>
      </table>
    </v-col>
  </v-row>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { imageUrl } from "~/plugins/helper";
const { t } = useI18n();
</script>

<style></style>
