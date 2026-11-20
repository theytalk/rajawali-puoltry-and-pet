// ============================================================
// SHARED TYPESCRIPT TYPES
// ============================================================

export type StockStatus = "in_stock" | "low_stock" | "out_of_stock";

export interface ProductVariant {
  label: string;
  value: string;
  priceModifier?: number; // added to base price
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  price: number; // in IDR
  description: string;
  images: string[]; // relative paths under /images/products/ or placeholder URLs
  stock: StockStatus;
  variants?: ProductVariant[];
  featured?: boolean;
  tags?: string[];
  weight?: string;
}

export type ProductCategory =
  | "Pakan Ayam"
  | "Suplemen Ayam"
  | "Makanan Kucing"
  | "Makanan Anjing"
  | "Perlengkapan Burung"
  | "Perlengkapan Kelinci"
  | "Vitamin & Suplemen"
  | "Peralatan Kandang";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Pakan Ayam",
  "Suplemen Ayam",
  "Makanan Kucing",
  "Makanan Anjing",
  "Perlengkapan Burung",
  "Perlengkapan Kelinci",
  "Vitamin & Suplemen",
  "Peralatan Kandang",
];

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: ProductVariant;
}

export interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

