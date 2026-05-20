// @ts-check
import { defineConfig } from 'astro/config';

// Sitio para GitHub Pages. Si renombras el repo, ajusta `base`.
// Si lo despliegas como kimwhk.github.io (root), pon base: '/'.
export default defineConfig({
  site: 'https://kimwhk.github.io',
  base: '/mylove/',
  trailingSlash: 'ignore',
  build: {
    assets: 'assets',
  },
});
