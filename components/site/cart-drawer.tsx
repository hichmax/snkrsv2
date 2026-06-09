"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, Trash2, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useCart } from "@/components/site/cart-provider";
import { siteContent } from "@/content/site-content";

export function CartDrawer() {
  const { items, isOpen, toggle, removeItem, updateQuantity, clear } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(
    null
  );
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [snapchat, setSnapchat] = useState("");
  const [city, setCity] = useState("");
  const [note, setNote] = useState("");
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const totalCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") toggle(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, toggle]);

  async function handleSubmit() {
    if (!items.length || !customerName.trim()) return;
    setSubmitting(true);
    setFeedback(null);

    const response = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        customerName,
        phone,
        snapchat,
        city,
        note,
        items
      })
    });

    setSubmitting(false);

    if (!response.ok) {
      setFeedback({ type: "error", text: siteContent.cart.errorText });
      return;
    }

    clear();
    setCustomerName("");
    setPhone("");
    setSnapchat("");
    setCity("");
    setNote("");
    setFeedback({ type: "success", text: siteContent.cart.successText });
  }

  if (!mounted) return null;

  return createPortal(
    <>
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            className="floating-action-cluster"
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.94 }}
          >
            <button
              onClick={() => toggle(true)}
              className="cart-floating-button"
              aria-label={`Ouvrir le panier, ${totalCount} article${totalCount > 1 ? "s" : ""}`}
            >
              <span className="cart-floating-icon">
                <ShoppingBag />
              </span>
              <span className="cart-floating-label">{siteContent.cart.buttonLabel}</span>
              <span className="cart-floating-count">{totalCount}</span>
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen ? (
          <div className="cart-overlay-root" role="presentation">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => toggle(false)}
              className="cart-drawer-backdrop"
              aria-label="Fermer le panier"
            />
            <motion.aside
              initial={{
                opacity: 0,
                x: isMobile ? 0 : "105%",
                y: isMobile ? "105%" : 0,
                scale: 0.98
              }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                x: isMobile ? 0 : "105%",
                y: isMobile ? "105%" : 0,
                scale: 0.98
              }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="liquid-cart-drawer"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cart-drawer-title"
            >
              <div className="cart-sheet-handle" />
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                    {siteContent.cart.drawerEyebrow}
                  </p>
                  <h2 id="cart-drawer-title" className="text-2xl font-semibold">
                    {siteContent.cart.drawerTitle}
                  </h2>
                </div>
                <button
                  onClick={() => toggle(false)}
                  className="cart-close-button"
                  aria-label={siteContent.cart.closeLabel}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {feedback ? (
                <div
                  className={`mb-4 rounded-2xl border px-4 py-3 text-sm ${
                    feedback.type === "success"
                      ? "border-lime-300/30 bg-lime-300/10 text-lime-100"
                      : "border-red-400/30 bg-red-400/10 text-red-100"
                  }`}
                >
                  {feedback.text}
                </div>
              ) : null}

              <div className="space-y-3">
                {items.length ? (
                  items.map((item) => (
                    <div
                      key={`${item.productId}-${item.sizeLabel || "na"}`}
                      className="liquid-cart-item rounded-[28px] p-4"
                    >
                      <div className="flex gap-4">
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="h-24 w-24 rounded-2xl object-cover"
                          />
                        ) : null}
                        <div className="flex-1">
                          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                            {item.modelName}
                          </p>
                          <p className="mt-1 text-sm text-white/55">
                            Taille : {item.sizeLabel || siteContent.cart.sizeFallback}
                          </p>
                          <div className="mt-3 flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.sizeLabel,
                                  item.quantity - 1
                                )
                              }
                              className="h-8 w-8 rounded-full border border-white/10"
                            >
                              -
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.sizeLabel,
                                  item.quantity + 1
                                )
                              }
                              className="h-8 w-8 rounded-full border border-white/10"
                            >
                              +
                            </button>
                            <button
                              onClick={() => removeItem(item.productId, item.sizeLabel)}
                              className="ml-auto rounded-full border border-red-400/20 bg-red-400/10 px-3 py-2 text-xs text-red-100"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-[28px] border border-dashed border-white/10 p-8 text-sm text-white/55">
                    {siteContent.cart.emptyText}
                  </div>
                )}
              </div>

              <div className="liquid-cart-item mt-6 rounded-[28px] p-5">
                <p className="mb-4 text-sm text-white/60">{siteContent.cart.introText}</p>
                <div className="grid gap-3">
                  <input
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={siteContent.cart.namePlaceholder}
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
                  />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={siteContent.cart.phonePlaceholder}
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
                  />
                  <input
                    value={snapchat}
                    onChange={(e) => setSnapchat(e.target.value)}
                    placeholder={siteContent.cart.socialPlaceholder}
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
                  />
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={siteContent.cart.cityPlaceholder}
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
                  />
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder={siteContent.cart.notePlaceholder}
                    rows={4}
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={submitting || !items.length}
                    className="liquid-action px-5 py-3 disabled:opacity-40"
                  >
                    {submitting ? siteContent.cart.submittingLabel : siteContent.cart.submitLabel}
                  </button>
                </div>
              </div>
            </motion.aside>
          </div>
        ) : null}
      </AnimatePresence>
    </>,
    document.body
  );
}
