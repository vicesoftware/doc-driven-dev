# Image Preprocessing Guide

This guide explains how to process and optimize images for the application using our automated scripts.

## Overview

Our image optimization strategy involves:
1. Converting images to WebP format
2. Generating responsive sizes
3. Uploading to Digital Ocean Spaces
4. Using optimized images in components

## Prerequisites

1. Install required tools:
   ```bash
   npm install -g sharp-cli
   ```

2. Configure AWS CLI with DO Spaces credentials:
   ```bash
   aws configure --profile=doc-driven-dev-spaces
   # AWS Access Key ID: <your-spaces-key>
   # AWS Secret Access Key: <your-spaces-secret>
   # Default region name: nyc3
   # Default output format: json
   ```

## Scripts

### 1. Image Optimization Script
Location: `scripts/optimize-images.sh`

This script:
- Converts images to WebP format
- Generates responsive versions at predefined widths
- Maintains 80% quality for optimal size/quality balance

Usage:
```bash
./scripts/optimize-images.sh
```

The script will:
1. Process all images from `public/images/`
2. Create a base WebP version of each image
3. Generate responsive sizes:
   - 640px (mobile)
   - 750px (mobile landscape)
   - 828px (tablet)
   - 1080px (tablet landscape)
   - 1200px (desktop)
   - 1920px (large desktop)
4. Save all versions in `optimized-images/` directory

Output format:
- Base image: `{filename}.webp`
- Responsive versions: `{filename}.{width}.webp`

### 2. Upload Script
Location: `scripts/upload-images.sh`

This script uploads optimized images to our Digital Ocean Space with proper caching headers.

Usage:
```bash
./scripts/upload-images.sh
```

The script will:
1. Upload all images from `optimized-images/` to the Space
2. Set public read access
3. Configure caching headers (1 year max-age)

## Using Optimized Images

### 1. Image URL Format

Images are available at:
```
https://doc-driven-dev-space.nyc3.digitaloceanspaces.com/images/{filename}.{width}.webp
```

Example:
```
https://doc-driven-dev-space.nyc3.digitaloceanspaces.com/images/hero-image.1200.webp
```

### 2. In Components

Use the Next.js Image component with our Space URL:

```typescript
<Image
  src="https://doc-driven-dev-space.nyc3.digitaloceanspaces.com/images/example.webp"
  alt="Description"
  width={1200}
  height={800}
  priority={true} // for above-fold images
/>
```

The imageLoader will automatically:
1. Extract the base filename
2. Select the appropriate size variant based on the requested width
3. Return the URL for the best-matching pre-generated image

## Adding New Images

1. Place new images in `public/images/`
2. Run optimization script:
   ```bash
   ./scripts/optimize-images.sh
   ```
3. Upload to Space:
   ```bash
   ./scripts/upload-images.sh
   ```

## Best Practices

1. Source Images:
   - Use high-quality source images
   - Prefer PNG or high-quality JPEG
   - Maintain aspect ratios

2. Image Sizes:
   - Consider responsive breakpoints
   - Don't use larger sizes than needed
   - Use priority loading for above-fold images

3. Performance:
   - Images are automatically cached (1 year)
   - WebP format provides optimal compression
   - Responsive sizes reduce bandwidth usage

## Troubleshooting

1. If images aren't appearing:
   - Verify the image exists in the Space
   - Check the exact filename and case sensitivity
   - Ensure the domain is allowed in next.config.mjs

2. If optimization fails:
   - Verify sharp-cli is installed globally
   - Check source image format compatibility
   - Ensure write permissions in optimized-images/

3. If upload fails:
   - Verify AWS CLI configuration
   - Check Space access credentials
   - Ensure proper network connectivity
