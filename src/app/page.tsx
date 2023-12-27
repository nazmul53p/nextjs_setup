/* This is the main page of the application. 
The route "/" is the default route and it renders this pages.
This page is rendered by default client side.  */

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-blue-100 p-24">
            <h1 className="text-center text-5xl font-bold">
                React Project Starter Framework
            </h1>
            <span className="pt-10">
                <a
                    className="text-blue-600 hover:underline"
                    href="https://sslwireless.com/"
                    target="_blank"
                >
                    Documentation
                </a>
                {" | "}
                <a
                    className="text-blue-600 hover:underline"
                    href="https://sslwireless.com/"
                    target="_blank"
                >
                    Repository
                </a>
                {" | "}
                <a
                    className="text-blue-600 hover:underline"
                    href="https://sslwireless.com/"
                    target="_blank"
                >
                    NPM Package
                </a>
            </span>
        </main>
    );
}
