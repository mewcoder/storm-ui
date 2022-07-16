<script setup lang="ts">
import { ref } from "vue";
defineProps({
  type: {
    type: String,
    defalut:'default'
  }
});
</script>

<template>
  <button class="st-btn" :class="[`st-btn-${type}`]"><slot></slot></button>
</template>
