/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import matchers from '@testing-library/jest-dom/matchers';
import { fetch } from 'cross-fetch';
import { expect } from 'vitest';
import server from './mocks/server';

global.fetch = fetch;
beforeAll(() => {
    server.listen({
        onUnhandledRequest: 'error',
    });
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

expect.extend(matchers);
