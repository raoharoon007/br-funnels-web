"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollFix() {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const width = window.innerWidth;
          let offset = 75; 
          if (width >= 1440) offset = 120;
          else if (width >= 992) offset = 100;

          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    const timeoutId = setTimeout(handleScroll, 100);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}