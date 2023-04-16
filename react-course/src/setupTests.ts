// eslint-disable-next-line import/no-extraneous-dependencies
import matchers from '@testing-library/jest-dom/matchers';
// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from 'vitest';
import server from './mocks/server';

beforeAll(() => {
    server.listen({
        onUnhandledRequest: 'error',
    });
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

expect.extend(matchers);
