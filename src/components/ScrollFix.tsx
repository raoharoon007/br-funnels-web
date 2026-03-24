"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollFix() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        
        if (element) {
          setTimeout(() => {
            const width = window.innerWidth;
            let offset = 50; 
            if (width >= 1440) offset = 100;
            else if (width >= 992) offset = 60;

            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
                  
              behavior: "smooth",
            });
          }, 150);
        }
      }
    };

    scrollToSection();
    window.addEventListener("hashchange", scrollToSection);
    
    return () => window.removeEventListener("hashchange", scrollToSection);
  }, [pathname]);

  return null;
}