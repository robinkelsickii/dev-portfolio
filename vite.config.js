import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      external: [
        'fs',
        'path',
        'url',
        'util',
        'perf_hooks',
        'module',
        'crypto',
        'child_process',
        'http',
        'https',
        'tty',
        'net',
        'events',
        'stream',
        'os',
        'dns',
        'assert',
        'v8',
        'worker_threads',
        'zlib',
        'buffer',
        'tls',
        'querystring',
      ],
    },
  },
})
