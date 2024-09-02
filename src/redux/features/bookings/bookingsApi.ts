import { baseApi } from "../../app/baseApi";

export const bookingsApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        createBooking: builder.mutation({
            query: (data) => ({
                url: '/api/bookings',
                method: 'POST',
                body: data
            })
        }),
        getUserBookings: builder.query({
            query: () => ({
                url: '/api/bookings/user',
            })
        }),
        allBookings: builder.query({
            query: () => ({
                url: '/api/bookings',
            })
        })
    })
});

export const {
    useCreateBookingMutation,
    useGetUserBookingsQuery,
    useAllBookingsQuery
} = bookingsApi;