# Rajawali Poultry & Pet Store — Website

Modern, minimalist, and production-ready product catalog website for **Rajawali Poultry & Pet Store**, a trusted supplier of poultry feed, pet nutrition, vitamins, supplements, and farm supplies in Padang, West Sumatra, Indonesia.

---

## 🎨 Palet Warna & Art Direction (Rajawali Red Theme)

Warna resmi yang diselaraskan dengan logo resmi **Rajawali Poultry & Pet**:

- **Primary Brand Red (`#B72226`)**: Warna utama logo Rajawali — digunakan untuk tombol aksi primer, badge produk pilihan, penanda harga, dan aksen penting.
- **Deep Maroon (`#861D22`)**: Warna maroon elegan — digunakan pada background Hero section, banner pengumuman, dan footer.
- **Warm White Background (`#FAF8F5`)**: Latar belakang bersih, hangat, dan tidak silau.
- **Soft Rose Beige (`#E9DAD5`)**: Aksen lembut natural untuk latar kartu kategori, badge, dan hover states.
- **Dark Charcoal Text (`#292725`)**: Tipografi tajam dengan tingkat keterbacaan (kontras) tinggi.
- **Subtle Warm Border (`#E8E4DF`)**: Garis batas minimalis dan bersih.

---

## 🌟 Fitur Utama

- **Katalog Lengkap & Terstruktur**: Kategori produk pakan unggas, makanan kucing, makanan anjing, perlengkapan burung, kelinci, suplemen, dan peralatan kandang.
- **Pencarian & Filter Real-Time**:
  - Pencarian nama produk, merek, dan kategori.
  - Filter kategori dan merek.
  - Pengurutan (Pilihan Utama, Harga Terendah, Harga Tertinggi, Nama A–Z).
- **Halaman Detail Produk (`/product/[slug]`)**:
  - Pilihan varian/ukuran dengan kalkulasi harga dinamis.
  - Pengatur kuantitas (quantity selector).
  - Status ketersediaan stok (*Tersedia*, *Stok Terbatas*, *Habis*).
  - Tombol Tambah ke Keranjang & Pesan Langsung via WhatsApp.
  - Rekomendasi produk serupa (*Related Products*).
- **Keranjang Belanja (*Slide-over Drawer*)**:
  - Tambah, ubah kuantitas, atau hapus item.
  - Hitung subtotal dan estimasi total belanja (Rupiah).
  - Notifikasi Toast saat item ditambahkan.
  - Persistensi menggunakan `localStorage` (data keranjang tersimpan meski halaman di-*refresh*).
- **Sistem Pemesanan Langsung via WhatsApp**:
  - **Tanpa checkout rumit, tanpa payment gateway, dan tanpa registrasi akun**.
  - Pesanan diformat otomatis dengan daftar item, kuantitas, varian, dan total harga dalam bahasa yang sopan.
  - Tombol membuka WhatsApp langsung melalui tautan `wa.me` dengan *URL encoding* yang rapi.
- **Halaman Lengkap**:
  - **Beranda (`/`)**: Announcement bar berjalan, Hero editorial maroon, Belanja per Kategori, Produk Unggulan, Banner Pembelian Massal, Keunggulan Kami, dan WhatsApp CTA.
  - **Toko (`/shop`)**: Katalog lengkap dengan filter dan sort interaktif.
  - **Tentang Kami (`/about`)**: Profil, filosofi, dan komitmen toko.
  - **Kontak & Lokasi (`/contact`)**: Alamat fisik toko di Padang, jam operasional, tautan Google Maps, Instagram, dan panduan pemesanan.

---

## ⚙️ Konfigurasi Bisnis & WhatsApp

Semua informasi kontak dan nomor WhatsApp dipusatkan pada satu berkas agar mudah diperbarui:

📁 **`lib/config.ts`**
```typescript
export const SITE_CONFIG = {
  name: "Rajawali Poultry & Pet Store",
  tagline: "Your trusted partner in animal care.",
  instagram: "https://www.instagram.com/rajawali.poultrypet/",
  googleMaps: "https://maps.google.com/?q=Dunia+Unggas+Lubuk+Begalung+Padang",
  address: "Dunia Unggas & Dunia Pet Care Shop, Lubuk Begalung, Padang, West Sumatra, Indonesia",
  email: "info@rajawalipoultrypet.com",
};

export const WHATSAPP_CONFIG = {
  number: "6281364292479",
  defaultMessage: "Halo Rajawali Poultry & Pet Store, saya ingin bertanya mengenai produk yang tersedia.",
};
```

---

## 🚀 Menjalankan Proyek Secara Lokal

1. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) pada peramban Anda.

2. **Build untuk produksi:**
   ```bash
   npm run build
   npm run start
   ```
