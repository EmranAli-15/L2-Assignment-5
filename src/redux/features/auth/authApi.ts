import { baseApi } from "../../app/baseApi";

const cartApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: '/api/auth/register',
                body: data,
                method: 'POST'
            })
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/api/auth/login',
                body: data,
                method: 'POST'
            })
        })
    })
});

export const { useRegisterUserMutation, useLoginUserMutation } = cartApi;