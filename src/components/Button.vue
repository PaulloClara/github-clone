<template lang="html">
  <router-link v-if="isRouterLink" class="c-button" :to="$props.pTo">
    <slot name="default"></slot>
  </router-link>

  <button v-else class="c-button" :type="$props.pType">
    <slot name="default"></slot>
  </button>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ type: String, required: true }) readonly pType: string;
  @Prop({ type: [String, Object], required: false }) readonly pTo?: any;
  @Prop({ type: Boolean, required: false, default: false }) pIcon?: boolean;

  get isRouterLink() {
    return this.$props.pType === "router-link";
  }

  public loadDataset() {
    if (this.pIcon) {
      this.$el.dataset.icon = "";
    }
  }

  public mounted() {
    this.loadDataset();
  }
}
</script>

<style lang="css" scoped>
.c-button {
}

.c-button[data-icon] {
  background-color: transparent;
}
</style>
