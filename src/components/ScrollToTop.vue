<template>
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
</template>

<script>
export default {
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

<style>
  .btn-back-to-top{
    position: fixed;
    right: 10px;
    bottom: 20px;
  }
</style>
