import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, HeartHandshake, Award, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { WhatsAppOrderButton } from "@/components/WhatsAppOrderButton";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Mengenal ${SITE_CONFIG.name} — Mitra terpercaya peternak, pemilik hewan peliharaan, dan penghobi di Padang, Sumatera Barat.`,
};

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Kualitas & Keaslian Terjamin",
      desc: "Seluruh pakan, suplemen, dan obat-obatan yang kami sediakan berasal dari distributor resmi serta merek terverifikasi demi keamanan hewan kesayangan dan ternak Anda.",
    },
    {
      icon: HeartHandshake,
      title: "Pelayanan Berbasis Edukasi",
      desc: "Kami percaya bahwa perawatan hewan yang baik membutuhkan pemahaman yang tepat. Tim kami siap memberikan konsultasi ramah terkait pemilihan pakan dan nutrisi.",
    },
    {
      icon: Award,
      title: "Pilihan Lengkap & Relevan",
      desc: "Mulai dari skala peternakan ayam broiler & layer, penghobi burung berkicau, hingga pecinta kucing, kelinci, dan anjing — semua kebutuhan dasar tersedia di satu pintu.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Hero Header — Deep Maroon */}
      <section className="bg-[#861D22] text-white py-16 sm:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #E9DAD5 1px, transparent 1px), radial-gradient(circle at 80% 80%, #E9DAD5 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider uppercase text-[#E9DAD5] mb-4 border border-white/20">
            Tentang Kami
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Dedikasi untuk Nutrisi &amp; Kesejahteraan Hewan Anda
          </h1>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            {SITE_CONFIG.name} hadir sebagai mitra terpercaya bagi peternak, pemilik hewan peliharaan, dan breeder di wilayah Padang dan sekitarnya.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8E4DF] shadow-sm grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-bold text-[#7E7873] uppercase tracking-widest block mb-2">
              Cerita &amp; Komitmen
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#292725] mb-4 leading-snug">
              Bukan Sekadar Toko Pakan, Melainkan Rekan Bertumbuh
            </h2>
            <div className="space-y-4 text-sm text-[#7E7873] leading-relaxed">
              <p>
                Didirikan dengan komitmen untuk menyediakan pakan bermutu dan perlengkapan perawatan hewan yang handal, kami memahami bahwa keberhasilan peternakan dan kesehatan pet sangat dipengaruhi oleh kualitas nutrisi harian.
              </p>
              <p>
                Oleh karena itu, kami menyeleksi produk pakan unggas, kucing, anjing, kelinci, dan burung dari formulasi nutrisi terbaik. Kami mengutamakan kepuasan pelanggan melalui kemudahan pemesanan cepat tanpa hambatan birokrasi.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#E8E4DF] flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#B72226] shrink-0" />
              <div className="text-xs text-[#292725]">
                <p className="font-semibold">Lokasi Toko Fisik:</p>
                <p className="text-[#7E7873]">{SITE_CONFIG.address}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF0ED] border border-[#E9DAD5] rounded-2xl p-8 flex flex-col justify-center items-center text-center">
            <div className="text-6xl mb-4 select-none">🏡</div>
            <h3 className="text-xl font-bold text-[#861D22] mb-2">
              Kenyamanan Belanja Fleksibel
            </h3>
            <p className="text-xs text-[#292725]/80 leading-relaxed max-w-sm mb-6">
              Pilih produk secara santai melalui katalog online kami, lalu cukup klik tombol WhatsApp untuk konfirmasi stok, negosiasi kuantitas, atau pertanyaan teknis.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-[#B72226] text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#861D22] transition-colors shadow-sm"
            >
              Lihat Katalog Produk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-12 pb-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#7E7873] uppercase tracking-widest block mb-1">
            Nilai Utama
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#292725]">
            Mengapa Pelanggan Mempercayai Kami
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-[#E8E4DF] shadow-sm hover:border-[#B72226]/40 transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E9DAD5] text-[#861D22] flex items-center justify-center mb-5 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#292725] mb-3">{item.title}</h3>
                <p className="text-sm text-[#7E7873] leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E4DF] text-center flex flex-col items-center shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-[#292725] mb-3">
            Siap Memenuhi Kebutuhan Pakan &amp; Perawatan Hewan Anda?
          </h3>
          <p className="text-sm text-[#7E7873] max-w-xl mb-6">
            Tim kami dengan senang hati membantu Anda memilih produk yang paling cocok untuk skala rumahan maupun usaha peternakan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/shop"
              className="px-6 py-3 rounded-xl bg-[#861D22] text-white text-sm font-semibold hover:bg-[#B72226] transition-colors"
            >
              Jelajahi Produk
            </Link>
            <WhatsAppOrderButton
              size="md"
              label="Konsultasi via WhatsApp"
              className="shadow-sm"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
