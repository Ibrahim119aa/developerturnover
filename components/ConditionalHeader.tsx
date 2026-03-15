"use client";

import { usePathname } from "next/navigation";
import { lazy, memo, Suspense } from "react";

const Header = memo(lazy(() => import("@/components/Header")));

export default function ConditionalHeader() {
  const pathname = usePathname();

  // No header on home page
  if (pathname === "/") return null;

  return (
    <Suspense fallback={null}>
      <Header />
    </Suspense>
  );
}
