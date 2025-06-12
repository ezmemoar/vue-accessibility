<script setup>
import { onActivated, onDeactivated, onMounted, ref, useId } from "vue";
const num = ref(0);

onMounted(() => {
  console.log('increment mounted');
});

onActivated(() => {
  console.log('increment activated');
});

onDeactivated(() => {
  console.log('increment deactivated');
});
</script>

<template>
  <div id="num">
    <UButton @click="num++" :label="num" />
    <USeparator />
    {{ num }}
    {{ useId() }}
  </div>
</template>
