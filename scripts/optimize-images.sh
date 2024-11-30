#!/bin/bash

# Ensure we're in the project root directory
cd "$(dirname "$0")/.."

# Create optimized-images directory if it doesn't exist
mkdir -p optimized-images

# Install sharp-cli if not already installed
if ! command -v sharp &> /dev/null; then
    echo "Installing sharp-cli..."
    npm install -g sharp-cli
fi

echo "Starting image optimization..."

# Process each image in public/images
for img in public/images/*; do
    filename=$(basename "${img%.*}")
    echo "Processing $filename..."
    
    # Convert to base WebP with 80% quality
    sharp -i "$img" -o "optimized-images/$filename.webp" --format webp --quality 80
    
    # Create responsive versions
    for width in 640 750 828 1080 1200 1920; do
        echo "  Creating ${width}px version..."
        sharp -i "$img" -o "optimized-images/$filename.$width.webp" --format webp --quality 80 resize $width
    done
done

echo "Image optimization complete! Optimized images are in the optimized-images directory."
