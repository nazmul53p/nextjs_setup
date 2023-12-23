import { configureStore } from "@reduxjs/toolkit";
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
    useStore,
} from "react-redux";
import { demoReducer } from "./demo/demoSlice";

export const store = configureStore({
    devTools: process.env.NEXT_PUBLIC_NODE_ENV === "development",
    reducer: {
        demo: demoReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat([]),
});

// Infer the type of makeStore
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
