This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Features

### AI Images
They are created using [Microsoft Designer](https://designer.microsoft.com/image-creator?scenario=texttoimage)

### Image Optimization
The project uses a custom image optimization setup with Digital Ocean Spaces and CDN:
- Images are served from DO Spaces through CDN
- WebP format with responsive sizes
- Environment-based image handling (local/production)

For details, see:
- [Image Optimization Plan](docs/IMAGE-OPTIMIZATION-PLAN.md) - Overview and future improvements
- [Space Migration Guide](docs/DO-SPACES-MIGRATION.md) - DO Space setup and configuration
- [Environment Strategy](docs/IMAGE-ENVIRONMENT-STRATEGY.md) - Local vs production image handling

### Hero Header
doc-driven-dev-process.png is created using [Figma Jam](https://www.figma.com/board/tQ6GX92WeqJu17x49vzIz1/Doc-Driven-Dev-Process?node-id=0-1&t=zUENpxVCz7yUS2Ke-1)
