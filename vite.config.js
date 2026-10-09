import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function githubPagesRoutesPlugin() {
  return {
    name: 'github-pages-routes',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const indexHtmlPath = path.join(distDir, 'index.html')
      if (fs.existsSync(indexHtmlPath)) {
        const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8')

        // 1. Dedicated bride's engagement directory
        const engDir = path.join(distDir, 'engagement')
        if (!fs.existsSync(engDir)) fs.mkdirSync(engDir, { recursive: true })
        fs.writeFileSync(path.join(engDir, 'index.html'), indexHtml)

        // 2. Dedicated groom's wedding directory
        const wedDir = path.join(distDir, 'wedding')
        if (!fs.existsSync(wedDir)) fs.mkdirSync(wedDir, { recursive: true })
        fs.writeFileSync(path.join(wedDir, 'index.html'), indexHtml)

        // 3. Fallback 404 for GitHub Pages direct navigation
        fs.writeFileSync(path.join(distDir, '404.html'), indexHtml)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/rocilin-jobin-wedding/',
  plugins: [react(), githubPagesRoutesPlugin()],
})

