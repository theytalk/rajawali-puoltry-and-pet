import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { FEATURED_PRODUCTS, PRODUCTS } from "@/lib/products";
import { PRODUCT_CATEGORIES } from "@/lib/types";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppOrderButton } from "@/components/WhatsAppOrderButton";
import { ReviewsSection } from "@/components/ReviewsSection";
import { WHATSAPP_URL } from "@/lib/config";

const WHY_CHOOSE_US = [
  {
    icon: "✦",
    title: "Produk Terpercaya",
    desc: "Kami menyediakan produk dari merek-merek terpercaya yang telah teruji kualitas dan keamanannya.",
  },
  {
    icon: "✦",
    title: "Lengkap & Beragam",
    desc: "Semua kebutuhan hewan peliharaan dan ternak tersedia dalam satu tempat — dari pakan hingga perlengkapan kandang.",
  },
  {
    icon: "✦",
    title: "Pesan Mudah via WhatsApp",
    desc: "Tidak perlu akun atau checkout rumit. Pilih produk dan kirim pesanan langsung via WhatsApp.",
  },
  {
    icon: "✦",
    title: "Pelayanan Ramah",
    desc: "Tim kami siap membantu Anda memilih produk yang tepat sesuai kebutuhan hewan peliharaan Anda.",
  },
];

export default function HomePage() {
  const categoryProductCounts = PRODUCT_CATEGORIES.map((cat) => ({
    category: cat,
    count: PRODUCTS.filter((p) => p.category === cat).length,
  }));

  return (
    <>
      {/* ── HERO — Deep Maroon with Warm Rose Beige & Rajawali Red ──────────────── */}
      <section className="relative bg-[#861D22] text-white overflow-hidden min-h-[88vh] flex items-center">
        {/* Subtle decorative dot pattern */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #E9DAD5 1px, transparent 1px), radial-gradient(circle at 80% 80%, #E9DAD5 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-3.5 h-3.5 text-[#E9DAD5]" />
              <span className="text-xs font-medium text-[#E9DAD5]">Padang, Sumatera Barat</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5">
              Everything They Need.{" "}
              <span className="text-[#E9DAD5]">All in One Place.</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
              Quality nutrition, trusted supplies, and everyday essentials for pets and poultry — delivered with care from Rajawali.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#B72226] text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#9E1B20] transition-colors shadow-lg border border-white/20"
              >
                Eksplorasi Produk <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Hubungi Kami
              </a>
            </div>
            <div className="flex gap-8 mt-10 pt-8 border-t border-white/15">
              <div>
                <p className="text-2xl font-bold text-[#E9DAD5]">{PRODUCTS.length}+</p>
                <p className="text-sm text-white/70 mt-0.5">Produk Tersedia</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#E9DAD5]">{PRODUCT_CATEGORIES.length}</p>
                <p className="text-sm text-white/70 mt-0.5">Kategori</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#E9DAD5]">100%</p>
                <p className="text-sm text-white/70 mt-0.5">Produk Terpercaya</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0">
            {[
              { icon: "/icons/bird.svg", label: "Pakan Unggas", href: "/shop?category=Pakan Ayam" },
              { icon: "/icons/cat.svg", label: "Makanan Kucing", href: "/shop?category=Makanan Kucing" },
              { icon: "/icons/dog.svg", label: "Makanan Anjing", href: "/shop?category=Makanan Anjing" },
              { icon: "/icons/leaf.svg", label: "Vitamin & Suplemen", href: "/shop?category=Vitamin & Suplemen" },
            ].map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${i % 2 === 0 ? "bg-white/10" : "bg-[#E9DAD5]/15"
                  } backdrop-blur-sm border border-white/20 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain [filter:brightness(0)_invert(1)] group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-xs sm:text-sm font-medium text-white/90">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOP BY CATEGORY ───────────────────────────────── */}
      <section id="categories" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold text-[#7E7873] uppercase tracking-widest mb-1">Jelajahi</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#292725]">Belanja per Kategori</h2>
            </div>
            <Link href="/shop" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#B72226] hover:underline">
              Semua Produk <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {categoryProductCounts.map(({ category, count }) => (
              <CategoryCard key={category} category={category} count={count} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ──────────────────────────────── */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold text-[#7E7873] uppercase tracking-widest mb-1">Produk Pilihan</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#292725]">Produk Unggulan</h2>
            </div>
            <Link href="/shop" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#B72226] hover:underline">
              Lihat Semua <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 min-[360px]:gap-3 sm:gap-4 lg:gap-5">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROMO BANNER ───────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#861D22] to-[#B72226] rounded-3xl px-8 sm:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-sm">
            <div className="absolute right-0 top-0 w-64 h-64 opacity-15" style={{ background: "radial-gradient(circle, #E9DAD5 0%, transparent 70%)" }} />
            <div className="relative z-10 text-center md:text-left">
              <p className="text-sm font-semibold text-[#E9DAD5] uppercase tracking-widest mb-2">Pembelian Massal</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Butuh dalam Jumlah Besar?</h3>
              <p className="text-white/80 text-sm max-w-md">Hubungi kami untuk pembelian massal pakan ternak, perlengkapan kandang, atau produk lainnya dengan penawaran khusus.</p>
            </div>
            <div className="relative z-10 shrink-0">
              <WhatsAppOrderButton
                size="lg"
                variant="white"
                label="Hubungi untuk Harga Grosir"
                className="font-bold text-[#B72226] hover:text-[#861D22]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────── */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-[#7E7873] uppercase tracking-widest mb-1">Keunggulan Kami</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#292725]">Mengapa Memilih Rajawali?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-[#E8E4DF] hover:border-[#B72226]/40 hover:shadow-sm transition-all">
                <div className="text-[#B72226] font-bold text-lg mb-3">{item.icon}</div>
                <h3 className="font-semibold text-[#292725] mb-2">{item.title}</h3>
                <p className="text-sm text-[#7E7873] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOOGLE CUSTOMER REVIEWS ────────────────────────── */}
      <ReviewsSection />

      {/* ── WHATSAPP CTA ───────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="inline-flex w-14 h-14 items-center justify-center bg-[#E9DAD5]/50 rounded-full mb-5">
            <MessageCircle className="w-7 h-7 text-[#B72226]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#292725] mb-3">Ada Pertanyaan? Hubungi Kami</h2>
          <p className="text-[#7E7873] mb-7 leading-relaxed">
            Butuh rekomendasi produk, informasi stok, atau pembelian massal? Tim kami siap membantu Anda langsung via WhatsApp.
          </p>
          <WhatsAppOrderButton size="lg" label="Chat via WhatsApp Sekarang" className="shadow-lg" />
          <p className="text-xs text-[#7E7873] mt-4">Senin — Sabtu, pukul 08.00 — 17.00 WIB</p>
        </div>
      </section>
    </>
  );
}
