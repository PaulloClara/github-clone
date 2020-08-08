<template lang="html">
  <form class="c-search">
    <input type="text" placeholder="Search or jump to ..." />

    <slot name="icon"></slot>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Search extends Vue {}
</script>

<style lang="css" scoped>
.c-search {
  display: flex;
  align-items: center;

  width: 272px;
  height: 28px;
  padding-right: 8px;

  font-weight: 400;
  border-radius: 6px;
  background-color: var(--search);
}

.c-search > input {
  width: 100%;
  padding: 5px 12px;

  border-radius: 0;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;

  color: var(--primary);
  font-size: 0.9rem;

  background-color: transparent;
}

.c-search > input::placeholder {
  color: var(--search-placeholder);
  font-size: 0.9rem;
}

.c-search > .c-figure {
  width: 20px;
  height: 20px;
}
</style>
