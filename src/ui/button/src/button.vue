<template>
  <button class="t-button" @click="handleClick" :disabled="disabled || loading">
    <i class="t-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
export default {
  name: 'SButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: String,
    size: String,
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
};
</script>

/* 说明
原生button：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button */
