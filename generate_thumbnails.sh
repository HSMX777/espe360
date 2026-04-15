#!/bin/bash
echo "Starting thumbnail generation..."
for dir in public/360_*; do
    if [ -d "$dir" ]; then
        echo "Processing directory: $dir"
        mkdir -p "$dir/thumbnails"
        for img in "$dir"/*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
            # Check if file exists based on the glob expansion
            if [ -f "$img" ]; then
                filename=$(basename "$img")
                thumb="$dir/thumbnails/$filename"
                if [ ! -f "$thumb" ]; then
                    echo "  Generating thumbnail for $filename..."
                    # We use -thumbnail instead of -resize as it's faster and strips metadata
                    convert "$img" -thumbnail 400x -quality 70 "$thumb"
                else
                    echo "  Thumbnail for $filename already exists."
                fi
            fi
        done
    fi
done
echo "Thumbnail generation complete."
