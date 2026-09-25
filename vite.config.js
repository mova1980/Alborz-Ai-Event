import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

function localApi() {
  const run = async (req, res, next) => {
    if (!req.url?.startsWith('/api')) return next()
    try {
      const href = pathToFileURL(resolve('server/router.js')).href
      const { handleApi } = await import(href)
      await handleApi(req, res)
    } catch (e) {
      console.error(e)
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: 'server', message: e.message }))
    }
  }
  return {
    name: 'atw-local-api',
    configureServer(server) {
      server.middlewares.use(run)
    },
    configurePreviewServer(server) {
      server.middlewares.use(run)
    },
  }
}

export default defineConfig({
  plugins: [react(), localApi()],
  appType: 'spa',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true,
    cors: true,
    headers: {
      'Cache-Control': 'no-store',
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
    cors: true,
  },
})
