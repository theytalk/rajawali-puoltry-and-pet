// ============================================================
// UTILITY FUNCTIONS
// ============================================================

/**
 * Format a number to Indonesian Rupiah currency format.
 */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Clamp a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Generate a unique ID string.
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

/**
 * Slugify a string.
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .trim();
}

/**
 * Truncate text to maxLength with ellipsis.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}

/**
 * Map stock status to display label.
 */
export function stockLabel(status: string): string {
  switch (status) {
    case "in_stock":
      return "Tersedia";
    case "low_stock":
      return "Stok Terbatas";
    case "out_of_stock":
      return "Habis";
    default:
      return "—";
  }
}

