"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import { CartItem, Product, ProductVariant, Toast } from "@/lib/types";
import { generateId } from "@/lib/utils";

// ─── State & Actions ───────────────────────────────────────

interface CartState {
  items: CartItem[];
  toasts: Toast[];
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; variant?: ProductVariant } }
  | { type: "REMOVE_ITEM"; payload: { productId: string; variantValue?: string } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; variantValue?: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] }
  | { type: "ADD_TOAST"; payload: Toast }
  | { type: "REMOVE_TOAST"; payload: { id: string } };

function cartKey(productId: string, variantValue?: string): string {
  return variantValue ? `${productId}::${variantValue}` : productId;
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "LOAD_CART":
      return { ...state, items: action.payload };

    case "ADD_ITEM": {
      const { product, variant } = action.payload;
      const key = cartKey(product.id, variant?.value);
      const existing = state.items.find(
        (i) => cartKey(i.product.id, i.selectedVariant?.value) === key
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            cartKey(i.product.id, i.selectedVariant?.value) === key
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { product, quantity: 1, selectedVariant: variant }],
      };
    }

    case "REMOVE_ITEM": {
      const { productId, variantValue } = action.payload;
      const key = cartKey(productId, variantValue);
      return {
        ...state,
        items: state.items.filter(
          (i) => cartKey(i.product.id, i.selectedVariant?.value) !== key
        ),
      };
    }

    case "UPDATE_QUANTITY": {
      const { productId, variantValue, quantity } = action.payload;
      const key = cartKey(productId, variantValue);
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (i) => cartKey(i.product.id, i.selectedVariant?.value) !== key
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          cartKey(i.product.id, i.selectedVariant?.value) === key
            ? { ...i, quantity }
            : i
        ),
      };
    }

    case "CLEAR_CART":
      return { ...state, items: [] };

    case "ADD_TOAST":
      return { ...state, toasts: [...state.toasts, action.payload] };

    case "REMOVE_TOAST":
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.payload.id),
      };

    default:
      return state;
  }
}

// ─── Context ───────────────────────────────────────────────

interface CartContextValue {
  items: CartItem[];
  toasts: Toast[];
  itemCount: number;
  total: number;
  addItem: (product: Product, variant?: ProductVariant) => void;
  removeItem: (productId: string, variantValue?: string) => void;
  updateQuantity: (productId: string, variantValue: string | undefined, quantity: number) => void;
  clearCart: () => void;
  addToast: (message: string, type?: Toast["type"]) => void;
  removeToast: (id: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const CART_STORAGE_KEY = "rajawali_cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], toasts: [] });

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as CartItem[];
        dispatch({ type: "LOAD_CART", payload: parsed });
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // Ignore write errors
    }
  }, [state.items]);

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const total = state.items.reduce((sum, i) => {
    const base = i.product.price;
    const modifier = i.selectedVariant?.priceModifier ?? 0;
    return sum + (base + modifier) * i.quantity;
  }, 0);

  const addItem = useCallback((product: Product, variant?: ProductVariant) => {
    dispatch({ type: "ADD_ITEM", payload: { product, variant } });
  }, []);

  const removeItem = useCallback((productId: string, variantValue?: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { productId, variantValue } });
  }, []);

  const updateQuantity = useCallback(
    (productId: string, variantValue: string | undefined, quantity: number) => {
      dispatch({ type: "UPDATE_QUANTITY", payload: { productId, variantValue, quantity } });
    },
    []
  );

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const addToast = useCallback((message: string, type: Toast["type"] = "success") => {
    const id = generateId();
    dispatch({ type: "ADD_TOAST", payload: { id, message, type } });
    setTimeout(() => {
      dispatch({ type: "REMOVE_TOAST", payload: { id } });
    }, 3500);
  }, []);

  const removeToast = useCallback((id: string) => {
    dispatch({ type: "REMOVE_TOAST", payload: { id } });
  }, []);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        toasts: state.toasts,
        itemCount,
        total,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        addToast,
        removeToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

