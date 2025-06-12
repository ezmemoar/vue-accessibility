<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center">
    <UCard class="max-w-[30%]">
      <div v-if="route.meta.backBtn" class="pb-5">
        <UButton to="/" label="Back" color="info" icon="i-heroicons-arrow-left" />
      </div>
      <RouterView />
    </UCard>
  </div>
</template>
