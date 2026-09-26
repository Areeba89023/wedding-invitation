import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['wedding-invitation-app-7a23b17ca576.herokuapp.com'],
  },
})
