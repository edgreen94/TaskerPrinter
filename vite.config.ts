import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/** Cloudflare Pages injects these during `pnpm run build` on CI */
function printItBuildBanner(): string {
  const sha = process.env.CF_PAGES_COMMIT_SHA
  const branch = process.env.CF_PAGES_BRANCH
  if (sha) {
    return `Print-It cf-pages ${sha.slice(0, 7)}${branch ? ` (${branch})` : ''}`
  }
  return 'Print-It local dev build'
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    {
      name: 'print-it-build-marker',
      transformIndexHtml(html) {
        return html.replace(
          '<head>',
          `<head>\n    <!-- ${printItBuildBanner()} -->`,
        )
      },
    },
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
