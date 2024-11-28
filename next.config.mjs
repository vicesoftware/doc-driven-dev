/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'docdrivendevelopment.com',
            'docdrivendev.com',
            'documentdrivendevelopment.com',
            'documentationdrivendevelopment.com',
            'www.docdrivendevelopment.com',
            'www.docdrivendev.com',
            'www.documentdrivendevelopment.com',
            'www.documentationdrivendevelopment.com'
        ],
        unoptimized: true
    },
    output: 'export'
};

export default nextConfig;
