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
        getAFacility: builder.query({
            query: (id) => ({
                url: `/api/facility/${id}`
            })
        }),
        getAllFacility: builder.query({
            query: () => ({
                url: '/api/facility'
            }),
            providesTags: ["facilities"]
        }),
        updateFacility: builder.mutation({
            query: ({ id, data }) => ({
                url: `/api/facility/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ["facilities"]
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

export const {
    useAddFacilityMutation,
    useGetAllFacilityQuery,
    useDeleteFacilityMutation,
    useGetAFacilityQuery,
    useUpdateFacilityMutation
} = facilityApi;