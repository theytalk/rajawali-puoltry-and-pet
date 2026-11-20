import type { Metadata } from "next";
import { MapPin, Phone, Clock, Mail, MessageSquare, ExternalLink } from "lucide-react";
import { SITE_CONFIG, WHATSAPP_URL, WHATSAPP_CONFIG } from "@/lib/config";
import { WhatsAppOrderButton } from "@/components/WhatsAppOrderButton";

export const metadata: Metadata = {
  title: "Kontak & Lokasi",
  description: `Hubungi ${SITE_CONFIG.name} di Padang, Sumatera Barat. Layanan pemesanan via WhatsApp, konsultasi produk, dan informasi alamat toko.`,
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header — Deep Maroon */}
      <section className="bg-[#861D22] text-white py-14 sm:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #E9DAD5 1px, transparent 1px), radial-gradient(circle at 80% 80%, #E9DAD5 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider uppercase text-[#E9DAD5] mb-4 border border-white/20">
            Hubungi Kami
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Kami Siap Membantu Anda
          </h1>
          <p className="text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            Punya pertanyaan mengenai stok produk, rekomendasi nutrisi, atau pemesanan skala besar? Silakan hubungi kami melalui saluran berikut.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 sm:py-18 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Details Card */}
          <div className="lg:col-span-1 bg-white rounded-3xl p-7 sm:p-8 border border-[#E8E4DF] shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#292725] mb-6">
                Informasi Kontak
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E9DAD5] text-[#861D22] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#7E7873] uppercase tracking-wider mb-1">
                      WhatsApp Pemesanan
                    </h3>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#B72226] hover:underline"
                    >
                      +{WHATSAPP_CONFIG.number}
                    </a>
                    <p className="text-xs text-[#7E7873] mt-0.5">
                      Respon cepat saat jam operasional
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E9DAD5] text-[#861D22] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#7E7873] uppercase tracking-wider mb-1">
                      Instagram Resmi
                    </h3>
                    <a
                      href={SITE_CONFIG.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#B72226] hover:underline"
                    >
                      @rajawali.poultrypet
                    </a>
                    <p className="text-xs text-[#7E7873] mt-0.5">
                      Pembaruan produk &amp; info terkini
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E9DAD5] text-[#861D22] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#7E7873] uppercase tracking-wider mb-1">
                      Jam Operasional
                    </h3>
                    <p className="text-sm font-semibold text-[#292725]">
                      Senin – Sabtu: 08.00 – 17.00 WIB
                    </p>
                    <p className="text-xs text-[#7E7873] mt-0.5">
                      Minggu / Hari Libur: Konfirmasi via WA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E9DAD5] text-[#861D22] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#7E7873] uppercase tracking-wider mb-1">
                      Email
                    </h3>
                    <p className="text-sm font-medium text-[#292725]">
                      {SITE_CONFIG.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8E4DF]">
              <WhatsAppOrderButton
                size="md"
                label="Mulai Chat WhatsApp"
                className="w-full"
              />
            </div>
          </div>

          {/* Location & Map Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-7 sm:p-8 border border-[#E8E4DF] shadow-sm flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-[#292725]">
                  Lokasi Toko Fisik
                </h2>
                <p className="text-xs text-[#7E7873] mt-1">
                  Kunjungi gerai kami di Padang, Sumatera Barat
                </p>
              </div>
              <a
                href={SITE_CONFIG.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-[#E9DAD5] text-[#861D22] hover:bg-[#DFCDC6] transition-colors self-start"
              >
                Buka di Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Address Banner */}
            <div className="bg-[#FAF8F5] rounded-2xl p-5 mb-6 flex items-start gap-3.5 border border-[#E8E4DF]">
              <MapPin className="w-5 h-5 text-[#B72226] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#7E7873] uppercase tracking-wider mb-0.5">
                  Alamat Lengkap
                </p>
                <p className="text-sm font-semibold text-[#292725] leading-relaxed">
                  {SITE_CONFIG.address}
                </p>
              </div>
            </div>

            {/* Interactive Map Visual Placeholder */}
            <div className="flex-1 min-h-[280px] rounded-2xl bg-[#E9DAD5]/30 border border-dashed border-[#861D22]/20 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-[#B72226] mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-[#861D22] mb-1">
                Rajawali Poultry &amp; Pet Store
              </h3>
              <p className="text-xs text-[#7E7873] max-w-sm mb-5">
                Dunia Unggas &amp; Dunia Pet Care Shop, Lubuk Begalung, Kota Padang
              </p>
              <a
                href={SITE_CONFIG.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#B72226] text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#861D22] transition-colors shadow-sm"
              >
                Petunjuk Arah Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Order FAQ Guide */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-[#E8E4DF]">
          <h2 className="text-lg font-bold text-[#292725] mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#B72226]" />
            Cara Mudah Memesan di Rajawali
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-[#7E7873]">
            <div className="border-l-2 border-[#B72226] pl-4">
              <p className="font-bold text-[#292725] mb-1">1. Pilih Produk</p>
              <p className="leading-relaxed">
                Jelajahi katalog di halaman Toko, tentukan varian atau ukuran, lalu klik Tambah ke Keranjang.
              </p>
            </div>
            <div className="border-l-2 border-[#B72226] pl-4">
              <p className="font-bold text-[#292725] mb-1">2. Periksa Keranjang</p>
              <p className="leading-relaxed">
                Buka ikon keranjang di kanan atas, sesuaikan kuantitas pesanan, lalu klik &quot;Pesan via WhatsApp&quot;.
              </p>
            </div>
            <div className="border-l-2 border-[#B72226] pl-4">
              <p className="font-bold text-[#292725] mb-1">3. Konfirmasi Pesanan</p>
              <p className="leading-relaxed">
                Format pesanan otomatis terisi di chat WhatsApp. Tim kami akan mengonfirmasi stok, opsi pengiriman, dan total akhir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
