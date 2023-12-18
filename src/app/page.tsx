"use client";

import { API_URL } from "@service/endpoint";
import { useEffect, useState } from "react";

export default function Home() {
    const [state, setState] = useState<any>(null);
    const [count, setCount] = useState(0);
    // const a = "d";
    useEffect(() => {
        if (count !== 0) {
            fetch(API_URL + "/user")
                .then(res => res.json())
                .then(data => {
                    setState({ ...state, ...data });
                    setCount(count + 1);
                });
        }
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-center text-6xl font-bold">
                Welcome to{" "}
                <a
                    className="text-blue-600 hover:underline"
                    href="https://sslwireless.com/"
                >
                    SSL
                </a>
            </h1>
        </main>
    );
}
