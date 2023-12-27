import apiSlice from "@api/apiSlice";
import { GET_USERS_DATA } from "@api/endpoint";
export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IDemo {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export const authApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getDemos: builder.query<IDemo, void>({
            query: () => GET_USERS_DATA,
            transformResponse: (response: unknown) => {
                return response as Promise<IDemo>;
            },
            providesTags: ["demo"],
        }),
        getDemo: builder.query<IDemo, number>({
            query: id => `demo/${id}`,
            transformResponse: (response: unknown) => {
                return response as Promise<IDemo>;
            },
            providesTags: ["demo"],
        }),
        createDemo: builder.mutation<IDemo, Partial<IDemo>>({
            query: data => ({
                url: "demo",
                method: "POST",
                body: data,
                responseHandler: async response => {
                    return await response.json();
                },
            }),
            transformResponse: response => {
                return response as Promise<IDemo>;
            },
        }),
        updateDemo: builder.mutation<IDemo, Partial<IDemo>>({
            query: data => ({
                url: `demo/${data.id}`,
                method: "PUT",
                body: data,
                responseHandler: async response => {
                    return await response.json();
                },
            }),
            transformResponse: (response: unknown) => {
                return response as Promise<IDemo>;
            },
        }),
        deleteDemo: builder.mutation<void, number>({
            query: id => ({
                url: `demo/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetDemoQuery,
    useGetDemosQuery,
    useCreateDemoMutation,
    useUpdateDemoMutation,
    useDeleteDemoMutation,
} = authApi;
