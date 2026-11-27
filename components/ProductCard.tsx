"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Eye } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import { formatRupiah, stockLabel } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const STOCK_COLORS = {
  in_stock: "bg-emerald-50 text-emerald-800 border-emerald-200",
  low_stock: "bg-amber-50 text-amber-800 border-amber-200",
  out_of_stock: "bg-stone-100 text-stone-600 border-stone-200",
};

const CATEGORY_EMOJI: Record<string, string> = {
  "Pakan Ayam": "🌾",
  "Suplemen Ayam": "💊",
  "Makanan Kucing": "🐱",
  "Makanan Anjing": "🐶",
  "Perlengkapan Burung": "🐦",
  "Perlengkapan Kelinci": "🐰",
  "Vitamin & Suplemen": "🌿",
  "Peralatan Kandang": "🏠",
};

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, addToast } = useCart();
  const [added, setAdded] = useState(false);
  const isOutOfStock = product.stock === "out_of_stock";
  const emoji = CATEGORY_EMOJI[product.category] ?? "📦";

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isOutOfStock) return;
    const defaultVariant = product.variants?.[0];
    addItem(product, defaultVariant);
    addToast(`${product.name} ditambahkan ke keranjang`);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="group bg-white rounded-2xl border border-[#E8E4DF] overflow-hidden hover:border-[#B72226]/40 hover:shadow-md transition-all duration-300 flex flex-col">
      {/* Image */}
      <Link href={`/product/${product.slug}`} className="block relative aspect-square bg-[#FAF8F5] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center product-img-placeholder">
          <span className="text-6xl opacity-75 select-none group-hover:scale-110 transition-transform duration-500">
            {emoji}
          </span>
        </div>
        {/* Featured badge */}
        {product.featured && (
          <span className="absolute top-3 left-3 bg-[#B72226] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
            Pilihan
          </span>
        )}
        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100">
          <span className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#292725] text-xs font-medium px-3.5 py-1.5 rounded-full shadow-sm">
            <Eye className="w-3.5 h-3.5 text-[#B72226]" />
            Lihat Detail
          </span>
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-col flex-1 p-2.5 min-[360px]:p-3 sm:p-4">
        <div className="flex items-center justify-between gap-1.5 sm:gap-2 mb-1.5">
          <span className="text-[11px] sm:text-xs text-[#7E7873] font-medium truncate">{product.brand}</span>
          <span
            className={`text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full border whitespace-nowrap ${
              STOCK_COLORS[product.stock]
            }`}
          >
            {stockLabel(product.stock)}
          </span>
        </div>

        <Link href={`/product/${product.slug}`} className="flex-1">
          <h3 className="text-xs sm:text-sm font-semibold text-[#292725] leading-snug line-clamp-2 hover:text-[#B72226] transition-colors mb-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-[10px] sm:text-[11px] text-[#7E7873] mb-1.5 truncate">{product.category}</p>

        {product.variants && product.variants.length > 0 && (
          <p className="text-[10px] sm:text-[11px] text-[#7E7873] mb-2 truncate">
            {product.variants[0].label} &amp; lainnya
          </p>
        )}

        <div className="flex items-center justify-between gap-1.5 sm:gap-2 mt-auto pt-2.5 sm:pt-3 border-t border-[#E8E4DF]/60">
          <div className="min-w-0 flex-1">
            <p className="text-xs min-[360px]:text-[13px] sm:text-sm md:text-base font-bold text-[#B72226] leading-tight tracking-tight whitespace-nowrap">
              {formatRupiah(product.price)}
            </p>
            {product.weight && (
              <p className="text-[10px] text-[#7E7873] mt-0.5 truncate leading-none">{product.weight}</p>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={`shrink-0 flex items-center justify-center gap-1 sm:gap-1.5 px-2 min-[360px]:px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold transition-all ${
              isOutOfStock
                ? "bg-[#E8E4DF] text-[#7E7873] cursor-not-allowed"
                : added
                ? "bg-[#861D22] text-white scale-95"
                : "bg-[#B72226] text-white hover:bg-[#861D22] active:scale-95 shadow-sm"
            }`}
            aria-label={`Tambah ${product.name} ke keranjang`}
          >
            {added ? (
              <span className="whitespace-nowrap">✓ <span className="hidden min-[380px]:inline">Ditambahkan</span></span>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">{isOutOfStock ? "Habis" : "Tambah"}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
