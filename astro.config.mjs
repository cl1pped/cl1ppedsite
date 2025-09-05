import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  
  site: 'https://yourdomain.com',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});