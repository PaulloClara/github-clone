<template lang="html">
  <div id="app">
    <c-appbar></c-appbar>

    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Appbar from "@/components/Appbar.vue";

@Component({
  components: {
    "c-appbar": Appbar
  }
})
export default class App extends Vue {}
</script>

<style lang="css" scoped>
#app {
  color: var(--black);
  font-size: 14px;
  text-align: center;

  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
