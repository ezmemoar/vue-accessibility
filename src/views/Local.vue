<script setup>
import { ref } from 'vue';

const product = ref({
  title: "Apel",
  description: "Apel berwarna merah",
})
</script>

<template>
  <UFormField name="title" label="Title">
    <UInput v-model="product.title" />
  </UFormField>
  {{ product }}
</template>
