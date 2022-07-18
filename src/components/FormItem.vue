<template>
  <div
    class="el-form-item"
    :class="[
      {
        'is-required': isRequired,
      },
    ]"
  >
    <label v-if="label" class="el-form-item__label">{{ label }}</label>
    <div class="el-form-item__content">
      <slot></slot>
      <div v-if="validateState === 'error'" class="el-form-item__error">
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import bus from "../utils/event";
import { inject, ref, computed, toRefs, onMounted, onUnmounted } from "vue";

const form: any = inject("form");

const props = defineProps({
  label: {
    model: String,
    default: "",
  },
  prop: {
    rules: String,
    default: "",
  },
});

const validateState = ref("");
const validateMessage = ref("");
const initialValue = ref(undefined);

const getRules = () => {
  let formRules = form.rules;
  formRules = formRules ? formRules[props.prop] : [];
  return [].concat(formRules || []);
};

const isRequired = computed(() => {
  let rules = getRules();
  let isRequired = false;
  if (rules && rules.length) {
    rules.every((rule: any) => {
      if (rule.required) {
        isRequired = true;
      }
    });
  }
  return isRequired;
});

const fieldValue = computed(() => form.model[props.prop]);

// 重置数据
const resetField = () => {
  validateState.value = "";
  validateMessage.value = "";
  form.model[props.prop] = initialValue.value;
};

// 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
const getFilteredRule = (trigger: any) => {
  const rules = getRules();
  return rules.filter(
    (rule: any) => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
  );
};

const onFieldBlur = () => {
  validate("blur");
};
const onFieldChange = () => {
  validate("change");
};

const setRules = () => {};

const validate = (trigger: any, callback: any = function () {}) => {
  let rules = getFilteredRule(trigger);
  if (!rules || rules.length === 0) {
    return true;
  }
  // 设置状态为校验中
  validateState.value = "validating";
  // 以下为 async-validator 库的调用方法
  let descriptor: any = {};
  descriptor[props.prop] = rules;
  const validator = new AsyncValidator(descriptor);
  let model: any = {};

  model[props.prop] = fieldValue.value;
  validator.validate(model, { firstFields: true }, (errors: ansy) => {
    validateState.value = !errors ? "success" : "error";
    validateMessage.value = errors ? errors[0].message : "";
    callback(validateMessage.value);
  });
};

onMounted(() => {
  // 如果没有传入 prop，则无需校验，也就无需缓存
  if (props.prop) {
    bus.dispatch("STForm", "on-form-item-add", this);
    // 设置初始值，以便在重置时恢复默认值
    initialValue.value = fieldValue.value;
    setRules();
  }
});

onUnmounted(() => {
  bus.dispatch("STForm", "on-form-item-remove", this);
});
</script>

<script lang="ts">
import AsyncValidator from "async-validator";
import emitter from "../utils/emitter";
export default {
  name: "STFormItem",
  mixins: [emitter],
};
</script>
