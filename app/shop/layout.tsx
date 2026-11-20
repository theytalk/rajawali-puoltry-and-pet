import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toko",
  description: "Jelajahi semua produk pakan, makanan hewan, dan perlengkapan kandang di Rajawali Poultry & Pet Store.",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

