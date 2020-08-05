<template lang="html">
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style lang="css" scoped>
#app {
  color: var(--black);
  text-align: center;

  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
