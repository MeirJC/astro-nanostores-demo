<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { formState } from "@stores/handeling-state/sharedFormStore";
import { computed } from "vue";

const storeForm = useStore(formState);

const form = computed({
  get: () => storeForm.value,
  set: (newValue) => formState.set(newValue),
});

function handleChange(field: string, event: Event) {
  const target = event.target as HTMLInputElement;
  const value = target.type === "checkbox" ? target.checked : target.value;
  formState.set({ ...storeForm.value, [field]: value });
}

function handleSubmit(event: Event) {
  event.preventDefault();
  console.log("Vue Form Submitted:", storeForm.value);
}
</script>

<template>
  <form @submit="handleSubmit" class="rounded-lg bg-vue-100 p-4 text-black shadow-md">
    <h2 class="mb-4 text-center text-2xl font-bold text-vue-800">Vue Form (Shared State)</h2>
    <div class="space-y-4">
      <div>
        <label for="vue-firstName" class="block text-sm font-medium text-vue-700">First Name</label>
        <input
          type="text"
          id="vue-firstName"
          :value="form.firstName"
          @input="handleChange('firstName', $event)"
          class="mt-1 block w-full rounded-md border-vue-300 shadow-sm focus:border-vue-500 focus:ring focus:ring-vue-200"
        />
      </div>
      <div>
        <label for="vue-lastName" class="block text-sm font-medium text-vue-700">Last Name</label>
        <input
          type="text"
          id="vue-lastName"
          :value="form.lastName"
          @input="handleChange('lastName', $event)"
          class="mt-1 block w-full rounded-md border-vue-300 shadow-sm focus:border-vue-500 focus:ring focus:ring-vue-200"
        />
      </div>
      <div>
        <label for="vue-email" class="block text-sm font-medium text-vue-700">Email</label>
        <input
          type="email"
          id="vue-email"
          :value="form.email"
          @input="handleChange('email', $event)"
          class="mt-1 block w-full rounded-md border-vue-300 shadow-sm focus:border-vue-500 focus:ring focus:ring-vue-200"
        />
      </div>
      <div>
        <label for="vue-password" class="block text-sm font-medium text-vue-700">Password</label>
        <input
          type="password"
          id="vue-password"
          :value="form.password"
          @input="handleChange('password', $event)"
          class="mt-1 block w-full rounded-md border-vue-300 shadow-sm focus:border-vue-500 focus:ring focus:ring-vue-200"
        />
      </div>
      <div class="flex items-center">
        <input
          type="checkbox"
          id="vue-agreeTerms"
          :checked="form.agreeTerms"
          @change="handleChange('agreeTerms', $event)"
          class="h-4 w-4 rounded border-vue-300 text-vue-600 focus:ring-vue-500"
        />
        <label for="vue-agreeTerms" class="ml-2 block text-sm text-vue-700"
          >I agree to the terms and conditions</label
        >
      </div>
    </div>
    <div class="mt-6">
      <button
        type="submit"
        class="w-full rounded bg-vue-500 px-4 py-2 text-white transition-colors hover:bg-vue-600"
      >
        Submit
      </button>
    </div>
  </form>
</template>
