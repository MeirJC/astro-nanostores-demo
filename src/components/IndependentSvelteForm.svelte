<script lang="ts">
  import { svelteFormState } from '@stores/isoFormStore';

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    $svelteFormState = {
      ...$svelteFormState,
      [name]: type === 'checkbox' ? checked : value,
    };
  }
</script>

<form class="space-y-4 bg-yellow-100 p-6 rounded-lg shadow-md text-slate-700">
  <h2 class="text-2xl font-bold text-yellow-800 mb-4">Independent Svelte Form</h2>
  <div>
    <label for="svelte-iso-firstName" class="block text-sm font-medium text-yellow-700"
      >First Name</label
    >
    <input
      type="text"
      id="svelte-iso-firstName"
      name="firstName"
      bind:value={$svelteFormState.firstName}
      on:input={handleChange}
      class="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
    />
  </div>
  <div>
    <label for="svelte-iso-lastName" class="block text-sm font-medium text-yellow-700"
      >Last Name</label
    >
    <input
      type="text"
      id="svelte-iso-lastName"
      name="lastName"
      bind:value={$svelteFormState.lastName}
      on:input={handleChange}
      class="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
    />
  </div>
  <div>
    <label for="svelte-iso-email" class="block text-sm font-medium text-yellow-700">Email</label>
    <input
      type="email"
      id="svelte-iso-email"
      name="email"
      bind:value={$svelteFormState.email}
      on:input={handleChange}
      class="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
    />
  </div>
  <div>
    <label for="svelte-iso-password" class="block text-sm font-medium text-yellow-700"
      >Password</label
    >
    <input
      type="password"
      id="svelte-iso-password"
      name="password"
      bind:value={$svelteFormState.password}
      on:input={handleChange}
      class="mt-1 block w-full rounded-md border-yellow-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
    />
  </div>
  <div class="flex items-center">
    <input
      type="checkbox"
      id="svelte-iso-agreeTerms"
      name="agreeTerms"
      bind:checked={$svelteFormState.agreeTerms}
      on:change={handleChange}
      class="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-yellow-300 rounded"
    />
    <label for="svelte-iso-agreeTerms" class="ml-2 block text-sm text-yellow-700"
      >I agree to the terms and conditions</label
    >
  </div>
</form>
