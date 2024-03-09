<template>
  <label class="mb-3 w-100">
    <span class="control-label" :class="{ required }">{{ label }}</span>
    <textarea v-model="model" class="form-control" :required v-bind="$attrs" />
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