"use client";

import { usePathname } from "next/navigation";
import { CartDrawer } from "@/components/site/cart-drawer";

export function CartOverlay() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return <CartDrawer />;
}
