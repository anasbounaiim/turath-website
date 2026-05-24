"use client";

import { useEffect, useMemo, useState } from "react";
import Avatar from "boring-avatars";
import { FaQuoteLeft } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export type Testimonial = {
  name: string;
  city: string;
  quote: string;
  arabic: string;
};

const avatarColors = ["#173f32", "#2f6a57", "#3e5c50", "#6f957f", "#dfeee4"];

export function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [activePage, setActivePage] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const visibleCount = isDesktop ? 3 : 1;
  const pageCount = Math.ceil(testimonials.length / visibleCount);
  const activeIndex = activePage * visibleCount;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    setActivePage((current) => Math.min(current, pageCount - 1));
  }, [pageCount]);

  const pages = useMemo(
    () => Array.from({ length: pageCount }, (_, index) => index),
    [pageCount],
  );

  const goToPrevious = () => {
    setActivePage((current) => (current === 0 ? pageCount - 1 : current - 1));
  };

  const goToNext = () => {
    setActivePage((current) => (current === pageCount - 1 ? 0 : current + 1));
  };

  return (
    <div className="grid gap-4">
      <div className="overflow-hidden">
        <div
          className="flex gap-3 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(-${activeIndex} * ((100% - ${
              isDesktop ? "1.5rem" : "0rem"
            }) / ${visibleCount} + 0.75rem)))`,
          }}
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="grid min-h-[360px] shrink-0 basis-full gap-5 rounded-[8px] border border-forest-green/15 bg-white p-5 text-ink sm:p-6 md:basis-[calc((100%_-_1.5rem)/3)]"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-mist-green">
                  <Avatar
                    size={52}
                    name={`${testimonial.name}-${testimonial.city}`}
                    variant="beam"
                    colors={avatarColors}
                  />
                </div>
                <div>
                  <p className="text-lg font-bold text-forest-green">{testimonial.name}</p>
                  <p className="text-sm text-ink/65">
                    {testimonial.city}
                  </p>
                </div>
              </div>

              <div>
                <FaQuoteLeft size={20} className="mb-4 text-ink" />
                <p className="text-base font-bold leading-7 text-ink sm:text-lg sm:leading-8">
                  {testimonial.quote}
                </p>
                <p
                  className="mt-4 text-right text-lg font-bold leading-8 text-ink/82"
                  dir="rtl"
                >
                  {testimonial.arabic}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {pages.map((page) => (
            <button
              key={page}
              type="button"
              aria-label={`Show testimonial group ${page + 1}`}
              aria-current={activePage === page}
              onClick={() => setActivePage(page)}
              className={`h-2.5 rounded-full transition-all ${
                activePage === page
                  ? "w-8 bg-forest-green"
                  : "w-2.5 bg-forest-green/25"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={goToPrevious}
            className="grid h-11 w-11 place-items-center rounded-full border border-forest-green/15 text-ink transition hover:bg-mist-green"
          >
            <HiChevronLeft size={22} />
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            onClick={goToNext}
            className="grid h-11 w-11 place-items-center rounded-full bg-forest-green text-cream transition hover:bg-deep-green"
          >
            <HiChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
