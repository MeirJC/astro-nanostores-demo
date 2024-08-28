export interface Snippet {
  [key: string]: string;
}

export const snippets: Snippet = {
  basicNanostoresUsage: `
---
import { atom, map } from 'nanostores'

const count = atom(0)
const user = map({ name: 'Astro Fan', loggedIn: false })
---

<button id="counter">Count: 0</button>
<div id="user">Welcome, guest!</div>

<script>
  import { count, user } from './stores.js'

  const counterBtn = document.getElementById('counter')
  const userDiv = document.getElementById('user')

  count.subscribe(value => {
    counterBtn.textContent = \`Count: \${value}\`
  })
</script>
`,
  react: `
import { useStore } from '@nanostores/react'
import { count } from './stores'

export function Counter() {
  const $count = useStore(count)
  return <button onClick={() => count.set($count + 1)}>Count: {$count}</button>
}
`,
  svelte: `
<script>
  import { count } from './stores'
</script>

<button on:click={() => $count++}>
  Count: {$count}
</button>
`,
  vue: `
<script setup>
import { useStore } from '@nanostores/vue'
import { count } from './stores'

const $count = useStore(count)
</script>

<button on:click={() => $count++}>
  Count: {$count}
</button>
`,
};
