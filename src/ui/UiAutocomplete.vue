<template>
  <div>
    <UiInput v-model="model" :label :required type="search"
             :list="id" v-bind="$attrs" />
    <datalist :id>
      <option v-for="(item, key) in options" :value="item" :key />
    </datalist>
  </div>
</template>

<script setup>
import { nanoid } from 'nanoid';
import UiInput from './UiInput.vue';

const id = nanoid()

defineProps({
  label: String,
  required: Boolean,
  options: Array,
})

defineOptions({ inheritAttrs: false })

const model = defineModel()
</script>