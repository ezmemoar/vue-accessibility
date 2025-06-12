<script setup>
import { useUserStore } from '../stores/userStore';

const userStore = useUserStore();
</script>

<template>
  <div class="space-y-3">
    <UFormField name="name" label="Name">
      <UInput v-model="userStore.user.name" />
    </UFormField>
    <UFormField name="email" label="Email">
      <UInput v-model="userStore.user.email" />
    </UFormField>
    {{ userStore.user }}
  </div>
</template>
