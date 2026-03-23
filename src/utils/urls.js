/**
 * Aceita apenas URLs públicas https (sem credenciais embutidas).
 * Reduz risco de javascript: e de redirecionamentos inesperados em links/imagens.
 */
export function isSafePublicHttpsUrl(value) {
  if (typeof value !== "string") return false;
  const trimmed = value.trim();
  if (!trimmed) return false;
  try {
    const u = new URL(trimmed);
    if (u.protocol !== "https:") return false;
    if (u.username || u.password) return false;
    return true;
  } catch {
    return false;
  }
}
