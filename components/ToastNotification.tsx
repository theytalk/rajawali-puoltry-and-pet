"use client";

import React from "react";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function ToastContainer() {
  const { toasts, removeToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[200] flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="toast-enter pointer-events-auto flex items-center gap-3 bg-white border border-[#E8E4DF] shadow-xl rounded-xl px-4 py-3 min-w-[260px] max-w-xs"
        >
          <div className="shrink-0">
            {toast.type === "success" && (
              <CheckCircle className="w-5 h-5 text-[#B72226]" />
            )}
            {toast.type === "error" && (
              <AlertCircle className="w-5 h-5 text-red-500" />
            )}
            {toast.type === "info" && (
              <Info className="w-5 h-5 text-[#861D22]" />
            )}
          </div>
          <p className="flex-1 text-sm text-[#292725] font-medium">{toast.message}</p>
          <button
            onClick={() => removeToast(toast.id)}
            className="shrink-0 text-[#7E7873] hover:text-[#292725] transition-colors"
            aria-label="Tutup notifikasi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
