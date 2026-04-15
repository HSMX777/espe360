#!/bin/bash
# Batch push script - pushes untracked files to GitHub in ~40MB chunks
set -e

LIMIT_BYTES=$((40 * 1024 * 1024))  # 40MB in bytes
BATCH_NUM=1
BATCH_SIZE=0
BATCH_FILES=()

echo "=== Starting batch push ==="
echo "Scanning untracked files..."

# Get all untracked files
mapfile -t ALL_FILES < <(git ls-files --others --exclude-standard)

echo "Total untracked files: ${#ALL_FILES[@]}"

if [ ${#ALL_FILES[@]} -eq 0 ]; then
    echo "No untracked files to push."
    exit 0
fi

commit_batch() {
    if [ ${#BATCH_FILES[@]} -eq 0 ]; then
        return
    fi
    
    echo ""
    echo "--- Batch $BATCH_NUM: ${#BATCH_FILES[@]} files, $(($BATCH_SIZE / 1024 / 1024))MB ---"
    
    for f in "${BATCH_FILES[@]}"; do
        git add "$f"
    done
    
    git commit -m "feat: add 360 images batch $BATCH_NUM (${#BATCH_FILES[@]} files)"
    git push origin main
    
    echo "Batch $BATCH_NUM pushed successfully!"
    BATCH_NUM=$((BATCH_NUM + 1))
    BATCH_SIZE=0
    BATCH_FILES=()
}

for file in "${ALL_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        continue
    fi
    
    FILE_SIZE=$(stat -c%s "$file" 2>/dev/null || echo 0)
    
    # If adding this file exceeds the limit, commit what we have first
    if [ $BATCH_SIZE -gt 0 ] && [ $(($BATCH_SIZE + FILE_SIZE)) -gt $LIMIT_BYTES ]; then
        commit_batch
    fi
    
    BATCH_FILES+=("$file")
    BATCH_SIZE=$(($BATCH_SIZE + FILE_SIZE))
done

# Push remaining files
commit_batch

echo ""
echo "=== All batches pushed successfully! ==="
echo "Total batches: $((BATCH_NUM - 1))"
