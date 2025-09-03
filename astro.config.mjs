import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://github.com/Aditykumar6565/Portfolio.git', // replace with your GitHub Pages URL
  vite: {
    build: {
      // any vite-specific tweaks if needed
    },
  },
});
