import { baseApi } from "../../app/baseApi";

const facilityApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        addFacility: builder.mutation({
            query: (data) => ({
                url: '/api/facility',
                body: data,
                method: 'POST'
            }),
        }),
        getAllFacility: builder.query({
            query: () => ({
                url: '/api/facility'
            }),
            providesTags: ["facilities"]
        }),
        deleteFacility: builder.mutation({
            query: (id) => ({
                url: `/api/facility/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["facilities"]
        }),
    })
});

export const { useAddFacilityMutation, useGetAllFacilityQuery, useDeleteFacilityMutation } = facilityApi;