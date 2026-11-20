"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCT_CATEGORIES } from "@/lib/types";
import { useDisclosure } from "@/hooks/useDisclosure";

const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Toko", href: "/shop" },
  { label: "Kategori", href: "#categories", hasDropdown: true },
  { label: "Tentang", href: "/about" },
  { label: "Kontak", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const mobileMenu = useDisclosure();
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [catDropdown, setCatDropdown] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const catRef = useRef<HTMLDivElement>(null);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Open cart drawer via event
  useEffect(() => {
    const handler = () => setCartOpen(true);
    window.addEventListener("open-cart", handler);
    return () => window.removeEventListener("open-cart", handler);
  }, []);

  // Close cat dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (catRef.current && !catRef.current.contains(e.target as Node)) {
        setCatDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?q=${encodeURIComponent(searchQuery.trim())}`;
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const openCart = () => {
    window.dispatchEvent(new Event("open-cart"));
  };

  return (
    <>
      {/* Announcement Bar — Deep Maroon with Soft Rose Beige text */}
      <div className="bg-[#861D22] text-[#E9DAD5] text-xs py-2 overflow-hidden border-b border-[#B72226]/30">
        <div className="flex whitespace-nowrap marquee-track">
          {[1, 2].map((_, i) => (
            <span key={i} className="inline-flex gap-16 px-8 font-medium">
              <span>✦ Mitra Terpercaya Kebutuhan Hewan &amp; Ternak Anda</span>
              <span>✦ Pakan Berkualitas untuk Ayam, Kucing, Anjing &amp; Burung</span>
              <span>✦ Pesan Cepat Langsung via WhatsApp</span>
              <span>✦ Lubuk Begalung, Padang, Sumatera Barat</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 bg-white border-b border-[#E8E4DF] transition-shadow duration-200 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center shrink-0 py-1"
              aria-label="Dunia Pet Care & Store Logo"
            >
              <Image
                src="/images/logo.jpg"
                alt="Dunia Pet Care & Store Logo"
                width={120}
                height={120}
                priority
                className="h-11 sm:h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative" ref={catRef}>
                    <button
                      onClick={() => setCatDropdown((v) => !v)}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        pathname.startsWith("/shop")
                          ? "text-[#B72226]"
                          : "text-[#7E7873] hover:text-[#B72226]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${catDropdown ? "rotate-180" : ""}`}
                      />
                    </button>
                    {catDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-[#E8E4DF] rounded-xl shadow-lg py-2 z-50">
                        {PRODUCT_CATEGORIES.map((cat) => (
                          <Link
                            key={cat}
                            href={`/shop?category=${encodeURIComponent(cat)}`}
                            onClick={() => setCatDropdown(false)}
                            className="block px-4 py-2 text-sm text-[#292725] hover:bg-[#E9DAD5]/40 hover:text-[#B72226] transition-colors"
                          >
                            {cat}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-[#B72226]"
                        : "text-[#7E7873] hover:text-[#B72226]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              {searchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    ref={searchRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari produk..."
                    className="w-40 sm:w-56 text-sm border border-[#E8E4DF] rounded-lg px-3 py-1.5 outline-none focus:border-[#B72226] bg-white text-[#292725]"
                  />
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="ml-1 p-1.5 rounded-lg text-[#7E7873] hover:text-[#B72226]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 rounded-lg text-[#7E7873] hover:text-[#B72226] hover:bg-[#E9DAD5]/30 transition-colors"
                  aria-label="Cari produk"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}

              {/* Cart Button */}
              <button
                onClick={openCart}
                className="relative p-2 rounded-lg text-[#7E7873] hover:text-[#B72226] hover:bg-[#E9DAD5]/30 transition-colors"
                aria-label={`Keranjang — ${itemCount} item`}
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center bg-[#B72226] text-white text-[10px] font-bold rounded-full leading-none px-1">
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={mobileMenu.toggle}
                className="lg:hidden p-2 rounded-lg text-[#7E7873] hover:text-[#B72226] hover:bg-[#E9DAD5]/30 transition-colors"
                aria-label="Menu"
              >
                {mobileMenu.isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu.isOpen && (
          <div className="lg:hidden border-t border-[#E8E4DF] bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {NAV_LINKS.filter((l) => !l.hasDropdown).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={mobileMenu.close}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-[#E9DAD5]/50 text-[#861D22] font-semibold"
                      : "text-[#292725] hover:bg-[#E9DAD5]/30"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-[#E8E4DF]">
                <p className="px-3 py-1.5 text-xs font-semibold text-[#7E7873] uppercase tracking-wider">
                  Kategori
                </p>
                {PRODUCT_CATEGORIES.map((cat) => (
                  <Link
                    key={cat}
                    href={`/shop?category=${encodeURIComponent(cat)}`}
                    onClick={mobileMenu.close}
                    className="block px-3 py-2 text-sm text-[#292725] hover:bg-[#E9DAD5]/30 rounded-lg transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
