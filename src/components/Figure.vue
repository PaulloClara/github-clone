<template lang="html">
  <figure class="c-figure">
    <img :src="require(`@/assets/${$props.pSrc}`)" :alt="$attrs.alt" />
  </figure>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class Figure extends Vue {
  @Prop({ type: String, required: true }) readonly pSrc: string;
}
</script>

<style lang="css" scoped>
.c-figure {
  width: 24px;
  height: 24px;
}

.c-figure > img {
  width: inherit;
  height: inherit;
}
</style>
