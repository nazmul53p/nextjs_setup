import apiSlice from "@api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
    useStore,
} from "react-redux";
import authSlice from "./auth/authSlice";
import demoSlice from "./demo/demoSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        demo: demoSlice,
    },

    devTools: process.env.NODE_ENV === "development",

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({}).concat(apiSlice.middleware),
});

// Infer the type of makeStore
export type TAppStore = typeof store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<TAppStore["getState"]>;
export type TAppDispatch = TAppStore["dispatch"];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
export const useAppStore: () => TAppStore = useStore;
