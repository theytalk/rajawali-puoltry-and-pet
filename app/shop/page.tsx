"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { PRODUCTS, ALL_BRANDS } from "@/lib/products";
import { PRODUCT_CATEGORIES, ProductCategory } from "@/lib/types";
import { ProductGrid } from "@/components/ProductGrid";

type SortOption = "featured" | "price_asc" | "price_desc" | "name_asc";

const SORT_LABELS: Record<SortOption, string> = {
  featured: "Pilihan Utama",
  price_asc: "Harga: Terendah",
  price_desc: "Harga: Tertinggi",
  name_asc: "Nama A–Z",
};

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [category, setCategory] = useState<ProductCategory | "">(
    (searchParams.get("category") as ProductCategory) ?? ""
  );
  const [brand, setBrand] = useState(searchParams.get("brand") ?? "");
  const [sort, setSort] = useState<SortOption>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Sync URL params
  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category) params.set("category", category);
    if (brand) params.set("brand", brand);
    router.replace(`/shop?${params.toString()}`, { scroll: false });
  }, [query, category, brand]);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    if (category) list = list.filter((p) => p.category === category);
    if (brand) list = list.filter((p) => p.brand === brand);

    switch (sort) {
      case "price_asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "name_asc":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return list;
  }, [query, category, brand, sort]);

  const clearFilters = () => {
    setQuery("");
    setCategory("");
    setBrand("");
    setSort("featured");
  };

  const hasActiveFilters = query || category || brand;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page header */}
      <div className="mb-8">
        <p className="text-xs font-semibold text-[#7E7873] uppercase tracking-widest mb-1">Katalog</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#292725]">
          {category || "Semua Produk"}
        </h1>
        {filtered.length > 0 && (
          <p className="text-sm text-[#7E7873] mt-1">{filtered.length} produk ditemukan</p>
        )}
      </div>

      {/* Search bar */}
      <div className="relative mb-5">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#7E7873]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari produk, merek, atau kategori..."
          className="w-full pl-10 pr-10 py-3 border border-[#E8E4DF] rounded-xl text-sm bg-white text-[#292725] outline-none focus:border-[#B72226] transition-colors"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#7E7873] hover:text-[#292725]"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filters row */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* Mobile filter toggle */}
        <button
          onClick={() => setFiltersOpen((v) => !v)}
          className="lg:hidden flex items-center gap-2 px-4 py-2 border border-[#E8E4DF] rounded-xl text-sm font-medium text-[#292725] bg-white hover:border-[#B72226]"
        >
          <SlidersHorizontal className="w-4 h-4 text-[#B72226]" />
          Filter
        </button>

        {/* Category (desktop) */}
        <div className="hidden lg:flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setCategory("")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              !category ? "bg-[#B72226] text-white shadow-sm" : "bg-white border border-[#E8E4DF] text-[#7E7873] hover:border-[#B72226]"
            }`}
          >
            Semua
          </button>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(category === cat ? "" : cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                category === cat
                  ? "bg-[#B72226] text-white shadow-sm"
                  : "bg-white border border-[#E8E4DF] text-[#7E7873] hover:border-[#B72226]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="ml-auto relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="appearance-none pl-3 pr-8 py-2 border border-[#E8E4DF] rounded-xl text-sm bg-white text-[#292725] outline-none focus:border-[#B72226] cursor-pointer"
          >
            {(Object.keys(SORT_LABELS) as SortOption[]).map((key) => (
              <option key={key} value={key}>{SORT_LABELS[key]}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#7E7873] pointer-events-none" />
        </div>

        {/* Brand filter */}
        <div className="relative">
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="appearance-none pl-3 pr-8 py-2 border border-[#E8E4DF] rounded-xl text-sm bg-white text-[#292725] outline-none focus:border-[#B72226] cursor-pointer"
          >
            <option value="">Semua Merek</option>
            {ALL_BRANDS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#7E7873] pointer-events-none" />
        </div>

        {/* Clear */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-xs text-[#B72226] hover:text-[#861D22] font-semibold"
          >
            <X className="w-3.5 h-3.5" />
            Hapus Filter
          </button>
        )}
      </div>

      {/* Mobile filters panel */}
      {filtersOpen && (
        <div className="lg:hidden bg-white border border-[#E8E4DF] rounded-2xl p-4 mb-6 shadow-sm">
          <p className="text-xs font-semibold text-[#7E7873] uppercase tracking-wider mb-3">Kategori</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory("")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                !category ? "bg-[#B72226] text-white" : "bg-[#FAF8F5] text-[#7E7873]"
              }`}
            >
              Semua
            </button>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(category === cat ? "" : cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                  category === cat ? "bg-[#B72226] text-white" : "bg-[#FAF8F5] text-[#7E7873]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Product grid */}
      <ProductGrid
        products={filtered}
        emptyMessage={
          hasActiveFilters
            ? "Tidak ada produk yang cocok dengan filter Anda. Coba ubah kata kunci atau kategori."
            : "Belum ada produk tersedia."
        }
      />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="animate-pulse text-[#7E7873]">Memuat produk...</div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
