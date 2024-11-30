# Image Environment Strategy

## Overview

This document outlines our strategy for handling image URLs across different environments (development, staging, production) to ensure:
- Smooth local development experience
- Ability to work offline
- Efficient production delivery
- Easy testing and verification

## Strategy

### 1. Environment Configuration

The image source is determined by a single environment variable:
```bash
SPACE_IMAGES_URL=https://doc-driven-dev-space.nyc3.digitaloceanspaces.com/images
```

When this variable is:
- Not set: Uses local images (development)
- Set: Uses Space URLs (production)

### 2. Directory Structure

Maintain both local and optimized versions:
```
project/
├── public/
│   └── images/                 # Original images for local development
│       ├── example.png
│       └── ...
└── optimized-images/          # Optimized versions for Space
    ├── example.webp
    ├── example.640.webp
    └── ...
```

### 3. Image Loader Implementation

The image loader automatically handles environment switching:

```typescript
// lib/imageLoader.ts
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

### 4. Component Usage

Components remain environment-agnostic by using relative paths:
```tsx
<Image
  src="/images/example.png"  // Always use local path
  alt="Example"
  width={1000}
  height={500}
/>
```

### 5. Environment Setup

#### Development
```env
# No SPACE_IMAGES_URL set
```
- Uses local images from public/images
- Faster development cycles
- Works offline
- No bandwidth costs

#### Staging/Production
```env
SPACE_IMAGES_URL=https://doc-driven-dev-space.nyc3.digitaloceanspaces.com/images
```
- Uses optimized images from Space
- CDN benefits
- Optimized formats and sizes
- Better performance

### 6. Build Process

1. Development:
   - Uses images directly from public/images
   - No optimization needed for faster builds

2. Production:
   - Run optimization script
   - Upload to Space
   - Build with SPACE_IMAGES_URL set

### 7. Testing Workflow

1. Local Development:
   - Use local images by default
   - Test Space images by setting SPACE_IMAGES_URL

2. Staging/Production:
   - Always use Space images
   - Verify CDN and optimization working

## Benefits

1. **Simple Configuration**
   - Single environment variable
   - Clear behavior based on presence/absence
   - Easy to switch between environments

2. **Development Experience**
   - Fast local development
   - Offline capability
   - Easy testing

3. **Production Optimization**
   - CDN delivery
   - Optimized formats
   - Responsive sizes

4. **Maintainability**
   - Clear separation of concerns
   - Environment-specific behavior
   - Easy to debug

## Notes

- Keep original images in version control
- Document environment variables
- Consider adding environment check to optimization scripts
- Monitor Space usage and costs in production
