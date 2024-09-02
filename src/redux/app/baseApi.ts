import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { RootState } from '../store';
// import type { RootState } from '../store'

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://assignment-3-iota-bay.vercel.app',
    prepareHeaders: (headers, { }) => {
        const auth = localStorage?.getItem("auth");
        let token;

        if (auth) {
            const accessToken = JSON.parse(auth);
            token = accessToken.accessToken;
        }

        // const token = (getState() as RootState)?.auth?.accessToken;

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