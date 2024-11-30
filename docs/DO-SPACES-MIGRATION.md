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

#### Update next.config.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
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
```typescript
export default function imageLoader({ 
  src, 
  width, 
  quality 
}: { 
  src: string; 
  width: number; 
  quality?: number 
}) {
  // Handle DO Spaces URLs
  if (src.startsWith('https://doc-driven-dev-space.nyc3.digitaloceanspaces.com')) {
    // Extract the base filename without extension
    const baseName = src.split('/').pop()?.split('.')[0];
    // Use the closest width version
    const sizes = [640, 750, 828, 1080, 1200, 1920];
    const targetWidth = sizes.reduce((prev, curr) => {
      return Math.abs(curr - width) < Math.abs(prev - width) ? curr : prev;
    });
    
    return `https://doc-driven-dev-space.nyc3.digitaloceanspaces.com/images/${baseName}.${targetWidth}.webp`;
  }
  
  // For other URLs, maintain existing behavior with WebP support
  if (src.startsWith('https://')) {
    const params = [`w=${width}`]
    if (quality) {
      params.push(`q=${quality}`)
    }
    // Add WebP format conversion for non-Space URLs
    params.push('f=webp')
    return `${src}?${params.join('&')}`
  }
  return src
}
```

### 5. Component Updates (Next Steps)
Update all image references in components to use the new DO Spaces URLs. For detailed implementation guidelines, see [Image Preprocessing Guide](IMAGE-PREPROCESSING.md).

Example format:
```typescript
<Image
  src="https://doc-driven-dev-space.nyc3.digitaloceanspaces.com/images/example.webp"
  alt="Description"
  width={1200}
  height={800}
  priority={true} // for above-fold images
/>
```

### 6. Testing
1. Test local development
   - [ ] Verify images load correctly
   - [ ] Check responsive sizes
   - [ ] Validate WebP delivery with fallbacks

2. Test production build
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
[ ] Code updates implemented
[ ] Testing completed
[ ] Cleanup performed

## Developer Documentation
- [Image Preprocessing Guide](IMAGE-PREPROCESSING.md) - Detailed guide for processing and optimizing images

## Rollback Plan
In case of issues:
1. Keep old image paths in components (commented out)
2. Maintain local copies of all images
3. Document steps to revert changes if needed
