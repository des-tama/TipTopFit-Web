import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Alamat situs. Dipakai untuk canonical URL, sitemap, dan Open Graph.
export default defineConfig({
  site: 'https://playtiptopfit.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // hreflang: setiap halaman Inggris punya pasangan Indonesia di /id/
      i18n: { defaultLocale: 'en', locales: { en: 'en', id: 'id' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
