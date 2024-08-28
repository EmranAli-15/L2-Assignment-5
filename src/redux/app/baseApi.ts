import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:5000' })

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: async (args: any, api: BaseQueryApi, extraOptions: Record<string, unknown>) => {
        let result = await baseQuery(args, api, extraOptions);

        console.log(result);


        return result
    },
    tagTypes: [],
    endpoints: () => ({}),
});

export const { }: any = baseApi