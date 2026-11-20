"use client";

import React from "react";
import Link from "next/link";
import { ProductCategory } from "@/lib/types";

interface CategoryCardProps {
  category: ProductCategory;
  count?: number;
}

const CATEGORY_DATA: Record<
  string,
  { icon: string; description: string }
> = {
  "Pakan Ayam": {
    icon: "/icons/wheat.svg",
    description: "Pakan lengkap untuk ayam broiler, petelur & kampung",
  },
  "Suplemen Ayam": {
    icon: "/icons/pill.svg",
    description: "Vitamin & suplemen untuk kesehatan unggas",
  },
  "Makanan Kucing": {
    icon: "/icons/cat.svg",
    description: "Makanan kering & basah berkualitas untuk kucing",
  },
  "Makanan Anjing": {
    icon: "/icons/dog.svg",
    description: "Nutrisi lengkap untuk anjing berbagai usia",
  },
  "Perlengkapan Burung": {
    icon: "/icons/bird.svg",
    description: "Pakan, sangkar & aksesoris untuk burung peliharaan",
  },
  "Perlengkapan Kelinci": {
    icon: "/icons/rabbit.svg",
    description: "Hay, pellet, dan perlengkapan untuk kelinci",
  },
  "Vitamin & Suplemen": {
    icon: "/icons/leaf.svg",
    description: "Suplemen multivitamin untuk semua hewan peliharaan",
  },
  "Peralatan Kandang": {
    icon: "/icons/birdhouse.svg",
    description: "Kandang, feeder, drinker & pemanas",
  },
};

export function CategoryCard({ category, count }: CategoryCardProps) {
  const data = CATEGORY_DATA[category] ?? {
    icon: "/icons/leaf.svg",
    description: "",
  };

  return (
    <Link
      href={`/shop?category=${encodeURIComponent(category)}`}
      aria-label={`Kategori ${category}`}
      className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-[18px] bg-white border border-[#E8E4DF] transition-all duration-200 hover:border-[#B72226]/40 hover:-translate-y-[3px] hover:shadow-md h-full justify-between"
    >
      <div className="flex flex-col items-center w-full">
        {/* Consistent 34px Vector Icon in soft warm background badge */}
        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#FAF0ED] flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#E9DAD5]/80 transition-colors duration-200">
          <div
            aria-hidden="true"
            className="w-[34px] h-[34px] bg-[#B72226] group-hover:bg-[#861D22] transition-colors duration-200"
            style={{
              maskImage: `url(${data.icon})`,
              WebkitMaskImage: `url(${data.icon})`,
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
          />
        </div>

        {/* Category name: medium weight, dark charcoal */}
        <h3 className="font-medium text-sm sm:text-base text-[#292725] mb-1.5 leading-snug group-hover:text-[#B72226] transition-colors">
          {category}
        </h3>

        {/* Description: muted gray */}
        <p className="text-xs text-[#7E7873] leading-relaxed line-clamp-2">
          {data.description}
        </p>
      </div>

      {/* Product count: smaller text in Rajawali red */}
      {count !== undefined && (
        <span className="mt-3 sm:mt-4 text-xs font-semibold text-[#B72226]">
          {count} produk
        </span>
      )}
    </Link>
  );
}
