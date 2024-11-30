# Digital Ocean Spaces Migration Plan

## Prerequisites

1. Digital Ocean Account Setup
   - ✓ Create a new Space in Digital Ocean
   - ✓ Space endpoint URL: `https://doc-driven-dev-space.nyc3.digitaloceanspaces.com`
   - ✓ Generate Access Keys (Space access key and secret)

2. Local Development Setup
   - ✓ Install AWS CLI (DO Spaces is S3-compatible)
   - ✓ Configure AWS CLI with DO credentials
   ```bash
   aws configure --profile=doc-driven-dev-spaces
   # AWS Access Key ID: <configured>
   # AWS Secret Access Key: <configured>
   # Default region name: nyc3
   # Default output format: json
   ```

## Migration Steps

### 1. Image Preparation ✓
- Current images migrated from `public/images/`:
  - about-ryan-vice.jpeg
  - ai-powered.jpeg
  - doc-driven-dev-process-mobile.png
  - doc-driven-dev-process.png
  - document-first.jpeg
  - future-ready.jpeg
  - generate-code.jpeg
  - test-driven.jpeg

### 2. Image Optimization ✓
- Created optimization script (see [Image Preprocessing Guide](IMAGE-PREPROCESSING.md))
- Implemented automated WebP conversion and responsive size generation
- Quality settings optimized for web delivery
- Responsive sizes: 640px, 750px, 828px, 1080px, 1200px, 1920px

### 3. Upload to DO Spaces ✓
- Created upload script with proper cache headers
- All images successfully uploaded to Space
- Verified public access and caching settings

### 4. Code Updates (Next Steps)

#### Environment Configuration
```bash
# Development (local images)
# No SPACE_IMAGES_URL set

# Production
SPACE_IMAGES_URL=https://doc-driven-dev-space.nyc3.digitaloceanspaces.com/images
```

#### Update next.config.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SPACE_IMAGES_URL: process.env.SPACE_IMAGES_URL || ''
    },
    images: {
        loader: 'custom',
        loaderFile: './lib/imageLoader.ts',
        domains: [
            'doc-driven-dev-space.nyc3.digitaloceanspaces.com',
            // ... existing domains ...
        ],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    output: 'export'
};

export default nextConfig;
```

#### Update imageLoader.ts
For detailed environment-specific image handling, see [IMAGE-ENVIRONMENT-STRATEGY.md](IMAGE-ENVIRONMENT-STRATEGY.md).

```typescript
const RESPONSIVE_SIZES = [640, 750, 828, 1080, 1200, 1920];

export default function imageLoader({ 
  src, 
  width, 
  quality = 75 
}: { 
  src: string; 
  width: number; 
  quality?: number 
}) {
  // If SPACE_IMAGES_URL is not set, use local development flow
  if (!process.env.SPACE_IMAGES_URL) {
    return src;
  }

  // For local image paths, transform to Space URLs with responsive sizes
  if (src.startsWith('/images/')) {
    const filename = src.split('/').pop()?.split('.')[0];
    if (!filename) return src;

    const targetWidth = RESPONSIVE_SIZES.reduce((prev, curr) => {
      return Math.abs(curr - width) < Math.abs(prev - width) ? curr : prev;
    });

    return `${process.env.SPACE_IMAGES_URL}/${filename}.${targetWidth}.webp`;
  }

  return src;
}
```

### 5. Component Updates
Update all image references to use relative paths. For detailed implementation guidelines, see [Image Preprocessing Guide](IMAGE-PREPROCESSING.md).

Example format:
```typescript
<Image
  src="/images/example.png"  // Use local path - imageLoader handles environment switching
  alt="Description"
  width={1200}
  height={800}
  priority={true} // for above-fold images
/>
```

### 6. Testing
1. Test local development
   - [ ] Verify images load correctly from public/images
   - [ ] Check responsive sizes
   - [ ] Validate WebP delivery with fallbacks

2. Test production build
   - [ ] Set SPACE_IMAGES_URL and verify Space URLs
   - [ ] Verify CDN caching
   - [ ] Check load times
   - [ ] Monitor for 504 errors

### 7. Cleanup
After successful migration and testing:
1. [ ] Keep original images in version control as backup
2. [ ] Update documentation
3. [ ] Monitor performance metrics

## Validation Checklist
- ✓ Space created and configured
- ✓ Images optimized and converted to WebP
- ✓ Responsive versions generated
- ✓ Images uploaded to DO Space
- [ ] Environment configuration set up
- [ ] CDN properly configured
- [ ] Cache headers verified
- [ ] Image loader working with new URLs
- [ ] Responsive images loading correctly
- [ ] WebP format being served
- [ ] No 504 errors on cold starts
- [ ] Load times improved

## Progress Tracking
✓ Space created: doc-driven-dev-space.nyc3.digitaloceanspaces.com
✓ Access keys generated and configured
✓ Images optimized and converted to WebP
✓ Images uploaded to Space
[ ] Environment configuration implemented
[ ] Code updates implemented
[ ] Testing completed
[ ] Cleanup performed

## Developer Documentation
- [Image Preprocessing Guide](IMAGE-PREPROCESSING.md) - Detailed guide for processing and optimizing images
- [Image Environment Strategy](IMAGE-ENVIRONMENT-STRATEGY.md) - Guide for handling images across different environments

## Rollback Plan
In case of issues:
1. Remove SPACE_IMAGES_URL to revert to local images
2. Maintain local copies of all images in public/images
3. Document steps to revert changes if needed
