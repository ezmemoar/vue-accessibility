<script setup>
import { ref } from 'vue';
import { object, string } from 'yup';

const emit = defineEmits(['add']);

const open = ref(false);
const state = ref({
  label: "",
});

const schema = object({
  label: string().required("Label required"),
});

const onSubmit = () => {
  emit('add', {
    label: state.value.label,
    done: false,
  });

  state.value.label = "";
  open.value = false;
}
</script>

<template>
  <UModal v-model:open="open">
    <UButton trailing-icon="i-heroicons-plus">
      Add
    </UButton>

    <template #content>
      <UCard>
        <UForm :state :schema class="space-y-3" @submit="onSubmit">
          <UFormField label="Label" name="label">
            <UInput v-model="state.label" />
          </UFormField>
          <UButton type="submit" label="Add" />
        </UForm>
      </UCard>
    </template>
  </UModal>
</template>