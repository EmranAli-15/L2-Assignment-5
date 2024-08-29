import { baseApi } from "../../app/baseApi";

const facilityApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        addFacility: builder.mutation({
            query: (data) => ({
                url: '/api/facility',
                body: data,
                method: 'POST'
            }),
        })
    })
});

export const { useAddFacilityMutation } = facilityApi;