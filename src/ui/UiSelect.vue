<template>
  <label class="mb-3 w-100">
    <span class="control-label" :class="{ required }">{{ label }}</span>
    <select class="form-select" v-model="model" :multiple :required
            :size="multiple ? 2 : 1" v-bind="$attrs">
      <option hidden value="">{{ placeholder }}</option>
      <option v-for="{ value, name } in _options" :value>{{ name }}</option>
    </select>
  </label>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: String,
  required: Boolean,
  placeholder: String,
  options: Array,
  multiple: Boolean,
})

const _options = computed(() => {
  const { options } = props
  if (typeof options[0] === 'object') return options
  return options.map(item => ({ name: item, value: item }))
})

defineOptions({ inheritAttrs: false })

const model = defineModel()
</script>