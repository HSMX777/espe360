base="Imagenes/ETFA LATACUNGA"
out="public/360_ETFA_LATACUNGA"

for f in "$base"/*.JPG; do
    [ -e "$f" ] || continue
    name=$(basename "$f")
    
    # Handle DJI files separately to match lowercase prefix (2026...)
    if [[ $name == DJI_* ]]; then
        new_name=$(echo "$name" | sed 's/DJI_//; s/_D.JPG/_d.JPG/')
    else
        # Replace spaces and parentheses with underscores/handled format
        new_name=$(echo "$name" | tr ' ' '_')
        # Handle (2) -> _2
        new_name=$(echo "$new_name" | sed 's/_(2)/_2/; s/(2)/2/')
    fi
    
    cp "$f" "$out/$new_name"
done
