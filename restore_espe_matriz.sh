base="Imagenes/ESPE MATRIZ SANGOLQUI"
out="public/360_ESPE_MATRIZ"

# Helper for DJI files
djirename() {
    folder=$1
    prefix=$2
    for f in "$base/$folder"/DJI_*.JPG; do
        [ -e "$f" ] || continue
        ts=$(basename "$f" | sed 's/DJI_//; s/_D.JPG//')
        cp "$f" "$out/${prefix}${ts}_d.JPG"
    done
}

djirename "Acceso principal y edificio administrativo" "acceso_principal_y_edificio_administrativo_"
djirename "Areas verdes y espacios comunues" "areas_verdes_y_espacios_comunues_"
djirename "Biblioteca central" "biblioteca_central_"
djirename "Pagaduria y centro financiero" "pagaduria_y_centro_financiero_"
djirename "Unidad de bienestar univesitario" "unidad_de_bienestar_univesitario_"
djirename "bloque A_B_C_D" "bloque_a_b_c_d_"

# Direct and special mappings
cp "$base/departamento de ciencias de la computacion.JPG" "$out/departamento_de_ciencias_de_la_computacion.JPG"
cp "$base/departamento de ciencias de la vida.JPG" "$out/departamento_de_ciencias_de_la_vida.JPG"
cp "$base/departamento de ciencias exactas.JPG" "$out/departamento_de_ciencias_exactas.JPG"
cp "$base/departamento de ciencias exactas (2).JPG" "$out/dep_ciencias_exactas_2.JPG"
cp "$base/laboratorio geoespacial.JPG" "$out/laboratorio_geoespacial.JPG"
cp "$base/laboratorio e electronica.JPG" "$out/laboratorio_e_electronica.JPG"
cp "$base/unidad de admision.JPG" "$out/unidad_de_admision.JPG"
cp "$base/unidad de admision (2).JPG" "$out/unidad_de_admision_2.JPG"
cp "$base/unidad de admision interno.JPG" "$out/unidad_de_admision_interno.JPG"
cp "$base/unidad de tecnologias de la onfimacion y comunicacion.JPG" "$out/unidad_de_tecnologias_de_la_onfimacion_y_comunicacion.JPG"
cp "$base/centro de nanociencia y nanotenologia.JPG" "$out/centro_de_nanociencia_y_nanotenologia.JPG"
cp "$base/centro de posgrado.JPG" "$out/centro_de_posgrado.JPG"

# Department abbreviations
cp "$base/departamentos ciencias de la energia y mecanica- electrica y electronica.JPG" "$out/dep_energia_mecanica.JPG"
cp "$base/departamento de ciecias de la tierra y la construccion.JPG" "$out/dep_tierra_construccion.JPG"
cp "$base/depaartamentos, segiridad y defensa- ciencias humanas y sociales.JPG" "$out/dep_seguridad_defensa.JPG"
cp "$base/departamento de cc economicas, administrativas y de comercio.JPG" "$out/dep_economicas.JPG"

# Posgrado subfolder
cp "$base/Posgrado y edificio de centro de investigacion/centro de posgrado .JPG" "$out/posgrado_y_edificio_de_centro_de_investigacion_centro_de_posgrado_.JPG"
cp "$base/Posgrado y edificio de centro de investigacion/edificio postgrado.JPG" "$out/posgrado_y_edificio_de_centro_de_investigacion_edificio_postgrado.JPG"
cp "$base/Posgrado y edificio de centro de investigacion/posgrado.JPG" "$out/posgrado_y_edificio_de_centro_de_investigacion_posgrado.JPG"

# DJI files in root
cp "$base/DJI_20260224150111_0337_D.JPG" "$out/20260224150111_0337_d.JPG"
