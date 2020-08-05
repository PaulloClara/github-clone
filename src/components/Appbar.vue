<template lang="html">
  <header class="c-appbar">
    <img src="@/assets/img/logo.svg" alt="Logo" />

    <form class="search">
      <input type="text" />

      <img src="@/assets/img/search-bar.svg" alt="/ to search" />
    </form>

    <ul>
      <li>
        <a href="#">
          Pull requests
        </a>
      </li>

      <li>
        <a href="#">
          Issues
        </a>
      </li>

      <li>
        <a href="#">
          Marketplace
        </a>
      </li>

      <li>
        <a href="#">
          Explore
        </a>
      </li>
    </ul>

    <div class="controller">
      <img src="@/assets/img/bell.svg" alt="Bell" />
      <img src="@/assets/img/plus.svg" alt="Plus" />
      <img
        src="https://avatars1.githubusercontent.com/u/47908861?v=4"
        alt="Profile"
      />
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Appbar extends Vue {}
</script>

<style lang="css" scoped></style>
