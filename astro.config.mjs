// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://SyafuChan3333.github.io",
  base: "/gnsf-comics",
  vite: {
    plugins: [vanillaExtractPlugin()]
  }
});