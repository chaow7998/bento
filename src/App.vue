<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter" />
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
import { mapActions } from "vuex";

export default {
  components: {
    FooterGuide
  },
  async mounted() {
    this.$store.dispatch("getAddress");
    this.getUserInfo();
    // this.$store.dispatch("getUserInfo");
  },
  methods: {
    ...mapActions(["getUserInfo"])
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#app
  width 100%;
  height 100%;
  background #f5f5f5;
  position relative;
</style>
