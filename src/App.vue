<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import STButton from "./components/Button.vue";
</script>

<template>
  <HelloWorld msg="Strom UI Demo" />
  <div>
    <STButton>按钮</STButton>
    <STButton type="primary">按钮</STButton>
    <STButton type="success">按钮</STButton>
    <STButton type="warning">按钮</STButton>
    <STButton type="danger">按钮</STButton>
  </div>
</template>
