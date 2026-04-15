# IASA
cp "Imagenes/IASA SANGOLQUI/Acceso principal/DJI_20260225111422_0341_D.JPG" "public/360_IASA/acceso_principal_1.JPG"
cp "Imagenes/IASA SANGOLQUI/Acceso principal/DJI_20260225112934_0342_D.JPG" "public/360_IASA/acceso_principal_2.JPG"
cp "Imagenes/IASA SANGOLQUI/Invernadero agropecuario/DJI_20260225104734_0339_D.JPG" "public/360_IASA/invernadero_agropecuario.JPG"

# Idiomas
base_id="Imagenes/INSTITUTO IDIOMAS QUITO"
out_id="public/360_IDIOMAS"
djirename_id() {
    folder=$1
    prefix=$2
    for f in "$base_id/$folder"/DJI_*.JPG; do
        [ -e "$f" ] || continue
        ts=$(basename "$f" | sed 's/DJI_//; s/_D.JPG//')
        cp "$f" "$out_id/${prefix}${ts}_d.JPG"
    done
}
djirename_id "Acceso principal" "acceso_principal_"
djirename_id "aulas de idiomas" "aulas_de_idiomas_"
djirename_id "espacios comunes" "espacios_comunes_"
djirename_id "laboratorio de idiomas" "laboratorio_de_idiomas_"

# IWIAS
base_iw="Imagenes/IWIAS PUYO"
out_iw="public/360_IWIAS"
for f in "$base_iw"/*.JPG; do
    [ -e "$f" ] || continue
    name=$(basename "$f")
    new_name=$(echo "$name" | tr ' ' '_')
    cp "$f" "$out_iw/$new_name"
done

# Belisario
base_bel="Imagenes/LATACUNGA CAMPUS BELISARIO"
out_bel="public/360_BELISARIO"
for f in "$base_bel"/*.JPG; do
    [ -e "$f" ] || continue
    name=$(basename "$f")
    # Special handling for trailing space in folder name or file name if any
    new_name=$(echo "$name" | sed 's/ _/_/g; s/ \././g; s/ /_/g')
    # Match double underscores or space+underscore
    new_name=$(echo "$new_name" | sed 's/__/_/g')
    cp "$f" "$out_bel/$new_name"
done
