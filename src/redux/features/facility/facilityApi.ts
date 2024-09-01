import { baseApi } from "../../app/baseApi";

const facilityApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        getAllFacility: builder.query({
            query: () => ({
                url: '/api/facility'
            }),
            providesTags: ["facilities"]
        }),
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
        getPopularFacility: builder.query({
            query: () => ({
                url: '/api/popularFacility'
            })
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
    useUpdateFacilityMutation,
    useGetPopularFacilityQuery
} = facilityApi;