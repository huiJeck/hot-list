import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  base:'./',
  server: {
    open: true,
    proxy: {
      '/api/bing': {
        target: 'https://api.oioweb.cn',
        changeOrigin: true
      },
      '/api/ai': {
        target: 'https://api.oioweb.cn',
        changeOrigin: true
      },
      '/user': {
        target: 'http://127.0.0.1:3000/',
        changeOrigin: true
      },
      '/api/douban': {
        target: 'https://api.vvhan.com',
        changeOrigin: true
      },
      '/api/weather': {
        target: 'https://api.vvhan.com',
        changeOrigin: true
      },
      '/api/getIpInfo': {
        target: 'https://api.vvhan.com',
        changeOrigin: true
      },
      '/api/horoscope': {
        target: 'https://api.vvhan.com',
        changeOrigin: true
      },
      '/api/hotlist': {
        target: 'https://api.vvhan.com',
        changeOrigin: true,
      },
     
    }
  },
  preview: {
    port: 5000
  },
  plugins: [vue()]
})
