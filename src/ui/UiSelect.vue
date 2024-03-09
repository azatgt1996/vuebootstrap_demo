<template>
  <label class="mb-3 w-100">
    <span class="control-label" :class="{ required }">{{ label }}</span>
    <select class="form-select" v-model="model" :multiple :required
            :size="multiple ? 2 : 1" v-bind="$attrs">
      <option hidden value="">{{ placeholder }}</option>
      <option v-for="{ value, name } in options" :value>{{ name }}</option>
    </select>
  </label>
</template>

<script setup>

defineProps({
  label: String,
  required: Boolean,
  placeholder: String,
  options: Array,
  multiple: Boolean,
})

defineOptions({ inheritAttrs: false })

const model = defineModel()
</script>