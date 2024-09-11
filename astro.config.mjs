import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    react(),
    tailwind(),
    vue(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2024-09-12T05:15:00Z"),
      serialize(item) {
        if (item.url === "https://astro-nanostores-demo.vercel.app/") {
          item.priority = 1.0;
        } else if (item.url.includes("/handeling-state/")) {
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],
  site: "https://astro-nanostores-demo.vercel.app/",
});
