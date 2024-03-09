<template>
  <UiInput v-model="model" :label :required type="search"
    :list="id" v-bind="$attrs" :placeholder="placeholder[type]"
    :pattern="regex[type]" :type :maxlength="maxlength[type]" />
</template>

<script setup>
import UiInput from './UiInput.vue';

defineProps({
  label: String,
  required: Boolean,
  type: String,
})

const regex = {
  email: String.raw`^[^@]+@[^@]+\.[^@]+$`,
  tel: String.raw`7\d{10}`,
}

const placeholder = {
  email: 'name@mail.com',
  tel: '7XXXXXXXXXX',
}

const maxlength = {
  email: 20,
  tel: 11,
}

defineOptions({ inheritAttrs: false })

const model = defineModel()
</script>