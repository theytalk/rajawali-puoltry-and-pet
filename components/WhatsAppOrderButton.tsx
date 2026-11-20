"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/config";

interface WhatsAppOrderButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  customUrl?: string;
  variant?: "default" | "outline" | "white";
}

export function WhatsAppOrderButton({
  className = "",
  size = "md",
  label = "Pesan via WhatsApp",
  customUrl,
  variant = "default",
}: WhatsAppOrderButtonProps) {
  const sizeClasses = {
    sm: "text-xs px-3 py-2 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantClasses = {
    default: "bg-[#B72226] hover:bg-[#861D22] text-white shadow-sm",
    outline: "border-2 border-[#B72226] text-[#B72226] hover:bg-[#E9DAD5]/30",
    white: "bg-white text-[#B72226] hover:bg-[#FAF8F5] hover:text-[#861D22] shadow-md",
  };

  return (
    <a
      href={customUrl ?? WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-95 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle className={size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      {label}
    </a>
  );
}
