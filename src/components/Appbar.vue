<template lang="html">
  <header class="c-appbar">
    <div class="left">
      <c-button p-type="router-link" :p-to="{ name: 'Home' }" p-icon>
        <c-figure p-src="img/logo.svg" alt="Logo"></c-figure>
      </c-button>

      <c-search>
        <template #icon>
          <c-figure p-src="img/search-bar.svg" alt="/ to search"></c-figure>
        </template>
      </c-search>

      <nav>
        <ul>
          <li>
            <c-button p-type="router-link" p-to="#">
              Pull requests
            </c-button>
          </li>

          <li>
            <c-button p-type="router-link" p-to="#">
              Issues
            </c-button>
          </li>

          <li>
            <c-button p-type="router-link" p-to="#">
              Marketplace
            </c-button>
          </li>

          <li>
            <c-button p-type="router-link" p-to="#">
              Explore
            </c-button>
          </li>
        </ul>
      </nav>
    </div>

    <div class="right">
      <c-button class="bell" p-type="router-link" p-to="#" p-icon>
        <c-figure p-src="img/bell.svg" alt="Bell"></c-figure>
      </c-button>
      <c-button class="plus" p-type="text" p-icon>
        <c-figure p-src="img/plus.svg" alt="Plus"></c-figure>
      </c-button>
      <c-button class="profile" p-type="text" p-icon>
        <c-figure
          p-src="https://avatars1.githubusercontent.com/u/47908861?v=4"
          alt="Profile"
        ></c-figure>
      </c-button>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import cButton from "@/components/Button.vue";
import cFigure from "@/components/Figure.vue";
import cSearch from "@/components/Search.vue";

@Component({
  components: { cButton, cFigure, cSearch }
})
export default class Appbar extends Vue {}
</script>

<style lang="css" scoped>
.c-appbar {
  justify-content: space-between;

  padding: 10px 16px;

  background-color: var(--header);
}

.c-appbar,
.c-appbar > .left,
.c-appbar > .right,
.c-appbar > .left > nav > ul {
  display: flex;
  align-items: center;
}

.c-appbar > .left > .c-button[data-icon],
.c-appbar > .left > .c-search {
  margin-right: 16px;
}

.c-appbar > .left > .c-button[data-icon] .c-figure {
  width: 32px;
  height: 32px;

  fill: var(--logo);
}

.c-appbar > .left > nav > ul > li > .c-button {
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 600;
}

.c-appbar > .left > nav > ul > li + li {
  margin-left: 16px;
}

.c-appbar > .right > .c-button + * {
  margin-left: 16px;
}

.c-appbar > .right > .c-button.bell .c-figure,
.c-appbar > .right > .c-button.plus .c-figure {
  width: 16px;
  height: 16px;

  fill: #fff;
}

.c-appbar > .right > .c-button.profile {
  overflow: hidden;
  border-radius: 50%;
}

.c-appbar > .right > .c-button.profile .c-figure {
  width: 20px;
  height: 20px;
}
</style>
