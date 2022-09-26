<template>
  <ClientOnly>
    <v-fab-transition>
      <v-btn v-if="!offsetTop"
        color="primary"
        icon
        @click.stop="scrollToTop"
        class="btn-back-to-top"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>
  </ClientOnly>
</template>

<script>
import { ClientOnly } from "~/components/ClientOnly";
export default {
  components:{
    ClientOnly
  },
  data() {
    return {
      options:{
          duration: 300,
          offset: 0,
          easing: 'easeInOutCubic',
      }
    };
  },
  props:{
      offsetTop: Boolean
  },
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    },
    scrollToTop(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
};
</script>

<style lang="scss">
  .v-btn.btn-back-to-top{
    position: fixed;
    right: 10px;
    bottom: 20px;
  }
</style>
