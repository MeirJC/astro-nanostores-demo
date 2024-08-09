<template>
  <form class="space-y-4 bg-cyan-100 p-6 rounded-lg shadow-md text-slate-700">
    <h2 class="text-2xl font-bold text-cyan-800 mb-4">Independent Vue Form</h2>
    <div>
      <label for="vue-iso-firstName" class="block text-sm font-medium text-cyan-700">First Name</label>
      <input type="text" id="vue-iso-firstName" v-model="form.firstName" @input="handleChange('firstName', $event)"
        class="mt-1 block w-full rounded-md border-cyan-300 shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-200" />
    </div>
    <div>
      <label for="vue-iso-lastName" class="block text-sm font-medium text-cyan-700">Last Name</label>
      <input type="text" id="vue-iso-lastName" v-model="form.lastName" @input="handleChange('lastName', $event)"
        class="mt-1 block w-full rounded-md border-cyan-300 shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-200" />
    </div>
    <div>
      <label for="vue-iso-email" class="block text-sm font-medium text-cyan-700">Email</label>
      <input type="email" id="vue-iso-email" v-model="form.email" @input="handleChange('email', $event)"
        class="mt-1 block w-full rounded-md border-cyan-300 shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-200" />
    </div>
    <div>
      <label for="vue-iso-password" class="block text-sm font-medium text-cyan-700">Password</label>
      <input type="password" id="vue-iso-password" v-model="form.password" @input="handleChange('password', $event)"
        class="mt-1 block w-full rounded-md border-cyan-300 shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-200" />
    </div>
    <div class="flex items-center">
      <input type="checkbox" id="vue-iso-agreeTerms" v-model="form.agreeTerms"
        @change="handleChange('agreeTerms', $event)"
        class="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-cyan-300 rounded" />
      <label for="vue-iso-agreeTerms" class="ml-2 block text-sm text-cyan-700">I agree to the terms and
        conditions</label>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { vueFormState } from '@stores/isoFormStore';

const form = useStore(vueFormState);

function handleChange(field: string, event: Event) {
  const target = event.target as HTMLInputElement;
  vueFormState.set({
    ...form.value,
    [field]: target.type === 'checkbox' ? target.checked : target.value
  });
}
</script>