// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const GITHUB_USERNAME = "SyafuChan3333";
const GITHUB_REPO = "gnsf-comics";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: `https://${GITHUB_USERNAME}.github.io`,
  base: `/${GITHUB_REPO}`,
  vite: {
    plugins: [vanillaExtractPlugin()]
  }
});