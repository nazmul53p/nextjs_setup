import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookie from "@utils/index";
import { BASE_URL } from "./endpoint";

const mainServiceApi = createApi({
    // reducerPath: "api",
    // refetchOnMountOrArgChange: true,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: async headers => {
            // const token = getState()?.user?.token;
            const token = Cookie.getCookie("token");
            // headers.set("Access-Control-Allow-Origin", "*");

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

    tagTypes: [],

    endpoints: () => ({}),
});

export default mainServiceApi;
