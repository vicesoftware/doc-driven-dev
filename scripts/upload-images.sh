#!/bin/bash

# Ensure we're in the project root directory
cd "$(dirname "$0")/.."

echo "Starting upload to Digital Ocean Spaces..."

# Upload optimized images with proper cache headers
aws s3 sync optimized-images/ s3://doc-driven-dev-space/images/ \
  --profile=doc-driven-dev-spaces \
  --endpoint=https://nyc3.digitaloceanspaces.com \
  --acl public-read \
  --cache-control "public, max-age=31536000"

echo "Upload complete! Images are now available at https://doc-driven-dev-space.nyc3.digitaloceanspaces.com/images/"
