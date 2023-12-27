"use client";
import { store, TAppStore } from "@redux/index";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const storeRef = useRef<TAppStore>();
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = store;
        // storeRef.current.dispatch(initializeCount(count));
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
