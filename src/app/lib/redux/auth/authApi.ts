import apiSlice from "@api/apiSlice";
import Cookie from "@utils/index";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation({
            query: data => ({
                url: "/register",
                method: "POST",
                body: data,
            }),
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    const result = await queryFulfilled;

                    Cookie.setCookie(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        }),
                        1,
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        }),
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
        login: builder.mutation({
            query: data => ({
                url: "/login",
                method: "POST",
                body: data,
            }),

            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    const result = await queryFulfilled;

                    Cookie.setCookie(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        }),
                        1,
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        }),
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
