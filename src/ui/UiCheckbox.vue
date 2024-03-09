<template>
  <label class="mb-2 w-100">
    <input v-model="model" class="form-check-input me-2" type="checkbox" v-bind="$attrs">
    <slot>{{ label }}</slot>
  </label>
</template>

<script setup>

defineProps({
  label: String,
})

defineOptions({ inheritAttrs: false })

const model = defineModel()
</script>