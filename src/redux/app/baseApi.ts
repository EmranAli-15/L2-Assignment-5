import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import type { RootState } from '../store'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    prepareHeaders: (headers, { }) => {
        const auth = localStorage?.getItem("auth");
        let token;

        if (auth) {
            const accessToken = JSON.parse(auth);
            token = accessToken.accessToken;
        }

        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        };

        return headers;
    },
})

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: async (args: any, api: BaseQueryApi, extraOptions: Record<string, unknown>) => {
        let result = await baseQuery(args, api, extraOptions);

        return result
    },
    tagTypes: ["facilities"],
    endpoints: () => ({}),
});

export const { }: any = baseApi