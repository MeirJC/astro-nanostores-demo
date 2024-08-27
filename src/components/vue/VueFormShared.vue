<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { formState } from '@stores/sharedFormStore';

const form = useStore(formState);

function handleChange(field: string, event: Event) {
  const target = event.target as HTMLInputElement;
  formState.set({
    ...form.value,
    [field]: target.type === 'checkbox' ? target.checked : target.value
  });
}

function handleSubmit(event: Event) {
  event.preventDefault();
  console.log('Vue Form Submitted:', form.value);
}
</script>

<template>
  <form @submit="handleSubmit" class="p-4 bg-vue-100 rounded-lg shadow-md text-black">
    <h2 class="mb-4 text-center text-2xl font-bold text-vue-800">Vue Form (Shared State)</h2>
    <div class="space-y-4">
      <div>
        <label for="vue-firstName" class="block text-sm font-medium text-vue-700">First Name</label>
        <input type="text" id="vue-firstName" v-model="form.firstName" @input="handleChange('firstName', $event)"
          class="mt-1 block w-full rounded-md border-vue-300 shadow-sm focus:border-vue-500 focus:ring focus:ring-vue-200" />
      </div>
      <div>
        <label for="vue-lastName" class="block text-sm font-medium text-vue-700">Last Name</label>
        <input type="text" id="vue-lastName" v-model="form.lastName" @input="handleChange('lastName', $event)"
          class="mt-1 block w-full rounded-md border-vue-300 shadow-sm focus:border-vue-500 focus:ring focus:ring-vue-200" />
      </div>
      <div>
        <label for="vue-email" class="block text-sm font-medium text-vue-700">Email</label>
        <input type="email" id="vue-email" v-model="form.email" @input="handleChange('email', $event)"
          class="mt-1 block w-full rounded-md border-vue-300 shadow-sm focus:border-vue-500 focus:ring focus:ring-vue-200" />
      </div>
      <div>
        <label for="vue-password" class="block text-sm font-medium text-vue-700">Password</label>
        <input type="password" id="vue-password" v-model="form.password" @input="handleChange('password', $event)"
          class="mt-1 block w-full rounded-md border-vue-300 shadow-sm focus:border-vue-500 focus:ring focus:ring-vue-200" />
      </div>
      <div class="flex items-center">
        <input type="checkbox" id="vue-agreeTerms" v-model="form.agreeTerms"
          @change="handleChange('agreeTerms', $event)"
          class="h-4 w-4 rounded border-vue-300 text-vue-600 focus:ring-vue-500" />
        <label for="vue-agreeTerms" class="ml-2 block text-sm text-vue-700">I agree to the terms and conditions</label>
      </div>
    </div>
    <div class="mt-6">
      <button type="submit" class="w-full px-4 py-2 bg-vue-500 text-white rounded hover:bg-vue-600 transition-colors">
        Submit
      </button>
    </div>
  </form>
</template>