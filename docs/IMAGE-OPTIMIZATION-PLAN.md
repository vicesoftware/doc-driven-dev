# Image Loading Optimization Plan

## Background

The application is experiencing image loading issues when deployed to Digital Ocean App Platform, specifically:
- Initial page loads trigger 504 timeout errors
- Images fail to load immediately after deployment/cold starts
- Performance improves "after a while" suggesting caching issues
- Using Next.js static export with custom image loader

## Current Implementation

- Next.js with `output: 'export'` for static generation
- Sharp for image optimization
- Custom image loader for Digital Ocean hosted images
- Images served directly through App Platform

## Action Plan

### 1. Infrastructure Optimization 🏗️

- [~] Move images to Digital Ocean Spaces
  - ✓ Create Space: doc-driven-dev-space.nyc3.digitaloceanspaces.com
  - ✓ Configure AWS CLI with Space credentials (profile: doc-driven-dev-spaces)
  - ✓ Convert and optimize images to WebP format
  - ✓ Upload optimized images to Space
  - [ ] Update application code to use Space URLs
  - Separate static assets from application code
  - Better scalability and management
  - Enables CDN integration
  - **Detailed implementation plan: [DO-SPACES-MIGRATION.md](DO-SPACES-MIGRATION.md)**

- [ ] Enable CDN for Spaces
  - [ ] Configure CDN endpoints
  - [ ] Set up proper cache headers
    ```
    Cache-Control: public, max-age=31536000
    ```
  - [ ] Configure CORS if needed

- [ ] Review App Platform Configuration
  - [ ] Increase instance size if needed
  - [ ] Configure minimum running instances to prevent cold starts
  - [ ] Review and adjust timeout settings

### 2. Image Processing Pipeline 🖼️

- [~] Implement pre-optimization workflow
  - ✓ Set up sharp-cli for batch processing
  - ✓ Create optimization script for build process
  - ✓ Define standard image sizes and formats

- [~] Generate multiple formats
  - ✓ Convert images to WebP with fallbacks
  - ✓ Create responsive sizes for common breakpoints
  - [ ] Implement srcset in components

- [~] Optimize existing images
  - ✓ Audit current image sizes and formats
  - ✓ Batch process existing images
  - ✓ Verify quality vs file size balance

### 3. Caching Strategy 📦

- [ ] Implement client-side caching
  - [ ] Configure service worker for image caching
  - [ ] Set up proper cache invalidation

- [ ] Add server-side caching layer
  - [ ] Set up Redis or similar caching solution
  - [ ] Configure cache timeouts
  - [ ] Implement cache warming for critical images

### 4. Code Optimizations 💻

- [ ] Update image loader implementation
  ```typescript
  // Example optimization
  export default function imageLoader({
    src,
    width,
    quality
  }: {
    src: string;
    width: number;
    quality?: number;
  }) {
    if (src.startsWith('https://')) {
      const params = [`w=${width}`]
      if (quality) {
        params.push(`q=${quality || 75}`)
      }
      // Add format conversion
      params.push('f=auto')
      return `${src}?${params.join('&')}`
    }
    return src
  }
  ```

- [ ] Implement lazy loading
  - [ ] Add loading="lazy" to below-fold images
  - [ ] Consider implementing intersection observer
  - [ ] Add blur placeholder images

### 5. Monitoring & Analytics 📊

- [ ] Set up performance monitoring
  - [ ] Track image load times
  - [ ] Monitor CDN cache hit rates
  - [ ] Set up alerts for timeout errors

- [ ] Implement logging
  - [ ] Track 504 errors
  - [ ] Monitor cold start frequency
  - [ ] Track image optimization metrics

## Expected Outcomes

After implementing these optimizations, we should see:
1. Elimination of initial 504 errors
2. Faster initial page loads
3. Consistent performance across cold starts
4. Reduced bandwidth usage
5. Better user experience with progressive loading

## Progress Tracking

Current Status (as of last update):
1. ✓ Created Digital Ocean Space (doc-driven-dev-space.nyc3.digitaloceanspaces.com)
2. ✓ Configured AWS CLI with Space credentials using profile 'doc-driven-dev-spaces'
3. ✓ Created and executed image optimization script
   - Converted all images to WebP format
   - Generated responsive sizes (640px, 750px, 828px, 1080px, 1200px, 1920px)
4. ✓ Successfully uploaded all optimized images to DO Space
5. Next steps:
   - Update next.config.mjs to allow Space domain
   - Enhance imageLoader.ts to handle WebP and responsive sizes
   - Update component image references to use Space URLs

## Notes

- Test each optimization in staging before production
- Monitor metrics before and after each change
- Document any configuration changes for team reference
- Consider A/B testing major changes to measure impact
