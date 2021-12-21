import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    React(),
    Inspect()
  ]
})
