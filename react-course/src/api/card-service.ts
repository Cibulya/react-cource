import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ApiData } from '../inerfaces/apiData';
import RequestLinks from './urlsToRequest';

const cardsAPI = createApi({
    reducerPath: 'cardsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: RequestLinks.firstFetchCopy }),
    tagTypes: ['results', 'error'],
    endpoints: (build) => ({
        filterFetch: build.query<ApiData, string>({
            query: (name: string) => ({
                url: `/character`,
                name: `${name && `?name=${name}`}`,
            }),
        }),
        singleCardFetch: build.query({
            query: (id: string) => ({
                url: `/character/${id}`,
            }),
        }),
    }),
});

export default cardsAPI;
