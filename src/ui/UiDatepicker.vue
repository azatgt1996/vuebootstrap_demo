<template>
  <UiInput v-model="model" :label :required :type v-bind="$attrs" />
</template>

<script setup>
import UiInput from './UiInput.vue';

defineProps({
  label: String,
  required: Boolean,
  type: { type: String, default: 'date' },
})

const model = defineModel()
</script>