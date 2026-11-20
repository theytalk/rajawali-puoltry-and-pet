"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Plus, Minus, MessageCircle, Package, Tag } from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";
import { ProductVariant } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import { formatRupiah, stockLabel } from "@/lib/utils";
import { buildWhatsAppOrderUrl } from "@/lib/config";
import { ProductCard } from "@/components/ProductCard";

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

interface ProductDetailClientProps {
  slug: string;
}

export function ProductDetailClient({ slug }: ProductDetailClientProps) {
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 4);
  const { addItem, addToast } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants?.[0]
  );
  const [added, setAdded] = useState(false);

  const isOutOfStock = product.stock === "out_of_stock";
  const price = product.price + (selectedVariant?.priceModifier ?? 0);
  const emoji = CATEGORY_EMOJI[product.category] ?? "📦";

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    addToast(`${quantity}× ${product.name} ditambahkan ke keranjang`);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const buildDirectOrderMessage = () => {
    const variantText = selectedVariant ? ` (${selectedVariant.label})` : "";
    return (
      `Halo Rajawali Poultry & Pet Store, saya ingin memesan:\n\n` +
      `1. ${product.name}${variantText} — ${quantity} pcs\n   Harga: ${formatRupiah(price * quantity)}\n\n` +
      `Estimasi Total: ${formatRupiah(price * quantity)}\n\nMohon konfirmasi ketersediaan dan total akhirnya. Terima kasih.`
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#7E7873] mb-8">
        <Link href="/" className="hover:text-[#B72226] transition-colors">Beranda</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-[#B72226] transition-colors">Toko</Link>
        <span>/</span>
        <Link href={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-[#B72226] transition-colors">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-[#292725] font-medium truncate max-w-[200px]">{product.name}</span>
      </nav>

      {/* Main detail */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
        {/* Image */}
        <div className="aspect-square rounded-3xl bg-[#FAF8F5] border border-[#E8E4DF] flex items-center justify-center overflow-hidden relative shadow-sm">
          <span className="text-[120px] select-none">{emoji}</span>
          {product.featured && (
            <span className="absolute top-4 left-4 bg-[#B72226] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
              Produk Pilihan
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          {/* Category & brand */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <Link
              href={`/shop?category=${encodeURIComponent(product.category)}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#861D22] bg-[#E9DAD5] px-3 py-1 rounded-full hover:bg-[#DFCDC6] transition-colors"
            >
              <Tag className="w-3 h-3" />
              {product.category}
            </Link>
            <span
              className={`inline-flex text-xs font-semibold px-2.5 py-1 rounded-full border ${STOCK_COLORS[product.stock]}`}
            >
              {stockLabel(product.stock)}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#292725] mb-1 leading-tight">
            {product.name}
          </h1>
          <p className="text-sm text-[#7E7873] mb-5">
            oleh <span className="font-medium text-[#292725]">{product.brand}</span>
            {product.weight && <> · {product.weight}</>}
          </p>

          <div className="text-3xl font-bold text-[#B72226] mb-6">
            {formatRupiah(price)}
            {selectedVariant?.priceModifier && selectedVariant.priceModifier > 0 && (
              <span className="text-sm font-normal text-[#7E7873] ml-2">
                (termasuk varian)
              </span>
            )}
          </div>

          {/* Variants */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-semibold text-[#292725] mb-2">
                Pilihan Varian / Ukuran
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.value}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 rounded-xl border text-sm font-semibold transition-all ${
                      selectedVariant?.value === v.value
                        ? "border-[#B72226] bg-[#B72226] text-white shadow-sm"
                        : "border-[#E8E4DF] bg-white text-[#292725] hover:border-[#B72226]"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-[#292725] mb-2">Jumlah</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-[#E8E4DF] rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-[#7E7873] hover:text-[#B72226] hover:bg-[#E9DAD5]/40 transition-colors"
                  aria-label="Kurangi"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-bold text-[#292725]">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-[#7E7873] hover:text-[#B72226] hover:bg-[#E9DAD5]/40 transition-colors"
                  aria-label="Tambah"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-[#7E7873]">
                Subtotal: <span className="font-bold text-[#292725]">{formatRupiah(price * quantity)}</span>
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={handleAddToCart}
              disabled={isOutOfStock}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold transition-all text-sm ${
                isOutOfStock
                  ? "bg-[#E8E4DF] text-[#7E7873] cursor-not-allowed"
                  : added
                  ? "bg-[#861D22] text-white"
                  : "bg-[#B72226] text-white hover:bg-[#861D22] active:scale-[0.98] shadow-sm"
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              {isOutOfStock ? "Produk Habis" : added ? "✓ Ditambahkan" : "Tambah ke Keranjang"}
            </button>
            <a
              href={buildWhatsAppOrderUrl(buildDirectOrderMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold transition-colors text-sm bg-[#861D22] hover:bg-[#B72226] text-white shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Pesan Langsung via WhatsApp
            </a>
          </div>

          {/* Description */}
          <div className="bg-[#FAF8F5] border border-[#E8E4DF] rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-4 h-4 text-[#B72226]" />
              <span className="text-sm font-semibold text-[#292725]">Deskripsi Produk</span>
            </div>
            <p className="text-sm text-[#7E7873] leading-relaxed">{product.description}</p>
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-white border border-[#E8E4DF] text-[#7E7873] px-2.5 py-0.5 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-[#7E7873] mt-4 leading-relaxed">
            * Harga dan ketersediaan stok bersifat estimasi. Konfirmasi final dilakukan via WhatsApp.
          </p>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#292725]">Produk Serupa</h2>
            <Link href={`/shop?category=${encodeURIComponent(product.category)}`} className="text-sm font-semibold text-[#B72226] hover:underline">
              Lihat semua →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Back link */}
      <div className="mt-10">
        <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-[#7E7873] hover:text-[#B72226] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Toko
        </Link>
      </div>
    </div>
  );
}
