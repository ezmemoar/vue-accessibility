<script setup>
import { ref, useId } from 'vue';

const text = ref('');
</script>

<template>
  <div id="text">
    <UFormField label="Text">
      <UInput v-model="text" />
    </UFormField>
    {{ text }}
    {{ useId() }}
  </div>
</template>
