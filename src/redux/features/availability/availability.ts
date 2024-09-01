import { baseApi } from "../../app/baseApi";

export const availabilityApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        availability: builder.query({
            query: (date) => ({
                url: `/api/check-availability?date=${date}`
            }),
            providesTags: ["facilities"]
        })
    })
});

export const {
    useAvailabilityQuery
} = availabilityApi;