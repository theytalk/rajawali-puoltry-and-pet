export interface CustomerReview {
  id: string;
  name: string;
  rating: number; // 1 to 5
  review: string;
  date?: string;
  source: "Google";
}

/**
 * Data ulasan pelanggan dari Google Maps (Dunia Unggas & Dunia Pet Care Lubuk Begalung Padang).
 * Data di bawah menggunakan penanda placeholder development yang jelas dan aman.
 * Masukkan ulasan asli pelanggan publik dari Google Maps di sini sebelum production.
 */
export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "review-1",
    name: "Pelanggan Google (Placeholder)",
    rating: 5,
    review:
      "Toko pakan dan perlengkapan hewan terlengkap di Padang. Pelayanan ramah, respon via WhatsApp cepat, dan pilihan pakan ayam maupun pet care sangat berkualitas.",
    date: "Ulasan Google Maps",
    source: "Google",
  },
  {
    id: "review-2",
    name: "Pelanggan Google (Placeholder)",
    rating: 5,
    review:
      "Harga sangat bersaing baik untuk eceran maupun partai besar / grosir. Lokasi strategis di Jl. By Pass Lubuk Begalung, tempat langganan untuk kebutuhan ternak dan kucing.",
    date: "Ulasan Google Maps",
    source: "Google",
  },
  {
    id: "review-3",
    name: "Pelanggan Google (Placeholder)",
    rating: 5,
    review:
      "Produk pakan selalu fresh dan banyak varian vitamin unggas yang sulit dicari di tempat lain ada di sini. Sangat direkomendasikan untuk peternak dan cat lovers.",
    date: "Ulasan Google Maps",
    source: "Google",
  },
];
