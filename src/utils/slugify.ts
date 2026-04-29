/**
 * Converts a place name into a URL-safe slug.
 * Example: "Departamento de Ciencias de la Vida" → "departamento-de-ciencias-de-la-vida"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')                   // decompose accented chars
    .replace(/[\u0300-\u036f]/g, '')    // remove accent marks
    .replace(/[^a-z0-9\s-]/g, '')      // remove special chars
    .trim()
    .replace(/\s+/g, '-')              // spaces → hyphens
    .replace(/-+/g, '-');              // collapse multiple hyphens
}

/**
 * Finds a place by its slug within a list of places.
 */
export function findPlaceBySlug<T extends { id: string; name: string }>(places: T[], slug: string): T | null {
  return places.find(p => slugify(p.name) === slug) || null;
}
