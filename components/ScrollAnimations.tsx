"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      gsap.set(".animate-in", { autoAlpha: 1, y: 0 });
      return;
    }

    const context = gsap.context(() => {
      gsap.set(".animate-in", { autoAlpha: 0, y: 16 });

      gsap.utils.toArray<HTMLElement>(".animate-in").forEach((element) => {
        const textElements = Array.from(
          element.querySelectorAll<HTMLElement>(
            "h1, h2, h3, p:not(:has(img)), a, [dir='rtl']",
          ),
        ).filter((child) => child.textContent?.trim());

        const visualElements = Array.from(
          element.querySelectorAll<HTMLElement>(
            "article, img:not(.gsap-bottle), [data-gsap-card]",
          ),
        );

        gsap.set(textElements, {
          autoAlpha: 0,
          y: 12,
          force3D: true,
          willChange: "transform, opacity",
        });

        gsap.set(visualElements, {
          autoAlpha: 0,
          y: 14,
          scale: 0.992,
          force3D: true,
          willChange: "transform, opacity",
        });

        const timeline = gsap.timeline({
          defaults: { ease: "expo.out" },
          delay: element.classList.contains("animate-delay-2")
            ? 0.08
            : element.classList.contains("animate-delay-1")
              ? 0.04
              : 0,
          scrollTrigger: {
            trigger: element,
            start: "top 92%",
            once: true,
          },
        });

        timeline.to(element, {
          autoAlpha: 1,
          y: 0,
          duration: 0.38,
        });

        if (textElements.length > 0) {
          timeline.to(
            textElements,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.48,
              stagger: {
                each: 0.018,
                from: "start",
              },
              clearProps: "willChange",
            },
            "-=0.26",
          );
        }

        if (visualElements.length > 0) {
          timeline.to(
            visualElements,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.52,
              stagger: 0.018,
              clearProps: "willChange",
            },
            "-=0.38",
          );
        }
      });

      gsap.utils.toArray<HTMLElement>(".gsap-bottle").forEach((bottle) => {
        const wrapper = bottle.closest<HTMLElement>(".relative");
        const halo = wrapper?.querySelector<HTMLElement>(".gsap-bottle-halo");
        const shadow = wrapper?.querySelector<HTMLElement>(".gsap-bottle-shadow");

        gsap.set(bottle, {
          autoAlpha: 0,
          y: 22,
          scale: 0.96,
          rotate: -1.4,
          transformOrigin: "50% 80%",
          force3D: true,
          willChange: "transform, opacity",
        });

        gsap.set([halo, shadow].filter(Boolean), {
          autoAlpha: 0,
          scale: 0.82,
        });

        gsap
          .timeline({
            defaults: { ease: "expo.out" },
            scrollTrigger: {
              trigger: bottle,
              start: "top 94%",
              once: true,
            },
          })
          .to([halo, shadow].filter(Boolean), {
            autoAlpha: 1,
            scale: 1,
            duration: 0.42,
            stagger: 0.03,
          })
          .to(
            bottle,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              rotate: 0,
              duration: 0.58,
              clearProps: "willChange",
            },
            "-=0.28",
          );
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
