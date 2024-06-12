import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['react-leaflet'], // Asegura que react-leaflet esté incluido en las dependencias optimizadas
  },
  plugins: [react()],
})
