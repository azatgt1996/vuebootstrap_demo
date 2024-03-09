<template>
  <UiInput v-model="model" :label :required
           type="number" v-bind="$attrs" @keydown="onKeydown" />
</template>

<script setup>
import UiInput from './UiInput.vue';

defineProps({
  label: String,
  required: Boolean,
})

const validKeys = '0 1 2 3 4 5 6 7 8 9 . - Backspace ArrowUp ArrowDown ArrowLeft ArrowRight Tab Enter'.split(' ')
const onKeydown = (e) => (!validKeys.includes(e.key)) && e.preventDefault();

const model = defineModel()
</script>