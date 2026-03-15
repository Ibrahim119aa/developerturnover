"use client";

import { useEffect } from "react";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 600,
        once: true,
        offset: 40,
        easing: "ease-out-cubic",
      });
    };
    initAOS();
  }, []);

  return <>{children}</>;
}
