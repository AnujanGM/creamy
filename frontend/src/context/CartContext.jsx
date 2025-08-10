import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext();

/**
 * Robust price parser that handles:
 * "Rs. 1300", "Rs 1,300", "Rs 1.300",
 * "Rs 1,300.50", "Rs 1.300,50"
 */
const parsePrice = (priceStr) => {
  if (priceStr == null) return 0;
  const raw = String(priceStr).trim();
  const ds = raw.replace(/[^0-9.,]/g, '');
  if (!ds) return 0;

  const hasComma = ds.includes(',');
  const hasDot = ds.includes('.');
  const lastComma = ds.lastIndexOf(',');
  const lastDot = ds.lastIndexOf('.');

  // Both separators: rightmost is decimal, the other is thousands
  if (hasComma && hasDot) {
    const decIndex = Math.max(lastComma, lastDot);
    const intPart = ds.slice(0, decIndex).replace(/[.,]/g, '');
    const fracPart = ds.slice(decIndex + 1).replace(/[^0-9]/g, '');
    return Number(fracPart.length ? `${intPart}.${fracPart}` : intPart);
  }

  // Only one type present
  const sep = hasComma ? ',' : (hasDot ? '.' : '');
  if (!sep) return Number(ds);

  const sepIndex = ds.lastIndexOf(sep);
  const left = ds.slice(0, sepIndex);
  const right = ds.slice(sepIndex + 1);
  const rightDigits = right.replace(/[^0-9]/g, '');

  if (rightDigits.length === 3) {
    // thousands separator
    return Number((left + rightDigits).replace(/[^0-9]/g, ''));
  }
  if (rightDigits.length <= 2) {
    // decimal separator
    const intPart = left.replace(/[^0-9]/g, '');
    const fracPart = rightDigits;
    return Number(fracPart.length ? `${intPart}.${fracPart}` : intPart);
  }
  // >3 after sep → treat sep as thousands (remove all)
  return Number(ds.replace(/[.,]/g, ''));
};

const normalizeItem = (i) => {
  const priceNumber = Number.isFinite(i?.priceNumber) ? Number(i.priceNumber) : parsePrice(i?.price ?? i?.priceLabel);
  return {
    id: i.id,
    name: i.name,
    image: i.image,
    qty: Math.max(1, Number(i.qty) || 1),
    priceNumber: Number.isFinite(priceNumber) ? priceNumber : 0,
    priceLabel: i.priceLabel ?? i.price ?? `Rs. ${priceNumber}`,
  };
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cart');
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed.map(normalizeItem) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    const priceNumber = parsePrice(item.price);

    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [
        ...prev,
        normalizeItem({
          id: item.id,
          name: item.name,
          image: item.image,
          qty: 1,
          priceNumber,
          price: item.price,
          priceLabel: item.price,
        }),
      ];
    });
  };

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const updateQty = (id, qty) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)));
  const clear = () => setItems([]);

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, i) => sum + (Number(i.priceNumber) || 0) * (Number(i.qty) || 0),
      0
    );
    const tax = 0;
    return { subtotal, tax, total: subtotal + tax };
  }, [items]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clear, totals }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
