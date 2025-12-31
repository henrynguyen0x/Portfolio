// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: set base to your repo path so built assets point to
  // /Portfolio/hieu-landing/ instead of absolute "/"
  // base: '/Portfolio',
  site: 'https://vhieunguyen.com/',
  vite: {
    plugins: [tailwindcss()]
  }
});
