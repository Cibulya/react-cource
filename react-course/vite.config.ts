import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';
import { UserConfig } from 'vitest/config';

export const test: UserConfig['test'] = {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setupTests.ts'],
    threads: false,
    watch: true,
    coverage: {
        enabled: true,
        provider: 'c8',
        all: true,
    },
};

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
