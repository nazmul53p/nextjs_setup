import { TRootState } from "@redux/index";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookie from "@utils/index";
import { BASE_URL } from "./endpoint";
import providesTags from "./providesTags";

const apiSlice = createApi({
    reducerPath: "api",
    // refetchOnMountOrArgChange: true,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: async (headers, { getState, endpoint }) => {
            console.log("endpoint", endpoint);
            console.log("getState", getState() as TRootState);

            // const token = (getState() as RootState).auth.token;
            // headers.set("Access-Control-Allow-Origin", "*");

            const token = Cookie.getCookie("token");

            if (token) {
                headers.set("Authorization", "Bearer " + token);
            }
            return headers;
        },
        validateStatus: response => {
            if (response.status === 401) {
                Cookie.deleteCookie("token");
                return false;
            }
            return true;
        },
    }),

    tagTypes: providesTags,

    endpoints: () => ({}),
});

export default apiSlice;
