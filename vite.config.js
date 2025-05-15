import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/js/app.js',  // your main JS entry
      ],
      refresh: true,
    }),
    vue(),
  ],
  resolve: {
    alias: {
      // Optional: resolve '@' to your resources/js folder (nice for imports)
      '@': '/resources/js',
    },
  },
});
