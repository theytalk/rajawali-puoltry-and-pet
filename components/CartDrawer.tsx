"use client";

import React, { useEffect, useState } from "react";
import { X, ShoppingCart, Trash2, Plus, Minus, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatRupiah } from "@/lib/utils";
import { buildWhatsAppOrderUrl } from "@/lib/config";

export function CartDrawer() {
  const { items, itemCount, total, removeItem, updateQuantity, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("open-cart", handler);
    return () => window.removeEventListener("open-cart", handler);
  }, []);

  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimatingOut(false);
    }, 250);
  };

  // Close on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

  const buildWhatsAppMessage = () => {
    if (items.length === 0) return "";
    const lines = items.map((item, idx) => {
      const price = item.product.price + (item.selectedVariant?.priceModifier ?? 0);
      const variantText = item.selectedVariant ? ` (${item.selectedVariant.label})` : "";
      return `${idx + 1}. ${item.product.name}${variantText} — ${item.quantity} pcs\n   Harga: ${formatRupiah(price * item.quantity)}`;
    });
    return (
      `Halo Rajawali Poultry & Pet Store, saya ingin memesan:\n\n` +
      lines.join("\n\n") +
      `\n\nEstimasi Total: ${formatRupiah(total)}\n\nMohon konfirmasi ketersediaan produk dan total akhirnya. Terima kasih.`
    );
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white flex flex-col shadow-2xl ${
          isAnimatingOut ? "drawer-close" : "drawer-open"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Keranjang Belanja"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E4DF]">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-[#B72226]" />
            <h2 className="font-semibold text-[#292725]">
              Keranjang{" "}
              <span className="text-sm font-normal text-[#7E7873]">
                ({itemCount} item)
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-[#7E7873] hover:text-[#B72226] flex items-center gap-1 transition-colors px-2 py-1 rounded"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Hapus Semua
              </button>
            )}
            <button
              onClick={handleClose}
              className="p-1.5 rounded-lg hover:bg-[#E9DAD5]/30 text-[#7E7873] hover:text-[#292725] transition-colors"
              aria-label="Tutup keranjang"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="w-20 h-20 rounded-full bg-[#E9DAD5]/50 flex items-center justify-center">
                <ShoppingCart className="w-9 h-9 text-[#B72226]/40" />
              </div>
              <div>
                <p className="font-medium text-[#292725]">Keranjang kosong</p>
                <p className="text-sm text-[#7E7873] mt-1">
                  Tambahkan produk dari halaman toko.
                </p>
              </div>
              <Link
                href="/shop"
                onClick={handleClose}
                className="mt-2 px-5 py-2.5 bg-[#B72226] text-white text-sm font-medium rounded-xl hover:bg-[#861D22] transition-colors shadow-sm"
              >
                Mulai Belanja
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => {
                const price =
                  item.product.price + (item.selectedVariant?.priceModifier ?? 0);
                const lineTotal = price * item.quantity;
                const key = item.selectedVariant
                  ? `${item.product.id}::${item.selectedVariant.value}`
                  : item.product.id;

                return (
                  <li
                    key={key}
                    className="flex gap-3 pb-4 border-b border-[#E8E4DF] last:border-0"
                  >
                    {/* Product image */}
                    <div className="w-16 h-16 rounded-xl bg-[#FAF8F5] border border-[#E8E4DF] overflow-hidden shrink-0 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-2xl">
                        📦
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/product/${item.product.slug}`}
                        onClick={handleClose}
                        className="font-medium text-sm text-[#292725] hover:text-[#B72226] line-clamp-2 leading-tight"
                      >
                        {item.product.name}
                      </Link>
                      {item.selectedVariant && (
                        <p className="text-xs text-[#7E7873] mt-0.5">
                          {item.selectedVariant.label}
                        </p>
                      )}
                      <p className="text-xs text-[#7E7873] mt-0.5">
                        {item.product.brand}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        {/* Qty controls */}
                        <div className="flex items-center gap-1 border border-[#E8E4DF] rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.selectedVariant?.value,
                                item.quantity - 1
                              )
                            }
                            className="w-7 h-7 flex items-center justify-center text-[#7E7873] hover:text-[#B72226] hover:bg-[#E9DAD5]/40 rounded-l-lg transition-colors"
                            aria-label="Kurangi"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-sm font-medium text-[#292725]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.selectedVariant?.value,
                                item.quantity + 1
                              )
                            }
                            className="w-7 h-7 flex items-center justify-center text-[#7E7873] hover:text-[#B72226] hover:bg-[#E9DAD5]/40 rounded-r-lg transition-colors"
                            aria-label="Tambah"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-bold text-[#B72226]">
                          {formatRupiah(lineTotal)}
                        </span>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() =>
                        removeItem(item.product.id, item.selectedVariant?.value)
                      }
                      className="p-1 h-6 mt-0.5 rounded text-[#7E7873] hover:text-[#B72226] transition-colors shrink-0"
                      aria-label="Hapus produk"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#E8E4DF] px-5 py-4 space-y-3 bg-white">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#7E7873]">Estimasi Total</span>
              <span className="font-bold text-lg text-[#861D22]">
                {formatRupiah(total)}
              </span>
            </div>
            <p className="text-xs text-[#7E7873]">
              * Harga estimasi. Total akhir dikonfirmasi oleh toko via WhatsApp.
            </p>
            <a
              href={buildWhatsAppOrderUrl(buildWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#B72226] hover:bg-[#861D22] text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Pesan via WhatsApp
            </a>
            <button
              onClick={handleClose}
              className="w-full text-center text-sm text-[#7E7873] hover:text-[#B72226] transition-colors py-1"
            >
              Lanjut Belanja
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
