import React from "react";
import StoreProvider from "./StoreProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <StoreProvider>{children}</StoreProvider>
        </>
    );
}
