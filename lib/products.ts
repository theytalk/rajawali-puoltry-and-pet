// ============================================================
// MOCK PRODUCT DATA
// ⚠️ These are SAMPLE products for demonstration only.
// Prices, brands, stock, and descriptions are PLACEHOLDER values.
// Replace with real product catalog before launch.
// ============================================================

import { Product } from "./types";

export const PRODUCTS: Product[] = [
  // ── PAKAN AYAM ───────────────────────────────────────────
  {
    id: "p001",
    slug: "pakan-ayam-broiler-511-50kg",
    name: "Pakan Ayam Broiler 511",
    brand: "Pokphand",
    category: "Pakan Ayam",
    price: 285000,
    description:
      "Pakan lengkap untuk ayam broiler fase starter (umur 1–21 hari). Diformulasikan untuk pertumbuhan optimal dengan nutrisi seimbang. Kandungan protein tinggi membantu perkembangan otot yang baik.",
    images: ["/images/products/placeholder-feed.jpg"],
    stock: "in_stock",
    variants: [
      { label: "10 kg", value: "10kg" },
      { label: "25 kg", value: "25kg" },
      { label: "50 kg", value: "50kg", priceModifier: 285000 },
    ],
    featured: true,
    tags: ["broiler", "pakan", "ayam"],
    weight: "50 kg",
  },
  {
    id: "p002",
    slug: "pakan-ayam-layer-124-50kg",
    name: "Pakan Ayam Petelur 124",
    brand: "Pokphand",
    category: "Pakan Ayam",
    price: 310000,
    description:
      "Pakan untuk ayam petelur fase produksi. Mengandung kalsium tinggi untuk mendukung kualitas cangkang telur yang kuat. Formula khusus menjaga produktivitas telur tetap optimal.",
    images: ["/images/products/placeholder-feed.jpg"],
    stock: "in_stock",
    variants: [
      { label: "25 kg", value: "25kg" },
      { label: "50 kg", value: "50kg", priceModifier: 310000 },
    ],
    featured: false,
    tags: ["petelur", "layer", "pakan", "ayam"],
    weight: "50 kg",
  },
  {
    id: "p003",
    slug: "pakan-konsentrat-ayam-kampung",
    name: "Konsentrat Ayam Kampung",
    brand: "Comfeed",
    category: "Pakan Ayam",
    price: 125000,
    description:
      "Konsentrat pakan ayam kampung dengan formula nutrisi lengkap. Campurkan dengan bahan baku lokal untuk hasil pakan yang ekonomis namun berkualitas.",
    images: ["/images/products/placeholder-feed.jpg"],
    stock: "in_stock",
    variants: [
      { label: "5 kg", value: "5kg" },
      { label: "10 kg", value: "10kg", priceModifier: 125000 },
    ],
    featured: false,
    tags: ["kampung", "konsentrat", "pakan"],
  },

  // ── SUPLEMEN AYAM ────────────────────────────────────────
  {
    id: "p004",
    slug: "vita-chick-supplement-ayam",
    name: "Vita Chick Suplemen Ayam",
    brand: "Medion",
    category: "Suplemen Ayam",
    price: 32000,
    description:
      "Suplemen vitamin lengkap untuk ayam broiler dan petelur. Membantu meningkatkan daya tahan tubuh, mempercepat pertumbuhan, dan mengurangi tingkat kematian. Larut sempurna dalam air minum.",
    images: ["/images/products/placeholder-supplement.jpg"],
    stock: "in_stock",
    variants: [
      { label: "100 g", value: "100g" },
      { label: "500 g", value: "500g", priceModifier: 32000 },
    ],
    featured: true,
    tags: ["vitamin", "suplemen", "ayam", "broiler"],
  },
  {
    id: "p005",
    slug: "elektrolit-ayam-stress-mineral",
    name: "Elektrolit Plus Mineral",
    brand: "Vetafarm",
    category: "Suplemen Ayam",
    price: 48000,
    description:
      "Larutan elektrolit dan mineral untuk ayam yang mengalami stres akibat cuaca panas, transportasi, atau vaksinasi. Membantu pemulihan cepat dan menjaga keseimbangan cairan tubuh.",
    images: ["/images/products/placeholder-supplement.jpg"],
    stock: "low_stock",
    variants: [
      { label: "100 g", value: "100g" },
      { label: "250 g", value: "250g", priceModifier: 48000 },
    ],
    featured: false,
    tags: ["elektrolit", "mineral", "stres", "ayam"],
  },

  // ── MAKANAN KUCING ───────────────────────────────────────
  {
    id: "p006",
    slug: "royal-canin-kitten-2kg",
    name: "Royal Canin Kitten",
    brand: "Royal Canin",
    category: "Makanan Kucing",
    price: 285000,
    description:
      "Makanan kering khusus untuk anak kucing hingga usia 12 bulan. Formula nutrisi presisi mendukung pertumbuhan optimal, perkembangan otak, dan sistem imun yang kuat. Kibble berukuran kecil mudah dikunyah.",
    images: ["/images/products/placeholder-catfood.jpg"],
    stock: "in_stock",
    variants: [
      { label: "400 g", value: "400g" },
      { label: "2 kg", value: "2kg", priceModifier: 285000 },
      { label: "4 kg", value: "4kg", priceModifier: 530000 },
    ],
    featured: true,
    tags: ["kitten", "kucing", "dry food", "royal canin"],
    weight: "2 kg",
  },
  {
    id: "p007",
    slug: "whiskas-adult-tuna-1-2kg",
    name: "Whiskas Adult Tuna",
    brand: "Whiskas",
    category: "Makanan Kucing",
    price: 68000,
    description:
      "Makanan kering untuk kucing dewasa dengan rasa tuna favorit. Diformulasikan dengan vitamin, mineral, dan nutrisi esensial untuk menjaga kesehatan kucing dewasa sehari-hari.",
    images: ["/images/products/placeholder-catfood.jpg"],
    stock: "in_stock",
    variants: [
      { label: "480 g", value: "480g" },
      { label: "1.2 kg", value: "1-2kg", priceModifier: 68000 },
    ],
    featured: false,
    tags: ["kucing", "dewasa", "tuna", "whiskas"],
    weight: "1.2 kg",
  },
  {
    id: "p008",
    slug: "friskies-wet-food-kucing-85g",
    name: "Friskies Wet Food Kucing",
    brand: "Friskies",
    category: "Makanan Kucing",
    price: 12500,
    description:
      "Makanan basah berkualitas untuk kucing dewasa dalam berbagai pilihan rasa. Kandungan air tinggi membantu menjaga hidrasi kucing. Cocok sebagai makanan utama atau pelengkap.",
    images: ["/images/products/placeholder-catfood.jpg"],
    stock: "in_stock",
    variants: [
      { label: "Tuna & Wortel", value: "tuna-wortel" },
      { label: "Ayam & Hati", value: "ayam-hati" },
      { label: "Tuna & Udang", value: "tuna-udang" },
    ],
    featured: false,
    tags: ["kucing", "wet food", "friskies"],
    weight: "85 g",
  },

  // ── MAKANAN ANJING ───────────────────────────────────────
  {
    id: "p009",
    slug: "pedigree-adult-chicken-rice-3kg",
    name: "Pedigree Adult Chicken & Rice",
    brand: "Pedigree",
    category: "Makanan Anjing",
    price: 128000,
    description:
      "Makanan kering lengkap untuk anjing dewasa dengan protein dari ayam dan karbohidrat dari beras. Diformulasikan untuk mendukung kesehatan gigi, bulu berkilau, dan vitalitas optimal setiap hari.",
    images: ["/images/products/placeholder-dogfood.jpg"],
    stock: "in_stock",
    variants: [
      { label: "1.5 kg", value: "1-5kg" },
      { label: "3 kg", value: "3kg", priceModifier: 128000 },
      { label: "8 kg", value: "8kg", priceModifier: 320000 },
    ],
    featured: true,
    tags: ["anjing", "dewasa", "pedigree", "dry food"],
    weight: "3 kg",
  },
  {
    id: "p010",
    slug: "cesar-wet-food-anjing-100g",
    name: "Cesar Wet Food Anjing",
    brand: "Cesar",
    category: "Makanan Anjing",
    price: 18500,
    description:
      "Makanan basah premium untuk anjing kecil dan dewasa. Tekstur lembut dan aroma menggugah selera memastikan anjing makan dengan lahap. Nutrisi lengkap dalam setiap sajian.",
    images: ["/images/products/placeholder-dogfood.jpg"],
    stock: "in_stock",
    variants: [
      { label: "Ayam & Hati", value: "ayam-hati" },
      { label: "Daging Sapi", value: "daging-sapi" },
    ],
    featured: false,
    tags: ["anjing", "wet food", "cesar"],
    weight: "100 g",
  },

  // ── PERLENGKAPAN BURUNG ──────────────────────────────────
  {
    id: "p011",
    slug: "pakan-burung-kenari-gold-finch",
    name: "Pakan Kenari Gold Finch Mix",
    brand: "Lovebird Indo",
    category: "Perlengkapan Burung",
    price: 24000,
    description:
      "Campuran biji-bijian premium untuk burung kenari dan finch. Formulasi seimbang memastikan kecukupan nutrisi harian, mendukung kesehatan bulu, dan kualitas kicauan burung.",
    images: ["/images/products/placeholder-bird.jpg"],
    stock: "in_stock",
    variants: [
      { label: "500 g", value: "500g" },
      { label: "1 kg", value: "1kg", priceModifier: 24000 },
    ],
    featured: false,
    tags: ["kenari", "finch", "biji", "burung"],
    weight: "500 g",
  },
  {
    id: "p012",
    slug: "sangkar-burung-bambu-minimalis",
    name: "Sangkar Burung Bambu Minimalis",
    brand: "Karya Lokal",
    category: "Perlengkapan Burung",
    price: 85000,
    description:
      "Sangkar burung dari bambu pilihan dengan desain minimalis. Cocok untuk kenari, lovebird, atau burung kecil lainnya. Finishing rapi dan tahan lama.",
    images: ["/images/products/placeholder-bird.jpg"],
    stock: "low_stock",
    variants: [
      { label: "Ukuran S", value: "small" },
      { label: "Ukuran M", value: "medium", priceModifier: 85000 },
    ],
    featured: false,
    tags: ["sangkar", "burung", "bambu"],
  },

  // ── PERLENGKAPAN KELINCI ──────────────────────────────────
  {
    id: "p013",
    slug: "pakan-kelinci-timothy-hay-500g",
    name: "Timothy Hay Premium",
    brand: "Oxbow",
    category: "Perlengkapan Kelinci",
    price: 55000,
    description:
      "Jerami timothy kering premium untuk kelinci dewasa dan guinea pig. Tinggi serat alami mendukung sistem pencernaan yang sehat dan menjaga gigi agar tidak terlalu panjang.",
    images: ["/images/products/placeholder-rabbit.jpg"],
    stock: "in_stock",
    variants: [
      { label: "500 g", value: "500g" },
      { label: "1 kg", value: "1kg", priceModifier: 55000 },
    ],
    featured: false,
    tags: ["kelinci", "timothy", "hay", "jerami"],
    weight: "500 g",
  },
  {
    id: "p014",
    slug: "pakan-pellet-kelinci-mini",
    name: "Pellet Kelinci Mini Premium",
    brand: "Vitaline",
    category: "Perlengkapan Kelinci",
    price: 38000,
    description:
      "Pakan pellet bernutrisi lengkap untuk kelinci mini dan kelinci dwarf. Diperkaya vitamin, mineral, dan serat untuk mendukung pertumbuhan sehat dan bulu yang berkilau.",
    images: ["/images/products/placeholder-rabbit.jpg"],
    stock: "in_stock",
    variants: [
      { label: "500 g", value: "500g" },
      { label: "1 kg", value: "1kg", priceModifier: 38000 },
    ],
    featured: false,
    tags: ["kelinci", "pellet", "pakan"],
  },

  // ── VITAMIN & SUPLEMEN ───────────────────────────────────
  {
    id: "p015",
    slug: "vitamin-hewan-peliharaan-multi-vit",
    name: "Multi-Vit Hewan Peliharaan",
    brand: "Vetafarm",
    category: "Vitamin & Suplemen",
    price: 75000,
    description:
      "Suplemen multivitamin komprehensif untuk berbagai hewan peliharaan termasuk kucing, anjing, burung, dan kelinci. Formula cair mudah diberikan langsung atau dicampur dengan makanan.",
    images: ["/images/products/placeholder-vitamin.jpg"],
    stock: "in_stock",
    variants: [
      { label: "100 ml", value: "100ml" },
      { label: "250 ml", value: "250ml", priceModifier: 75000 },
    ],
    featured: true,
    tags: ["vitamin", "multivit", "suplemen", "kucing", "anjing"],
    weight: "250 ml",
  },
  {
    id: "p016",
    slug: "probiotik-ternak-bio-lacto",
    name: "Bio-Lacto Probiotik Ternak",
    brand: "Medion",
    category: "Vitamin & Suplemen",
    price: 42000,
    description:
      "Probiotik khusus untuk ternak unggas yang mendukung keseimbangan flora usus, meningkatkan penyerapan nutrisi, dan memperkuat sistem imun. Efektif mengurangi tingkat diare pada unggas.",
    images: ["/images/products/placeholder-vitamin.jpg"],
    stock: "in_stock",
    variants: [
      { label: "100 g", value: "100g" },
      { label: "500 g", value: "500g", priceModifier: 42000 },
    ],
    featured: false,
    tags: ["probiotik", "unggas", "ternak", "suplemen"],
  },

  // ── PERALATAN KANDANG ────────────────────────────────────
  {
    id: "p017",
    slug: "tempat-minum-ayam-otomatis-5l",
    name: "Tempat Minum Ayam Otomatis",
    brand: "PoultryCare",
    category: "Peralatan Kandang",
    price: 45000,
    description:
      "Tempat minum ayam otomatis kapasitas 5 liter dengan sistem nipple drinker. Air mengalir bersih hanya saat disentuh, mengurangi pemborosan air dan risiko kontaminasi bakteri.",
    images: ["/images/products/placeholder-equipment.jpg"],
    stock: "in_stock",
    variants: [
      { label: "5 Liter", value: "5l" },
      { label: "10 Liter", value: "10l", priceModifier: 45000 },
    ],
    featured: false,
    tags: ["tempat minum", "nipple drinker", "ayam", "kandang"],
  },
  {
    id: "p018",
    slug: "feeder-ayam-kapasitas-5kg",
    name: "Feeder Ayam Galvanis 5 kg",
    brand: "PoultryCare",
    category: "Peralatan Kandang",
    price: 68000,
    description:
      "Tempat pakan ayam dari bahan galvanis anti karat dengan kapasitas 5 kg. Desain anti tumpah mengurangi pemborosan pakan. Mudah dibersihkan dan tahan lama untuk penggunaan kandang.",
    images: ["/images/products/placeholder-equipment.jpg"],
    stock: "in_stock",
    variants: [
      { label: "5 kg", value: "5kg" },
      { label: "10 kg", value: "10kg", priceModifier: 68000 },
    ],
    featured: false,
    tags: ["feeder", "tempat makan", "ayam", "galvanis"],
  },
  {
    id: "p019",
    slug: "kandang-kucing-lipat-portable",
    name: "Kandang Kucing Lipat Portable",
    brand: "PetHome",
    category: "Peralatan Kandang",
    price: 185000,
    description:
      "Kandang kucing lipat serbaguna dari bahan besi berlapis powder coating anti karat. Mudah dilipat dan dibawa bepergian. Pintu ganda memudahkan akses dan alas bisa dilepas untuk dibersihkan.",
    images: ["/images/products/placeholder-equipment.jpg"],
    stock: "low_stock",
    variants: [
      { label: "60×45×45 cm", value: "small" },
      { label: "80×55×55 cm", value: "medium", priceModifier: 185000 },
    ],
    featured: true,
    tags: ["kandang", "kucing", "portable", "lipat"],
  },
  {
    id: "p020",
    slug: "pemanas-kandang-brooder-250w",
    name: "Pemanas Kandang Brooder 250W",
    brand: "ThermoFarm",
    category: "Peralatan Kandang",
    price: 95000,
    description:
      "Lampu pemanas infrared 250W untuk kandang anak ayam (DOC) dan anak hewan. Panas merata, hemat listrik, dan tahan lama. Cocok untuk kandang brooder dengan kapasitas 50–100 ekor DOC.",
    images: ["/images/products/placeholder-equipment.jpg"],
    stock: "in_stock",
    variants: [
      { label: "250 W", value: "250w" },
      { label: "375 W", value: "375w", priceModifier: 95000 },
    ],
    featured: false,
    tags: ["brooder", "pemanas", "DOC", "kandang"],
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured);

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, limit);
}

export const ALL_BRANDS = Array.from(new Set(PRODUCTS.map((p) => p.brand))).sort();

