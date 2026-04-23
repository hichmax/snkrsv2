"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

export type CartItem = {
  productId: string;
  modelName: string;
  productName: string;
  sizeLabel?: string;
  quantity: number;
  imageUrl?: string;
};

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, sizeLabel?: string) => void;
  updateQuantity: (productId: string, sizeLabel: string | undefined, quantity: number) => void;
  clear: () => void;
  toggle: (value?: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "sneakers-addict-cart-v2";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      isOpen,
      addItem(item) {
        setItems((current) => {
          const existingIndex = current.findIndex(
            (entry) =>
              entry.productId === item.productId &&
              entry.sizeLabel === item.sizeLabel
          );

          if (existingIndex >= 0) {
            const clone = [...current];
            clone[existingIndex] = {
              ...clone[existingIndex],
              quantity: clone[existingIndex].quantity + item.quantity
            };
            return clone;
          }

          return [...current, item];
        });
        setIsOpen(true);
      },
      removeItem(productId, sizeLabel) {
        setItems((current) =>
          current.filter(
            (entry) =>
              !(entry.productId === productId && entry.sizeLabel === sizeLabel)
          )
        );
      },
      updateQuantity(productId, sizeLabel, quantity) {
        if (quantity <= 0) {
          setItems((current) =>
            current.filter(
              (entry) =>
                !(entry.productId === productId && entry.sizeLabel === sizeLabel)
            )
          );
          return;
        }

        setItems((current) =>
          current.map((entry) =>
            entry.productId === productId && entry.sizeLabel === sizeLabel
              ? { ...entry, quantity }
              : entry
          )
        );
      },
      clear() {
        setItems([]);
      },
      toggle(value) {
        setIsOpen((current) => (typeof value === "boolean" ? value : !current));
      }
    }),
    [items, isOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart doit être utilisé dans CartProvider.");
  }
  return ctx;
}
