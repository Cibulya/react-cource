import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ApiData, Character } from '../inerfaces/apiData';
import RequestLinks from './RequestLinks';

const cardsAPI = createApi({
    reducerPath: 'cardsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: RequestLinks.firstFetchCopy }),
    endpoints: (build) => ({
        filterFetch: build.query<ApiData, string>({
            query: (name: string) => ({
                url: `/character${name && `?name=${name}`}`,
            }),
        }),
        singleCardFetch: build.query<Character, string>({
            query: (id: string) => ({
                url: `/character/${id}`,
            }),
        }),
    }),
});

export default cardsAPI;
