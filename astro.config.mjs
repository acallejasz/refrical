import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://acallejasz.github.io',
  base: '/refrical',
  integrations: [tailwind()]
});