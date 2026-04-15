# Colors
BG="#1a1a1a"
GREEN="#1b2e1b"
LINE="#444444"
TEXT="#888888"

# Function to create a map
create_map() {
    name=$1
    title=$2
    out=$3
    
    # Simple SVG structure
    echo "<svg width='1024' height='1024' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'>" > temp.svg
    echo "<rect width='1024' height='1024' fill='$BG'/>" >> temp.svg
    
    # Add some random grids
    for i in {0..10}; do
        echo "<line x1='0' y1='$((i*100))' x2='1024' y2='$((i*100))' stroke='$LINE' stroke-width='1'/>" >> temp.svg
        echo "<line x1='$((i*100))' y1='0' x2='$((i*100))' y2='1024' stroke='$LINE' stroke-width='1'/>" >> temp.svg
    done
    
    # Add random blocks based on sede
    if [ "$name" == "iwias" ]; then
        echo "<rect x='200' y='200' width='600' height='600' fill='$GREEN' rx='20'/>" >> temp.svg
        echo "<rect x='450' y='450' width='120' height='200' fill='#ffffff' fill-opacity='0.2'/>" >> temp.svg
        echo "<path d='M100 800 Q 500 700 900 800' stroke='#3344cc' fill='none' stroke-width='20' stroke-opacity='0.3'/>" >> temp.svg # Small river
    else
        echo "<rect x='150' y='150' width='700' height='700' fill='$GREEN' rx='10'/>" >> temp.svg
        echo "<rect x='300' y='300' width='200' height='100' fill='#ffffff' fill-opacity='0.2'/>" >> temp.svg
        echo "<rect x='600' y='400' width='100' height='300' fill='#ffffff' fill-opacity='0.2'/>" >> temp.svg
    fi
    
    echo "<text x='50' y='980' font-family='Arial' font-size='24' fill='$TEXT'>$title</text>" >> temp.svg
    echo "<text x='850' y='980' font-family='Arial' font-size='16' fill='$TEXT' font-style='italic'>2D ARCHITECTURAL SITE PLAN</text>" >> temp.svg
    echo "</svg>" >> temp.svg
    
    # Convert to PNG
    magick temp.svg $out
}

create_map "iwias" "ESPE - IWIAS PUYO | PLANO DE BASE" "public/map_iwias_puyo.png"
create_map "belisario" "ESPE - BELISARIO LATACUNGA | PLANO DE BASE" "public/map_belisario_latacunga.png"

rm temp.svg
