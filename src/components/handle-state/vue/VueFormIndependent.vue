<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { $vueFormState } from "@stores/handling-state/independentFormStore";
import { reactive } from "vue";

const storeForm = useStore($vueFormState);
const form = reactive({ ...storeForm.value });

function handleSubmit(event: Event) {
  event.preventDefault();
  $vueFormState.set({ ...form });
  console.log("Vue Form Submitted:", form);
}
</script>

<template>
  <form @submit="handleSubmit" class="bg-vue-100 rounded-lg p-4 text-black shadow-md">
    <h2 class="text-vue-800 mb-4 text-center text-2xl font-bold">Independent Vue Form</h2>
    <div class="space-y-4">
      <div>
        <label for="vue-iso-firstName" class="text-vue-700 block text-sm font-medium"
          >First Name</label
        >
        <input
          type="text"
          id="vue-iso-firstName"
          v-model="form.firstName"
          class="border-vue-300 focus:border-vue-500 focus:ring-vue-200 mt-1 block w-full rounded-md shadow-xs focus:ring"
        />
      </div>
      <div>
        <label for="vue-iso-lastName" class="text-vue-700 block text-sm font-medium"
          >Last Name</label
        >
        <input
          type="text"
          id="vue-iso-lastName"
          v-model="form.lastName"
          class="border-vue-300 focus:border-vue-500 focus:ring-vue-200 mt-1 block w-full rounded-md shadow-xs focus:ring"
        />
      </div>
      <div>
        <label for="vue-iso-email" class="text-vue-700 block text-sm font-medium">Email</label>
        <input
          type="email"
          id="vue-iso-email"
          v-model="form.email"
          class="border-vue-300 focus:border-vue-500 focus:ring-vue-200 mt-1 block w-full rounded-md shadow-xs focus:ring"
        />
      </div>
      <div>
        <label for="vue-iso-password" class="text-vue-700 block text-sm font-medium"
          >Password</label
        >
        <input
          type="password"
          id="vue-iso-password"
          v-model="form.password"
          class="border-vue-300 focus:border-vue-500 focus:ring-vue-200 mt-1 block w-full rounded-md shadow-xs focus:ring"
        />
      </div>
      <div class="flex items-center">
        <input
          type="checkbox"
          id="vue-iso-agreeTerms"
          v-model="form.agreeTerms"
          class="border-vue-300 text-vue-600 focus:ring-vue-500 h-4 w-4 rounded"
        />
        <label for="vue-iso-agreeTerms" class="text-vue-700 ml-2 block text-sm"
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
