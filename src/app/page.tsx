/* This is the main page of the application. 
The route "/" is the default route and it renders this pages.
This page is rendered by default client side.  */

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-center text-6xl font-bold">
                Welcome to{" "}
                <a
                    className="text-blue-600 hover:underline"
                    href="https://sslwireless.com/"
                >
                    SSL
                </a>
            </h1>
            <span className="pt-10">
                <a
                    className="text-blue-600 hover:underline"
                    href="https://sslwireless.com/"
                >
                    Documentation
                </a>
                {" | "}
                <a
                    className="text-blue-600 hover:underline"
                    href="https://sslwireless.com/"
                >
                    Repository
                </a>
            </span>
        </main>
    );
}
