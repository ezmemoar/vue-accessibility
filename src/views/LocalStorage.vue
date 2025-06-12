<script setup>
import { ref, watch } from 'vue';
import { useUserStore } from '../stores/userStore';

const form = ref({
  name: "",
  email: "",
});

let user = ref(JSON.parse(localStorage.getItem("user")) || {});

watch(form, (v) => {
  localStorage.setItem("user", JSON.stringify(v));
  user.value = JSON.parse(localStorage.getItem("user"));
}, { deep: true });
</script>

<template>
  <div class="space-y-3">
    <UFormField name="name" label="Name">
      <UInput v-model="form.name" />
    </UFormField>
    <UFormField name="email" label="Email">
      <UInput v-model="form.email" />
    </UFormField>
    {{ user }}
  </div>
</template>
