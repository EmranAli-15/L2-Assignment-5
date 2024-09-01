import { baseApi } from "../../app/baseApi";

export const bookingsApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        createBooking: builder.mutation({
            query: (data) => ({
                url: '/api/bookings',
                method: 'POST',
                body: data
            })
        })
    })
});

export const {
    useCreateBookingMutation
} = bookingsApi;