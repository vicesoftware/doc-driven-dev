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
    // Extract filename without extension
    const filename = src.split('/').pop()?.split('.')[0];
    if (!filename) return src;

    // Find the closest width
    const targetWidth = RESPONSIVE_SIZES.reduce((prev, curr) => {
      return Math.abs(curr - width) < Math.abs(prev - width) ? curr : prev;
    });

    // Use higher quality for smaller images
    const targetQuality = targetWidth <= 750 ? 90 : 75;

    return `${process.env.SPACE_IMAGES_URL}/${filename}.${targetWidth}.webp?q=${targetQuality}`;
  }

  // For other URLs (e.g., external images), maintain existing behavior
  if (src.startsWith('https://')) {
    const params = [`w=${width}`];
    // Use higher quality for smaller images
    const targetQuality = width <= 750 ? 90 : quality;
    if (targetQuality) {
      params.push(`q=${targetQuality}`);
    }
    params.push('f=webp');
    return `${src}?${params.join('&')}`;
  }

  return src;
}
