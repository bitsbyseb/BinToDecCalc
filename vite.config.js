import { defineConfig } from 'vite'

export default defineConfig({
  base:'/BinToDecCalc/',
  build:{
    cssMinify:'esbuild',
    minify:'esbuild',
  },
  server:{
    port:5050
  },
  preview:{
    port:8080
  }
});