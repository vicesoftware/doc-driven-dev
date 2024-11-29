export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  // If the image is hosted on your Digital Ocean Space, transform the URL
  if (src.startsWith('https://')) {
    const params = [`w=${width}`]
    if (quality) {
      params.push(`q=${quality}`)
    }
    return `${src}?${params.join('&')}`
  }
  return src
}
