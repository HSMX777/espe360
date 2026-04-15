base="Imagenes/ESPE SANTO DOMINGO"
out="public/360_ESPE_SD"

djirename() {
    folder=$1
    prefix=$2
    for f in "$base/$folder"/DJI_*.JPG; do
        [ -e "$f" ] || continue
        ts=$(basename "$f" | sed 's/DJI_//; s/_D.JPG//')
        cp "$f" "$out/${prefix}${ts}_d.JPG"
    done
}

djirename "acceso principal" "acceso_principal_"
djirename "aulas representativas" "aulas_representativas_"
djirename "laboratorios" "laboratorios_"
djirename "registro academico" "registro_academico_"
djirename "unidad de bienestar universitario" "unidad_de_bienestar_universitario_"
