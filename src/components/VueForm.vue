<template>
  <form class="space-y-4 bg-orange-100 p-6 rounded-lg shadow-md text-slate-700">
    <h2 class="text-2xl font-bold text-orange-800 mb-4">Vue Form (Shared State)</h2>
    <div>
      <label for="vue-firstName" class="block text-sm font-medium text-orange-700">First Name</label>
      <input type="text" id="vue-firstName" v-model="form.firstName" @input="handleChange('firstName', $event)"
        class="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200" />
    </div>
    <div>
      <label for="vue-lastName" class="block text-sm font-medium text-orange-700">Last Name</label>
      <input type="text" id="vue-lastName" v-model="form.lastName" @input="handleChange('lastName', $event)"
        class="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200" />
    </div>
    <div>
      <label for="vue-email" class="block text-sm font-medium text-orange-700">Email</label>
      <input type="email" id="vue-email" v-model="form.email" @input="handleChange('email', $event)"
        class="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200" />
    </div>
    <div>
      <label for="vue-password" class="block text-sm font-medium text-orange-700">Password</label>
      <input type="password" id="vue-password" v-model="form.password" @input="handleChange('password', $event)"
        class="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200" />
    </div>
    <div class="flex items-center">
      <input type="checkbox" id="vue-agreeTerms" v-model="form.agreeTerms" @change="handleChange('agreeTerms', $event)"
        class="h-4 w-4 text-orange-600 focus:ring-orange-500 border-orange-300 rounded" />
      <label for="vue-agreeTerms" class="ml-2 block text-sm text-orange-700">I agree to the terms and conditions</label>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { formState } from '@stores/formStore';

const form = useStore(formState);

function handleChange(field: string, event: Event) {
  const target = event.target as HTMLInputElement;
  formState.set({
    ...form.value,
    [field]: target.type === 'checkbox' ? target.checked : target.value
  });
}
</script>