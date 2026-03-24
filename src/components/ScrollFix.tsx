"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollFix() {
  const pathname = usePathname();

  useEffect(() => {
    const getOffset = () => {
      const width = window.innerWidth;
      if (width >= 1440) return 100;
      if (width >= 992) return 60;
      return 320;
    };

    const scrollToId = (id: string) => {
      let attempts = 0;
      const tryScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          const top =
            element.getBoundingClientRect().top + window.scrollY - getOffset();
          window.scrollTo({ top, behavior: "smooth" });
        } else if (attempts < 10) {
          attempts++;
          setTimeout(tryScroll, 100);
        }
      };
      tryScroll();
    };

    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      setTimeout(() => scrollToId(hash), 150);
    }

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      const id = href.replace("#", "");
      window.history.pushState(null, "", href);
      scrollToId(id);
    };

    const handleHashChange = () => {
      const id = window.location.hash?.replace("#", "");
      if (id) scrollToId(id);
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  return null;
}