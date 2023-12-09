/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "zos.alipayobjects.com",
                port: "",
                pathname: "/my-bucket/**",
            },
        ],
    },
    skipTrailingSlashRedirect: true,

    compiler: {
        styledComponents: {
            ssr: true,
        },
    },
};

module.exports = nextConfig;
