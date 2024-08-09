<script lang="ts">
  import { formState } from '@stores/formStore';

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    $formState = {
      ...$formState,
      [name]: type === 'checkbox' ? checked : value,
    };
  }
</script>

<form class="space-y-4 bg-green-100 p-6 rounded-lg shadow-md text-slate-700">
  <h2 class="text-2xl font-bold text-green-800 mb-4">Svelte Form (Shared State)</h2>
  <div>
    <label for="svelte-firstName" class="block text-sm font-medium text-green-700">First Name</label
    >
    <input
      type="text"
      id="svelte-firstName"
      name="firstName"
      bind:value={$formState.firstName}
      on:input={handleChange}
      class="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
    />
  </div>
  <div>
    <label for="svelte-lastName" class="block text-sm font-medium text-green-700">Last Name</label>
    <input
      type="text"
      id="svelte-lastName"
      name="lastName"
      bind:value={$formState.lastName}
      on:input={handleChange}
      class="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
    />
  </div>
  <div>
    <label for="svelte-email" class="block text-sm font-medium text-green-700">Email</label>
    <input
      type="email"
      id="svelte-email"
      name="email"
      bind:value={$formState.email}
      on:input={handleChange}
      class="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
    />
  </div>
  <div>
    <label for="svelte-password" class="block text-sm font-medium text-green-700">Password</label>
    <input
      type="password"
      id="svelte-password"
      name="password"
      bind:value={$formState.password}
      on:input={handleChange}
      class="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
    />
  </div>
  <div class="flex items-center">
    <input
      type="checkbox"
      id="svelte-agreeTerms"
      name="agreeTerms"
      bind:checked={$formState.agreeTerms}
      on:change={handleChange}
      class="h-4 w-4 text-green-600 focus:ring-green-500 border-green-300 rounded"
    />
    <label for="svelte-agreeTerms" class="ml-2 block text-sm text-green-700"
      >I agree to the terms and conditions</label
    >
  </div>
</form>
