import { fetch, Headers, Request, Response } from 'cross-fetch';
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

const server = setupServer(...handlers);

export default server;
