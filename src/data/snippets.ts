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
    "import { atom } from 'nanostores'\n\nexport const $count = atom(0)\n\nexport function increment() {\n\t$count.set($count.get() + 1)\n}\n\nexport function decrement() {\n\t$count.set($count.get() - 1)\n}",
  astro:
    "---\nimport { atom, map } from 'nanostores'\n\nconst $count = atom(0)\nconst $user = map({ name: 'Astro Fan', loggedIn: false })\n---\n\n<button id=\"counter\">Count: 0</button>\n<div id=\"user\">Welcome, guest!</div>\n\n<script>\n\timport { $count, $user } from './stores.js'\n\n\tconst counterBtn = document.getElementById('counter')\n\tconst userDiv = document.getElementById('user')\n\n\t$count.subscribe(value => {\n\t\tcounterBtn.textContent = `Count: ${value}`\n\t})\n</script>",
  react:
    "import { useStore } from '@nanostores/react'\nimport { $count } from './stores'\n\nexport function Counter() {\n\tconst count = useStore($count)\n\treturn <button onClick={() => $count.set(count + 1)}>Count: {count}</button>\n}",
  svelte:
    "<script>\nimport { $count as count } from './stores'\n</script>\n\n<button onclick={() => count.set(count.get() + 1)}>\n\tCount: {$count}\n</button>",
  vue: "<script setup>\nimport { useStore } from '@nanostores/vue'\nimport { $count } from './stores'\n\nconst count = useStore($count)\n</script>\n\n<button @click=\"$count.set(count + 1)\">\n\tCount: {{ count }}\n</button>",
};

export const independentCounterExamples: Snippet = {
  store:
    "import { atom } from 'nanostores'\n\nexport const $astroCount = atom(0)\nexport const $svelteCount = atom(0)\nexport const $reactCount = atom(0)\nexport const $vueCount = atom(0)\n\nexport function increment(store) {\n\tstore.set(store.get() + 1)\n}\n\nexport function decrement(store) {\n\tif (store.get() > 0) store.set(store.get() - 1)\n}",

  astro:
    "---\nimport { $astroCount, increment, decrement } from '../stores/counterStore'\n---\n\n<div>\n\t<button id=\"dec\">-</button>\n\t<span>{$astroCount.get()}</span>\n\t<button id=\"inc\">+</button>\n</div>\n\n<script>\n\timport { $astroCount, increment, decrement } from '../stores/counterStore'\n\n\tdocument.getElementById('dec')?.addEventListener('click', () => decrement($astroCount))\n\tdocument.getElementById('inc')?.addEventListener('click', () => increment($astroCount))\n\n\t$astroCount.subscribe(value => {\n\t\tdocument.querySelector('span').textContent = value\n\t})\n</script>",

  svelte:
    "<script>\nimport { $svelteCount, increment, decrement } from '../stores/counterStore'\n</script>\n\n<div>\n\t<button onclick={() => decrement($svelteCount)}>-</button>\n\t<span>{$svelteCount}</span>\n\t<button onclick={() => increment($svelteCount)}>+</button>\n</div>",

  react:
    "import { useStore } from '@nanostores/react'\nimport { $reactCount, increment, decrement } from '../stores/counterStore'\n\nexport function ReactCounter() {\n\tconst count = useStore($reactCount)\n\n\treturn (\n\t\t<div>\n\t\t\t<button onClick={() => decrement($reactCount)}>-</button>\n\t\t\t<span>{count}</span>\n\t\t\t<button onClick={() => increment($reactCount)}>+</button>\n\t\t</div>\n\t)\n}",

  vue: "<template>\n\t<div>\n\t\t<button @click=\"decrement($vueCount)\">-</button>\n\t\t<span>{{ count }}</span>\n\t\t<button @click=\"increment($vueCount)\">+</button>\n\t</div>\n</template>\n\n<script setup>\nimport { useStore } from '@nanostores/vue'\nimport { $vueCount, increment, decrement } from '../stores/counterStore'\n\nconst count = useStore($vueCount)\n</script>",
};

export const independentFormExamples: Snippet = {
  store:
    "import { map } from 'nanostores'\n\nexport const $astroForm = map({ name: '', email: '' })\nexport const $svelteForm = map({ name: '', email: '' })\nexport const $reactForm = map({ name: '', email: '' })\nexport const $vueForm = map({ name: '', email: '' })",

  astro:
    '---\nimport { $astroForm } from \'../stores/formStore\'\n---\n\n<form id="astroForm">\n\t<input type="text" id="name" value={$astroForm.get().name} />\n\t<input type="email" id="email" value={$astroForm.get().email} />\n</form>\n\n<script>\n\timport { $astroForm } from \'../stores/formStore\'\n\n\tconst form = document.getElementById(\'astroForm\')\n\tform?.addEventListener(\'input\', (e) => {\n\t\tconst target = e.target as HTMLInputElement\n\t\t$astroForm.setKey(target.id, target.value)\n\t})\n</script>',

  svelte:
    '<script>\nimport { $svelteForm } from \'../stores/formStore\'\n\nfunction handleInput(event) {\n\tconst { name, value } = event.target\n\t$svelteForm.setKey(name, value)\n}\n</script>\n\n<form>\n\t<input type="text" name="name" value={$svelteForm.name} oninput={handleInput} />\n\t<input type="email" name="email" value={$svelteForm.email} oninput={handleInput} />\n</form>',

  react:
    "import { useStore } from '@nanostores/react'\nimport { $reactForm } from '../stores/formStore'\n\nexport function ReactForm() {\n\tconst form = useStore($reactForm)\n\n\treturn (\n\t\t<form>\n\t\t\t<input\n\t\t\t\ttype=\"text\"\n\t\t\t\tvalue={form.name}\n\t\t\t\tonChange={(e) => $reactForm.setKey('name', e.target.value)}\n\t\t\t/>\n\t\t\t<input\n\t\t\t\ttype=\"email\"\n\t\t\t\tvalue={form.email}\n\t\t\t\tonChange={(e) => $reactForm.setKey('email', e.target.value)}\n\t\t\t/>\n\t\t</form>\n\t)\n}",

  vue: '<template>\n\t<form>\n\t\t<input\n\t\t\ttype="text"\n\t\t\t:value="form.name"\n\t\t\t@input="(e) => $vueForm.setKey(\'name\', e.target.value)"\n\t\t/>\n\t\t<input\n\t\t\ttype="email"\n\t\t\t:value="form.email"\n\t\t\t@input="(e) => $vueForm.setKey(\'email\', e.target.value)"\n\t\t/>\n\t</form>\n</template>\n\n<script setup>\nimport { useStore } from \'@nanostores/vue\'\nimport { $vueForm } from \'../stores/formStore\'\n\nconst form = useStore($vueForm)\n</script>',
};

export const sharedCounterExamples: Snippet = {
  store:
    "import { atom } from 'nanostores'\n\nexport const $count = atom(0)\n\nexport function increment() {\n\t$count.set($count.get() + 1)\n}\n\nexport function decrement() {\n\tif ($count.get() > 0) $count.set($count.get() - 1)\n}",

  astro:
    "---\nimport { $count } from '../stores/sharedCounterStore'\n---\n\n<div>\n\t<button id=\"dec\">-</button>\n\t<span>{$count.get()}</span>\n\t<button id=\"inc\">+</button>\n</div>\n\n<script>\n\timport { $count, increment, decrement } from '../stores/sharedCounterStore'\n\n\tdocument.getElementById('dec')?.addEventListener('click', decrement)\n\tdocument.getElementById('inc')?.addEventListener('click', increment)\n\n\t$count.subscribe(value => {\n\t\tdocument.querySelector('span').textContent = value\n\t})\n</script>",

  svelte:
    "<script>\nimport { $count, increment, decrement } from '../stores/sharedCounterStore'\n</script>\n\n<div>\n\t<button onclick={decrement}>-</button>\n\t<span>{$count}</span>\n\t<button onclick={increment}>+</button>\n</div>",

  react:
    "import { useStore } from '@nanostores/react'\nimport { $count, increment, decrement } from '../stores/sharedCounterStore'\n\nexport function ReactCounter() {\n\tconst count = useStore($count)\n\n\treturn (\n\t\t<div>\n\t\t\t<button onClick={decrement}>-</button>\n\t\t\t<span>{count}</span>\n\t\t\t<button onClick={increment}>+</button>\n\t\t</div>\n\t)\n}",

  vue: "<template>\n\t<div>\n\t\t<button @click=\"decrement\">-</button>\n\t\t<span>{{ count }}</span>\n\t\t<button @click=\"increment\">+</button>\n\t</div>\n</template>\n\n<script setup>\nimport { useStore } from '@nanostores/vue'\nimport { $count, increment, decrement } from '../stores/sharedCounterStore'\n\nconst count = useStore($count)\n</script>",
};

export const sharedFormExamples: Snippet = {
  store:
    "import { map } from 'nanostores'\n\nexport const $formData = map({ name: '', email: '' })",

  astro:
    '---\nimport { $formData } from \'../stores/sharedFormStore\'\n---\n\n<form id="sharedForm">\n\t<input type="text" id="name" value={$formData.get().name} />\n\t<input type="email" id="email" value={$formData.get().email} />\n</form>\n\n<script>\n\timport { $formData } from \'../stores/sharedFormStore\'\n\n\tconst form = document.getElementById(\'sharedForm\')\n\tform?.addEventListener(\'input\', (e) => {\n\t\tconst target = e.target as HTMLInputElement\n\t\t$formData.setKey(target.id, target.value)\n\t})\n</script>',

  svelte:
    '<script>\nimport { $formData } from \'../stores/sharedFormStore\'\n\nfunction handleInput(event) {\n\tconst { name, value } = event.target\n\t$formData.setKey(name, value)\n}\n</script>\n\n<form>\n\t<input type="text" name="name" value={$formData.name} oninput={handleInput} />\n\t<input type="email" name="email" value={$formData.email} oninput={handleInput} />\n</form>',

  react:
    "import { useStore } from '@nanostores/react'\nimport { $formData } from '../stores/sharedFormStore'\n\nexport function ReactForm() {\n\tconst formData = useStore($formData)\n\n\treturn (\n\t\t<form>\n\t\t\t<input\n\t\t\t\ttype=\"text\"\n\t\t\t\tvalue={formData.name}\n\t\t\t\tonChange={(e) => $formData.setKey('name', e.target.value)}\n\t\t\t/>\n\t\t\t<input\n\t\t\t\ttype=\"email\"\n\t\t\t\tvalue={formData.email}\n\t\t\t\tonChange={(e) => $formData.setKey('email', e.target.value)}\n\t\t\t/>\n\t\t</form>\n\t)\n}",

  vue: '<template>\n\t<form>\n\t\t<input\n\t\t\ttype="text"\n\t\t\t:value="formData.name"\n\t\t\t@input="(e) => $formData.setKey(\'name\', e.target.value)"\n\t\t/>\n\t\t<input\n\t\t\ttype="email"\n\t\t\t:value="formData.email"\n\t\t\t@input="(e) => $formData.setKey(\'email\', e.target.value)"\n\t\t/>\n\t</form>\n</template>\n\n<script setup>\nimport { useStore } from \'@nanostores/vue\'\nimport { $formData } from \'../stores/sharedFormStore\'\n\nconst formData = useStore($formData)\n</script>',
};

export const persistentStateExamples = {
  store:
    "import { persistentAtom } from '@nanostores/persistent'\n\nexport const $persistentCounter = persistentAtom('persistentCounter', 0, {\n\tencode: JSON.stringify,\n\tdecode: JSON.parse\n})\n\nexport function incrementPersistent() {\n\t$persistentCounter.set($persistentCounter.get() + 1)\n}\n\nexport function decrementPersistent() {\n\t$persistentCounter.set($persistentCounter.get() - 1)\n}\n\nexport function resetPersistent() {\n\t$persistentCounter.set(0)\n}",

  astro:
    "---\nimport { $persistentCounter } from '../stores/persistentCounterStore'\n---\n\n<div>\n\t<button id=\"dec\">-</button>\n\t<span>{$persistentCounter.get()}</span>\n\t<button id=\"inc\">+</button>\n\t<button id=\"reset\">Reset</button>\n</div>\n\n<script>\n\timport { $persistentCounter, incrementPersistent, decrementPersistent, resetPersistent } from '../stores/persistentCounterStore'\n\n\tdocument.getElementById('dec')?.addEventListener('click', decrementPersistent)\n\tdocument.getElementById('inc')?.addEventListener('click', incrementPersistent)\n\tdocument.getElementById('reset')?.addEventListener('click', resetPersistent)\n\n\t$persistentCounter.subscribe(value => {\n\t\tdocument.querySelector('span').textContent = value\n\t})\n</script>",

  svelte:
    "<script>\nimport { $persistentCounter, incrementPersistent, decrementPersistent, resetPersistent } from '../stores/persistentCounterStore'\n</script>\n\n<div>\n\t<button onclick={decrementPersistent}>-</button>\n\t<span>{$persistentCounter}</span>\n\t<button onclick={incrementPersistent}>+</button>\n\t<button onclick={resetPersistent}>Reset</button>\n</div>",

  react:
    "import { useStore } from '@nanostores/react'\nimport { $persistentCounter, incrementPersistent, decrementPersistent, resetPersistent } from '../stores/persistentCounterStore'\n\nexport function PersistentCounter() {\n\tconst count = useStore($persistentCounter)\n\n\treturn (\n\t\t<div>\n\t\t\t<button onClick={decrementPersistent}>-</button>\n\t\t\t<span>{count}</span>\n\t\t\t<button onClick={incrementPersistent}>+</button>\n\t\t\t<button onClick={resetPersistent}>Reset</button>\n\t\t</div>\n\t)\n}",

  vue: '<template>\n\t<div>\n\t\t<button @click="decrementPersistent">-</button>\n\t\t<span>{{ count }}</span>\n\t\t<button @click="incrementPersistent">+</button>\n\t\t<button @click="resetPersistent">Reset</button>\n\t</div>\n</template>\n\n<script setup>\nimport { useStore } from \'@nanostores/vue\'\nimport { $persistentCounter, incrementPersistent, decrementPersistent, resetPersistent } from \'../stores/persistentCounterStore\'\n\nconst count = useStore($persistentCounter)\n</script>',
};
