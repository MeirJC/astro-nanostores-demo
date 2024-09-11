<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { vueFormState } from "@stores/handeling-state/independentFormStore";
import { reactive } from 'vue';

const storeForm = useStore(vueFormState);
const form = reactive({ ...storeForm.value });

function handleSubmit(event: Event) {
  event.preventDefault();
  vueFormState.set({ ...form });
  console.log("Vue Form Submitted:", form);
}
</script>

<template>
  <form @submit="handleSubmit" class="rounded-lg bg-vue-100 p-4 text-black shadow-md">
    <h2 class="mb-4 text-center text-2xl font-bold text-vue-800">Independent Vue Form</h2>
    <div class="space-y-4">
      <div>
        <label for="vue-iso-firstName" class="block text-sm font-medium text-vue-700">First Name</label>
        <input type="text" id="vue-iso-firstName" v-model="form.firstName"
          class="mt-1 block w-full rounded-md border-vue-300 shadow-sm focus:border-vue-500 focus:ring focus:ring-vue-200" />
      </div>
      <div>
        <label for="vue-iso-lastName" class="block text-sm font-medium text-vue-700">Last Name</label>
        <input type="text" id="vue-iso-lastName" v-model="form.lastName"
          class="mt-1 block w-full rounded-md border-vue-300 shadow-sm focus:border-vue-500 focus:ring focus:ring-vue-200" />
      </div>
      <div>
        <label for="vue-iso-email" class="block text-sm font-medium text-vue-700">Email</label>
        <input type="email" id="vue-iso-email" v-model="form.email"
          class="mt-1 block w-full rounded-md border-vue-300 shadow-sm focus:border-vue-500 focus:ring focus:ring-vue-200" />
      </div>
      <div>
        <label for="vue-iso-password" class="block text-sm font-medium text-vue-700">Password</label>
        <input type="password" id="vue-iso-password" v-model="form.password"
          class="mt-1 block w-full rounded-md border-vue-300 shadow-sm focus:border-vue-500 focus:ring focus:ring-vue-200" />
      </div>
      <div class="flex items-center">
        <input type="checkbox" id="vue-iso-agreeTerms" v-model="form.agreeTerms"
          class="h-4 w-4 rounded border-vue-300 text-vue-600 focus:ring-vue-500" />
        <label for="vue-iso-agreeTerms" class="ml-2 block text-sm text-vue-700">I agree to the terms and
          conditions</label>
      </div>
    </div>
    <div class="mt-6">
      <button type="submit" class="w-full rounded bg-vue-500 px-4 py-2 text-white transition-colors hover:bg-vue-600">
        Submit
      </button>
    </div>
  </form>
</template>
