import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';
import { test } from './unitTests';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        istanbul({
            cypress: true,
            requireEnv: false,
        }),
    ],
    server: {
        host: true,
        port: 5173,
    },
    build: { minify: false, sourcemap: 'inline' },
    test,
});
