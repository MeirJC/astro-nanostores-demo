import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    svelte(),
    react(),
    vue(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2026-04-08T00:00:00Z"),
      serialize(item) {
        if (item.url === "https://astro-nanostores-demo.vercel.app/") {
          item.priority = 1.0;
        } else if (item.url.includes("/handling-state/")) {
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],
  site: "https://astro-nanostores-demo.vercel.app/",
});
