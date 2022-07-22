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
  <input class="st-input" />
</template>
