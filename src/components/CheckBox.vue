<script setup lang="ts">
import { ref } from "vue";
defineProps({
  type: {
    type: String,
    default: "default",
  },
});
</script>

<template>
  <span class="st-checkbox">
    <input id="st-checkbox" class="st-checkbox-box" type="checkbox" value="" />
    <label for="st-checkbox" class="st-checkbox-label">checkbox </label>
  </span>
</template>
