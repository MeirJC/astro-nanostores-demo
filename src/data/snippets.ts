export interface Snippet {
  [key: string]: string;
}

export const installSnippets: Snippet = {
  npm: "npm install nanostores\nnpm install @nanostores/react  # For React\nnpm install @nanostores/vue    # For Vue",
  pnpm: "pnpm add nanostores\npnpm add @nanostores/react  # For React\npnpm add @nanostores/vue    # For Vue",
  yarn: "yarn add nanostores\nyarn add @nanostores/react  # For React\nyarn add @nanostores/vue    # For Vue",
};

export const basicUsageSnippets: Snippet = {
  typescript:
    "import { atom } from 'nanostores'\n\nexport const count = atom(0)\n\nexport function increment() {\n\tcount.set(count.get() + 1)\n}\n\nexport function decrement() {\n\tcount.set(count.get() - 1)\n}",
  astro:
    "---\nimport { atom, map } from 'nanostores'\n\nconst count = atom(0)\nconst user = map({ name: 'Astro Fan', loggedIn: false })\n---\n\n<button id=\"counter\">Count: 0</button>\n<div id=\"user\">Welcome, guest!</div>\n\n<script>\n\timport { count, user } from './stores.js'\n\n\tconst counterBtn = document.getElementById('counter')\n\tconst userDiv = document.getElementById('user')\n\n\tcount.subscribe(value => {\n\t\tcounterBtn.textContent = `Count: ${value}`\n\t})\n</script>",
  react:
    "import { useStore } from '@nanostores/react'\nimport { count } from './stores'\n\nexport function Counter() {\n\tconst $count = useStore(count)\n\treturn <button onClick={() => count.set($count + 1)}>Count: {$count}</button>\n}",
  svelte:
    "<script>\nimport { count } from './stores'\n</script>\n\n<button on:click={() => $count++}>\n\tCount: {$count}\n</button>",
  vue: "<script setup>\nimport { useStore } from '@nanostores/vue'\nimport { count } from './stores'\n\nconst $count = useStore(count)\n</script>\n\n<button @click=\"$count++\">\n\tCount: {{ $count }}\n</button>",
};

export const independentCounterExamples: Snippet = {
  store:
    "import { atom } from 'nanostores'\n\nexport const astroCount = atom(0)\nexport const svelteCount = atom(0)\nexport const reactCount = atom(0)\nexport const vueCount = atom(0)\n\nexport function increment(store) {\n\tstore.set(store.get() + 1)\n}\n\nexport function decrement(store) {\n\tstore.set(store.get() - 1)\n}",

  astro:
    "---\nimport { astroCount, increment, decrement } from '../stores/counterStore'\n---\n\n<div>\n\t<button onclick={decrement(astroCount)}>-</button>\n\t<span>{astroCount.get()}</span>\n\t<button onclick={increment(astroCount)}>+</button>\n</div>\n\n<script>\n\timport { astroCount } from '../stores/counterStore'\n\t\n\tastroCount.subscribe(value => {\n\t\tdocument.querySelector('span').textContent = value\n\t})\n</script>",

  svelte:
    "<script>\nimport { svelteCount, increment, decrement } from '../stores/counterStore'\n</script>\n\n<div>\n\t<button on:click={() => decrement(svelteCount)}>-</button>\n\t<span>{$svelteCount}</span>\n\t<button on:click={() => increment(svelteCount)}>+</button>\n</div>",

  react:
    "import { useStore } from '@nanostores/react'\nimport { reactCount, increment, decrement } from '../stores/counterStore'\n\nexport function ReactCounter() {\n\tconst count = useStore(reactCount)\n\t\n\treturn (\n\t\t<div>\n\t\t\t<button onClick={() => decrement(reactCount)}>-</button>\n\t\t\t<span>{count}</span>\n\t\t\t<button onClick={() => increment(reactCount)}>+</button>\n\t\t</div>\n\t)\n}",

  vue: "<template>\n\t<div>\n\t\t<button @click=\"decrement(vueCount)\">-</button>\n\t\t<span>{{ count }}</span>\n\t\t<button @click=\"increment(vueCount)\">+</button>\n\t</div>\n</template>\n\n<script setup>\nimport { useStore } from '@nanostores/vue'\nimport { vueCount, increment, decrement } from '../stores/counterStore'\n\nconst count = useStore(vueCount)\n</script>",
};

export const independentFormExamples: Snippet = {
  store:
    "import { map } from 'nanostores'\n\nexport const astroForm = map({ name: '', email: '' })\nexport const svelteForm = map({ name: '', email: '' })\nexport const reactForm = map({ name: '', email: '' })\nexport const vueForm = map({ name: '', email: '' })\n\nexport function updateForm(store, field, value) {\n\tstore.setKey(field, value)\n}",

  astro:
    "---\nimport { astroForm, updateForm } from '../stores/formStore'\n---\n\n<form>\n\t<input \n\t\ttype=\"text\" \n\t\tvalue={astroForm.get().name} \n\t\tonchange={(e) => updateForm(astroForm, 'name', e.target.value)}\n\t/>\n\t<input \n\t\ttype=\"email\" \n\t\tvalue={astroForm.get().email} \n\t\tonchange={(e) => updateForm(astroForm, 'email', e.target.value)}\n\t/>\n</form>\n\n<script>\n\timport { astroForm } from '../stores/formStore'\n\t\n\tastroForm.subscribe(value => {\n\t\tconsole.log('Form updated:', value)\n\t})\n</script>",

  svelte:
    "<script>\nimport { svelteForm, updateForm } from '../stores/formStore'\n</script>\n\n<form>\n\t<input \n\t\ttype=\"text\" \n\t\tbind:value={$svelteForm.name} \n\t\ton:input={(e) => updateForm(svelteForm, 'name', e.target.value)}\n\t/>\n\t<input \n\t\ttype=\"email\" \n\t\tbind:value={$svelteForm.email} \n\t\ton:input={(e) => updateForm(svelteForm, 'email', e.target.value)}\n\t/>\n</form>",

  react:
    "import { useStore } from '@nanostores/react'\nimport { reactForm, updateForm } from '../stores/formStore'\n\nexport function ReactForm() {\n\tconst form = useStore(reactForm)\n\t\n\treturn (\n\t\t<form>\n\t\t\t<input \n\t\t\t\ttype=\"text\" \n\t\t\t\tvalue={form.name} \n\t\t\t\tonChange={(e) => updateForm(reactForm, 'name', e.target.value)}\n\t\t\t/>\n\t\t\t<input \n\t\t\t\ttype=\"email\" \n\t\t\t\tvalue={form.email} \n\t\t\t\tonChange={(e) => updateForm(reactForm, 'email', e.target.value)}\n\t\t\t/>\n\t\t</form>\n\t)\n}",

  vue: '<template>\n\t<form>\n\t\t<input \n\t\t\ttype="text" \n\t\t\t:value="form.name" \n\t\t\t@input="(e) => updateForm(vueForm, \'name\', e.target.value)"\n\t\t/>\n\t\t<input \n\t\t\ttype="email" \n\t\t\t:value="form.email" \n\t\t\t@input="(e) => updateForm(vueForm, \'email\', e.target.value)"\n\t\t/>\n\t</form>\n</template>\n\n<script setup>\nimport { useStore } from \'@nanostores/vue\'\nimport { vueForm, updateForm } from \'../stores/formStore\'\n\nconst form = useStore(vueForm)\n</script>',
};

export const sharedCounterExamples: Snippet = {
  store:
    "import { atom } from 'nanostores'\n\nexport const count = atom(0)\n\nexport function increment() {\n\tcount.set(count.get() + 1)\n}\n\nexport function decrement() {\n\tcount.set(count.get() - 1)\n}",

  astro:
    "---\nimport { count, increment, decrement } from '../stores/sharedCounterStore'\n---\n\n<div>\n\t<button onclick={decrement}>-</button>\n\t<span>{count.get()}</span>\n\t<button onclick={increment}>+</button>\n</div>\n\n<script>\n\timport { count } from '../stores/sharedCounterStore'\n\t\n\tcount.subscribe(value => {\n\t\tdocument.querySelector('span').textContent = value\n\t})\n</script>",

  svelte:
    "<script>\nimport { count, increment, decrement } from '../stores/sharedCounterStore'\n</script>\n\n<div>\n\t<button on:click={decrement}>-</button>\n\t<span>{$count}</span>\n\t<button on:click={increment}>+</button>\n</div>",

  react:
    "import { useStore } from '@nanostores/react'\nimport { count, increment, decrement } from '../stores/sharedCounterStore'\n\nexport function ReactCounter() {\n\tconst $count = useStore(count)\n\t\n\treturn (\n\t\t<div>\n\t\t\t<button onClick={decrement}>-</button>\n\t\t\t<span>{$count}</span>\n\t\t\t<button onClick={increment}>+</button>\n\t\t</div>\n\t)\n}",

  vue: "<template>\n\t<div>\n\t\t<button @click=\"decrement\">-</button>\n\t\t<span>{{ count }}</span>\n\t\t<button @click=\"increment\">+</button>\n\t</div>\n</template>\n\n<script setup>\nimport { useStore } from '@nanostores/vue'\nimport { count, increment, decrement } from '../stores/sharedCounterStore'\n\nconst count = useStore(count)\n</script>",
};

export const sharedFormExamples: Snippet = {
  store:
    "import { map } from 'nanostores'\n\nexport const formData = map({ name: '', email: '' })\n\nexport function updateForm(field, value) {\n\tformData.setKey(field, value)\n}",

  astro:
    "---\nimport { formData, updateForm } from '../stores/sharedFormStore'\n---\n\n<form>\n\t<input \n\t\ttype=\"text\" \n\t\tvalue={formData.get().name} \n\t\tonchange={(e) => updateForm('name', e.target.value)}\n\t/>\n\t<input \n\t\ttype=\"email\" \n\t\tvalue={formData.get().email} \n\t\tonchange={(e) => updateForm('email', e.target.value)}\n\t/>\n</form>\n\n<script>\n\timport { formData } from '../stores/sharedFormStore'\n\t\n\tformData.subscribe(value => {\n\t\tconsole.log('Form updated:', value)\n\t})\n</script>",

  svelte:
    "<script>\nimport { formData, updateForm } from '../stores/sharedFormStore'\n</script>\n\n<form>\n\t<input \n\t\ttype=\"text\" \n\t\tbind:value={$formData.name} \n\t\ton:input={(e) => updateForm('name', e.target.value)}\n\t/>\n\t<input \n\t\ttype=\"email\" \n\t\tbind:value={$formData.email} \n\t\ton:input={(e) => updateForm('email', e.target.value)}\n\t/>\n</form>",

  react:
    "import { useStore } from '@nanostores/react'\nimport { formData, updateForm } from '../stores/sharedFormStore'\n\nexport function ReactForm() {\n\tconst $formData = useStore(formData)\n\t\n\treturn (\n\t\t<form>\n\t\t\t<input \n\t\t\t\ttype=\"text\" \n\t\t\t\tvalue={$formData.name} \n\t\t\t\tonChange={(e) => updateForm('name', e.target.value)}\n\t\t\t/>\n\t\t\t<input \n\t\t\t\ttype=\"email\" \n\t\t\t\tvalue={$formData.email} \n\t\t\t\tonChange={(e) => updateForm('email', e.target.value)}\n\t\t\t/>\n\t\t</form>\n\t)\n}",

  vue: '<template>\n\t<form>\n\t\t<input \n\t\t\ttype="text" \n\t\t\t:value="formData.name" \n\t\t\t@input="(e) => updateForm(\'name\', e.target.value)"\n\t\t/>\n\t\t<input \n\t\t\ttype="email" \n\t\t\t:value="formData.email" \n\t\t\t@input="(e) => updateForm(\'email\', e.target.value)"\n\t\t/>\n\t</form>\n</template>\n\n<script setup>\nimport { useStore } from \'@nanostores/vue\'\nimport { formData, updateForm } from \'../stores/sharedFormStore\'\n\nconst formData = useStore(formData)\n</script>',
};
