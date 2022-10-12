<template>
  <section>
    <header
      class="v-toolbar v-toolbar--density-default v-theme--light v-app-bar"
      :class="{'bg-transparent':!offsetTop, 'bg-black':offsetTop}"
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
      <div class="v-toolbar__content" style="height: 64px">
        <!----><!---->
        <div class="v-toolbar__content v-container">
          <img class="ace-logo" src="/ace_logo.jpg" style="height: 50px" />
          <div class="flex-grow-1"></div>
          <img class="logo" src="/logo-blue.svg" />
        </div>
        <!---->
      </div>
      <!---->
    </header>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic",
      },
    };
  },
  props: {
    offsetTop: Boolean,
  },
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    }
  },
};
</script>

<style></style>
