const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Échappe un texte et surligne les valeurs entre crochets ([JJ MMM], [À CONFIRMER]…)
 * pour qu'aucun emplacement réservé ne parte en ligne sans être vu.
 * À utiliser avec `set:html`.
 */
export function fmt(text: string) {
  return escape(text).replace(/\[[^\]]+\]/g, (m) => `<mark class="todo">${m}</mark>`);
}
