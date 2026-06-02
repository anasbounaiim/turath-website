"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function BottleAnimation() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      return;
    }

    const context = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>("[data-bottle-animation]")
        .forEach((bottle) => {
          gsap.fromTo(
            bottle,
            {
              autoAlpha: 0,
              y: 34,
              scale: 0.94,
              rotate: -2,
              transformOrigin: "50% 80%",
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              rotate: 0,
              duration: 1.15,
              ease: "power3.out",
              immediateRender: false,
              scrollTrigger: {
                trigger: bottle,
                start: "top 90%",
                once: true,
              },
            },
          );
        });
    });

    return () => context.revert();
  }, []);

  return null;
}
