<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { $formState } from "@stores/handling-state/sharedFormStore";
import { computed } from "vue";

const storeForm = useStore($formState);

const form = computed({
  get: () => storeForm.value,
  set: (newValue) => $formState.set(newValue),
});

function handleChange(field: string, event: Event) {
  const target = event.target as HTMLInputElement;
  const value = target.type === "checkbox" ? target.checked : target.value;
  $formState.setKey(field, value);
}

function handleSubmit(event: Event) {
  event.preventDefault();
  console.log("Vue Form Submitted:", storeForm.value);
}
</script>

<template>
  <form @submit="handleSubmit" class="bg-vue-100 rounded-lg p-4 text-black shadow-md">
    <h2 class="text-vue-800 mb-4 text-center text-2xl font-bold">Vue Form (Shared State)</h2>
    <div class="space-y-4">
      <div>
        <label for="vue-firstName" class="text-vue-700 block text-sm font-medium">First Name</label>
        <input
          type="text"
          id="vue-firstName"
          :value="form.firstName"
          @input="handleChange('firstName', $event)"
          class="border-vue-300 focus:border-vue-500 focus:ring-vue-200 mt-1 block w-full rounded-md shadow-xs focus:ring"
        />
      </div>
      <div>
        <label for="vue-lastName" class="text-vue-700 block text-sm font-medium">Last Name</label>
        <input
          type="text"
          id="vue-lastName"
          :value="form.lastName"
          @input="handleChange('lastName', $event)"
          class="border-vue-300 focus:border-vue-500 focus:ring-vue-200 mt-1 block w-full rounded-md shadow-xs focus:ring"
        />
      </div>
      <div>
        <label for="vue-email" class="text-vue-700 block text-sm font-medium">Email</label>
        <input
          type="email"
          id="vue-email"
          :value="form.email"
          @input="handleChange('email', $event)"
          class="border-vue-300 focus:border-vue-500 focus:ring-vue-200 mt-1 block w-full rounded-md shadow-xs focus:ring"
        />
      </div>
      <div>
        <label for="vue-password" class="text-vue-700 block text-sm font-medium">Password</label>
        <input
          type="password"
          id="vue-password"
          :value="form.password"
          @input="handleChange('password', $event)"
          class="border-vue-300 focus:border-vue-500 focus:ring-vue-200 mt-1 block w-full rounded-md shadow-xs focus:ring"
        />
      </div>
      <div class="flex items-center">
        <input
          type="checkbox"
          id="vue-agreeTerms"
          :checked="form.agreeTerms"
          @change="handleChange('agreeTerms', $event)"
          class="border-vue-300 text-vue-600 focus:ring-vue-500 h-4 w-4 rounded"
        />
        <label for="vue-agreeTerms" class="text-vue-700 ml-2 block text-sm"
          >I agree to the terms and conditions</label
        >
      </div>
    </div>
    <div class="mt-6">
      <button
        type="submit"
        class="bg-vue-500 hover:bg-vue-600 w-full rounded px-4 py-2 text-white transition-colors"
      >
        Submit
      </button>
    </div>
  </form>
</template>
