/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https", // Protokolnya adalah HTTPS
                hostname: "cdn.myanimelist.net", // Hostname CDN tempat gambar berada
                pathname: "/images/**" // Path untuk gambar
            }
        ]
    }
};

export default nextConfig;
