<template>
  <section class="sec_footer">
    <v-container class="text-center pa-0">
      <p>
        Copyright ©2021 Zoom Video Communications, Inc. All rights reserved.
      </p>
      <div class="footer_links">
        <a href="https://explore.zoom.us/en/terms/">{{ t("terms") }}</a>
        <a href="https://explore.zoom.us/en/privacy/">{{ t("privacy") }}</a>
        <a href="https://explore.zoom.us/en/trust/">{{ t("trust center") }}</a>
        <a href="https://explore.zoom.us/en/trust/legal-compliance/">{{
          t("legal and compliance")
        }}</a>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import {register_url} from "~/plugins/helper"
import { useI18n } from "vue-i18n";
const { t } = useI18n();

</script>

<style></style>
