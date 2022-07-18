<template>
  <form class="st-form">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import bus from "../utils/event";
import { reactive, ref, provide } from "vue";
defineProps({
  model: {
    model: Object,
    default: {},
  },
  rules: {
    rules: Object,
    default: {},
  },
});
const fields = ref([]);

provide("form", this);

bus.$on("on-form-item-add", (field: any) => {
  if (field) {
    fields.value.push(field);
  }
});
bus.$on("on-form-remove", (field: any) => {
  if (field.prop) {
    fields.value.splice(fields.value.indexOf(field), 1);
  }
});

const resetField = () => {
  fields.value.forEach((field: any) => {
    field.resetField();
  });
};
// 公开方法：全部校验数据，支持 Promise
const validate = (callback: any) => {
  return new Promise((resolve) => {
    let valid = true;
    let count = 0;
    fields.value.forEach((field: any) => {
      field.validate("", (errors: any) => {
        if (errors) {
          valid = false;
        }
        if (++count === fields.value.length) {
          // 全部完成
          resolve(valid);
          if (typeof callback === "function") {
            callback(valid);
          }
        }
      });
    });
  });
};
</script>

<script lang="ts">
export default {
  name: "STForm",
};
</script>
