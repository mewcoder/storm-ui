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
  <span class="flex items-center">
    <input id="st-checkbox" type="checkbox" value="" class="st-checkbox" />
    <label for="st-checkbox" class="st-checkbox-label">checkbox </label>
  </span>
</template>
