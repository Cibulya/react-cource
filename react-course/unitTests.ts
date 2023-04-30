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
