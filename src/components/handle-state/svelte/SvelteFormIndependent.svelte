<script lang="ts">
  import { svelteFormState } from "@stores/handeling-state/independentFormStore";

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    $svelteFormState = {
      ...$svelteFormState,
      [name]: type === "checkbox" ? checked : value,
    };
  }

  function handleSubmit(event: Event) {
    event.preventDefault();
    console.log("Svelte Form Submitted:", $svelteFormState);
  }
</script>

<form on:submit={handleSubmit} class="p-4 bg-svelte-100 rounded-lg shadow-md text-black">
  <h2 class="mb-4 text-center text-2xl font-bold text-svelte-800">Independent Svelte Form</h2>
  <div class="space-y-4">
    <div>
      <label for="svelte-iso-firstName" class="block text-sm font-medium text-svelte-700"
        >First Name</label
      >
      <input
        type="text"
        id="svelte-iso-firstName"
        name="firstName"
        bind:value={$svelteFormState.firstName}
        on:input={handleChange}
        class="mt-1 block w-full rounded-md border-svelte-300 shadow-sm focus:border-svelte-500 focus:ring focus:ring-svelte-200"
      />
    </div>
    <div>
      <label for="svelte-iso-lastName" class="block text-sm font-medium text-svelte-700"
        >Last Name</label
      >
      <input
        type="text"
        id="svelte-iso-lastName"
        name="lastName"
        bind:value={$svelteFormState.lastName}
        on:input={handleChange}
        class="mt-1 block w-full rounded-md border-svelte-300 shadow-sm focus:border-svelte-500 focus:ring focus:ring-svelte-200"
      />
    </div>
    <div>
      <label for="svelte-iso-email" class="block text-sm font-medium text-svelte-700">Email</label>
      <input
        type="email"
        id="svelte-iso-email"
        name="email"
        bind:value={$svelteFormState.email}
        on:input={handleChange}
        class="mt-1 block w-full rounded-md border-svelte-300 shadow-sm focus:border-svelte-500 focus:ring focus:ring-svelte-200"
      />
    </div>
    <div>
      <label for="svelte-iso-password" class="block text-sm font-medium text-svelte-700"
        >Password</label
      >
      <input
        type="password"
        id="svelte-iso-password"
        name="password"
        bind:value={$svelteFormState.password}
        on:input={handleChange}
        class="mt-1 block w-full rounded-md border-svelte-300 shadow-sm focus:border-svelte-500 focus:ring focus:ring-svelte-200"
      />
    </div>
    <div class="flex items-center">
      <input
        type="checkbox"
        id="svelte-iso-agreeTerms"
        name="agreeTerms"
        bind:checked={$svelteFormState.agreeTerms}
        on:change={handleChange}
        class="h-4 w-4 rounded border-svelte-300 text-svelte-600 focus:ring-svelte-500"
      />
      <label for="svelte-iso-agreeTerms" class="ml-2 block text-sm text-svelte-700"
        >I agree to the terms and conditions</label
      >
    </div>
  </div>
  <div class="mt-6">
    <button
      type="submit"
      class="w-full px-4 py-2 bg-svelte-500 text-white rounded hover:bg-svelte-600 transition-colors"
    >
      Submit
    </button>
  </div>
</form>
