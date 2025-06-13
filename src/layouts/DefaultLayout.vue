<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center">
    <UCard class="max-w-[80%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%]">
      <div v-if="route.meta.backBtn" class="pb-5">
        <UButton to="/" label="Back" color="info" icon="i-heroicons-arrow-left" />
      </div>
      <RouterView />
    </UCard>
  </div>
</template>
