"use client";

import React, { useState } from "react";
import { Star, ExternalLink, Quote } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { CUSTOMER_REVIEWS, CustomerReview } from "@/lib/reviews";

function GoogleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: CustomerReview }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.review.length > 170;
  const initial = review.name.trim().charAt(0).toUpperCase() || "P";

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E4DF] hover:border-[#B72226]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between h-full">
      <div>
        {/* Top bar: Stars & Google label */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1" aria-label={`Rating ${review.rating} dari 5 bintang`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating
                    ? "text-[#E5A823] fill-[#E5A823]"
                    : "text-[#E8E4DF]"
                }`}
              />
            ))}
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E4DF] text-[11px] font-medium text-[#7E7873]">
            <GoogleIcon className="w-3.5 h-3.5" />
            <span>Google Review</span>
          </div>
        </div>

        {/* Review body */}
        <div className="relative mb-5">
          <Quote className="w-6 h-6 text-[#E9DAD5] mb-2 shrink-0" />
          <p className="text-sm text-[#292725] leading-relaxed">
            {isLong && !expanded ? `${review.review.slice(0, 160)}...` : review.review}
          </p>
          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-xs font-semibold text-[#B72226] hover:underline"
            >
              {expanded ? "Tampilkan lebih sedikit" : "Baca selengkapnya"}
            </button>
          )}
        </div>
      </div>

      {/* Reviewer info */}
      <div className="pt-4 border-t border-[#E8E4DF]/70 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#FAF0ED] text-[#B72226] font-bold text-xs flex items-center justify-center border border-[#E9DAD5] shrink-0">
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-semibold text-[#292725] truncate">
            {review.name}
          </h4>
          {review.date && (
            <p className="text-xs text-[#7E7873] mt-0.5">{review.date}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-[#E8E4DF]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8E4DF] rounded-full px-3.5 py-1 mb-3.5">
            <GoogleIcon className="w-4 h-4" />
            <span className="text-xs font-semibold text-[#7E7873] uppercase tracking-wider">
              Ulasan Google Maps
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#292725] tracking-tight mb-3">
            Dipercaya oleh Pelanggan Kami
          </h2>
          <p className="text-sm sm:text-base text-[#7E7873] max-w-xl mx-auto leading-relaxed">
            Pengalaman dan cerita pelanggan yang telah berbelanja di Rajawali.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CUSTOMER_REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Google Maps External Link Button */}
        <div className="text-center">
          <a
            href={SITE_CONFIG.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#B72226] text-[#B72226] font-semibold hover:bg-[#B72226] hover:text-white transition-all duration-200 active:scale-95 shadow-xs text-sm"
          >
            Lihat Semua Review di Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
