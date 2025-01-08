import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  env: {
    SPACE_IMAGES_URL: process.env.SPACE_IMAGES_URL || ''
  },
  images: {
    loader: 'custom',
    loaderFile: './lib/imageLoader.ts',
    domains: [
      'doc-driven-dev-space.nyc3.digitaloceanspaces.com',
      'doc-driven-dev-space.nyc3.cdn.digitaloceanspaces.com',
      'docdrivendevelopment.com',
      'docdrivendev.com',
      'documentdrivendevelopment.com',
      'documentationdrivendevelopment.com',
      'www.docdrivendevelopment.com',
      'www.docdrivendev.com',
      'www.documentdrivendevelopment.com',
      'www.documentationdrivendevelopment.com',
      'images.unsplash.com',
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...config.externals, 'sharp']
    }
    return config
  }
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [[remarkGfm, { singleTilde: false }]],
    rehypePlugins: [rehypeSlug, rehypeHighlight],
    format: 'mdx',
    providerImportSource: "@mdx-js/react",
  },
})

export default withMDX(nextConfig)
