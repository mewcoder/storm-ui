<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { createNameSpace } from "@strom-ui/utils/create";
import { computed } from "vue";
import { iconProps } from "./icon";
const bem = createNameSpace("icon");

defineOptions({
  name: "STIcon",
});

const props = defineProps(iconProps);

const style = computed(() => {
  if (!props.size && !props.color) return {};

  return {
    ...(props.size ? { "font-size": props.size + "px" } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
</script>

<style scoped></style>
