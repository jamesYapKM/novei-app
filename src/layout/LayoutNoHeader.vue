<template>
  <v-main>
    <section>
      <header
        class="v-toolbar v-toolbar--density-default v-theme--light v-app-bar v-toolbar--flat"
        :class="headerClass"
        style="
          top: 0px;
          z-index: 1004;
          transform: translateY(0%);
          position: fixed;
          left: 0px;
          width: calc((100% - 0px) - 0px);
        "
      >
        <!---->
        <div class="v-toolbar__content" style="height: 70px">
          <!----><!---->
          <div class="v-toolbar__content v-container">
            <img class="ace-logo" src="/topia/logo.png" style="height: 50px" />
            <div class="flex-grow-1"></div>
          </div>
          <!---->
        </div>
        <!---->
      </header>
    </section>
    <slot />
    <Footer />
  </v-main>
</template>

<script setup>
import Footer from "~/section/footer.vue";
import { useI18n } from "vue-i18n";
import { computed } from "@vue/reactivity";
const { t } = useI18n();
const props= defineProps({offsetTop: Boolean});
const offsetTop = computed({
  get() {
    return props.offsetTop
  }
})
const headerClass = computed({
  get(){
    return props.offsetTop?'bg-transparent':'bg-black';
  }
})
</script>

<style></style>
