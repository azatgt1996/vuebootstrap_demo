<template>
  <label class="mb-3 w-100">
    <span class="control-label" :class="{ required }">{{ label }}</span>
    <input v-model.trim="model" class="form-control" :required v-bind="$attrs">
  </label>
</template>

<script setup>

defineProps({
  label: String,
  required: Boolean,
})

defineOptions({ inheritAttrs: false })

const model = defineModel()
</script>