<script setup lang="ts">

function test(name: string, price: number = 1000 ): string {
  return `${name} - ${price}`
}

test('test')

</script>

<template>
  TEST
</template>
