import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

const pluginEntryName = 'EditorPlayer'

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  const isProduction = mode === 'production'
  const outDir = isProduction ? './dist/' : './dist/'

  return defineConfig({
    plugins: [Vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    define: {
      'process.env': process.env
    },
    publicDir: 'src/assets/',
    build: {
      outDir,
      emptyOutDir: true,
      copyPublicDir: true,
      lib: {
        entry: 'src/index.ts',
        name: pluginEntryName,
        formats: ['iife'],
        fileName: () => 'Ink-mde.js'
      }
    }
  })
}
