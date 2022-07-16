<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import STButton from "./components/Button.vue";
import STInput from "./components/Input.vue";
import STCheckBox from "./components/CheckBox.vue";
import STSwtich from "./components/Swtich.vue";
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
  <div class="mt-10"><span> 输入:</span> <STInput></STInput></div>

  <div class="mt-10">
    <STCheckBox></STCheckBox>
  </div>

   <div class="mt-10">
    <STSwtich></STSwtich>
  </div>
</template>
