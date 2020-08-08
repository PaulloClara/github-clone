<template lang="html">
  <figure class="c-figure">
    <svg v-if="isSvg" @load="injectSvg($event)"></svg>
    <img v-else :src="path" :alt="$attrs.alt" />
  </figure>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { CustomEvent } from "@/utils/types";

@Component
export default class Figure extends Vue {
  @Prop({ type: String, required: true }) readonly pSrc: string;

  get path() {
    return this.isExternal ? this.pSrc : require(`@/assets/${this.pSrc}`);
  }

  get parser() {
    return new DOMParser();
  }

  get isSvg() {
    return this.pSrc.includes(".svg");
  }

  get isExternal() {
    return this.pSrc.includes("http");
  }

  public async injectSvg({ target: el }: CustomEvent) {
    const response = await fetch(this.path);
    const svgText = await response.text();
    const svgDoc = this.parser.parseFromString(svgText, "image/svg+xml");
    const svgEl = svgDoc.documentElement;

    Object.keys(el.dataset).forEach(data => {
      svgEl.dataset[data] = "";
    });

    this.$el.replaceChild(svgEl, el);
  }
}
</script>

<style lang="css" scoped>
.c-figure {
  width: 100%;
  height: 100%;
}

.c-figure > img,
.c-figure > svg {
  width: inherit;
  height: inherit;
}
</style>
