<script setup>
import { ref } from 'vue';

const emit = defineEmits(['delete']);
const props = defineProps({
  label: {
    type: String,
  },
  index: {
    type: Number,
  },
});

const model = defineModel();

const open = ref(false);
const onConfirmDelete = () => {
  emit('delete', props.index);
  open.value = false;
}
</script>

<template>
  <div class="flex items-center gap-3">
    <UCheckbox size="xl" v-model="model" :label :ui="{ root: 'flex-1' }" />
    <UModal v-model:open="open">
      <UButton variant="ghost" icon="i-heroicons-x-mark" />

      <template #content>
        <UCard>
          <p class="text-center text-lg">
            Are you sure you want to delete "{{ label }}"?
          </p>
          <div class="mt-5 flex justify-evenly">
            <UButton variant="outline" color="slate" label="No" />
            <UButton label="Yes" @click="onConfirmDelete" />
          </div>
        </UCard>
      </template>
    </UModal>
  </div>
</template>