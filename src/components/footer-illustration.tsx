"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function FooterIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = 1 - rect.top / vh;
      setProgress(Math.min(1, Math.max(0, raw)));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shift = 50 * progress;

  return (
    <figure ref={ref} className="relative my-8" aria-label="Nucleo logo">
      <svg viewBox="0 0 1280 744" fill="none" className="w-full">
        <g opacity="0.05">
          <circle cx="640" cy="371.5" r="136.5" stroke="var(--foreground)" />
          <circle cx="640" cy="371.5" r="282.5" stroke="var(--foreground)" />
          <circle cx="640" cy="371.5" r="427.5" stroke="var(--foreground)" />
          <line x1="233.854" y1="-34.3536" x2="1153.85" y2="885.646" stroke="var(--foreground)" />
        </g>
        <g opacity="0.15">
          <circle
            cx="640"
            cy="371.5"
            r="136.5"
            transform="rotate(150 640 371.5)"
            stroke="url(#nucleo-grad-0)"
          />
          <circle
            cx="640"
            cy="371.5"
            r="282.5"
            transform="rotate(150 640 371.5)"
            stroke="url(#nucleo-grad-1)"
          />
          <circle
            cx="640"
            cy="371.5"
            r="427.5"
            transform="rotate(150 640 371.5)"
            stroke="url(#nucleo-grad-2)"
          />
        </g>
        <defs>
          <linearGradient id="nucleo-grad-0" x1="640" y1="235" x2="640" y2="508" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--foreground)" />
            <stop offset="0.223958" stopColor="var(--foreground)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nucleo-grad-1" x1="640" y1="89" x2="640" y2="654" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--foreground)" />
            <stop offset="0.223958" stopColor="var(--foreground)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nucleo-grad-2" x1="640" y1="-56" x2="640" y2="799" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--foreground)" />
            <stop offset="0.223958" stopColor="var(--foreground)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <Image
        src="/images/footer-illustration-circle.png"
        alt="Circle of the Nucleo logo"
        fill
        className="absolute inset-0 object-contain"
      />

      <svg
        viewBox="0 0 1280 744"
        fill="none"
        className="absolute inset-0 hidden w-full md:block"
        style={{ transform: `translateY(${shift}px)` }}
      >
        <path
          d="M721.354 76L721.354 419.005L640 466.01L773.095 542.896L832.335 508.678C846.076 500.76 854.522 486.078 854.522 470.213L854.522 178.564C854.522 162.698 846.076 148.046 832.35 140.114L721.354 76Z"
          fill="var(--foreground)"
        />
      </svg>

      <svg
        viewBox="0 0 1280 744"
        fill="none"
        className="absolute inset-0 hidden w-full md:block"
        style={{ transform: `translateY(${-shift}px)` }}
      >
        <path
          d="M559.169 668V324.995L640.522 277.99L507.428 201.104L448.187 235.322C434.446 243.24 426 257.922 426 273.787V565.436C426 581.302 434.446 595.954 448.173 603.886L559.169 668Z"
          fill="var(--foreground)"
        />
      </svg>

      <svg
        viewBox="0 0 1280 744"
        fill="none"
        className="absolute inset-0 w-full md:hidden"
      >
        <path
          d="M721.354 76L721.354 419.005L640 466.01L773.095 542.896L832.335 508.678C846.076 500.76 854.522 486.078 854.522 470.213L854.522 178.564C854.522 162.698 846.076 148.046 832.35 140.114L721.354 76Z"
          fill="var(--foreground)"
        />
        <path
          d="M559.169 668V324.995L640.522 277.99L507.428 201.104L448.187 235.322C434.446 243.24 426 257.922 426 273.787V565.436C426 581.302 434.446 595.954 448.173 603.886L559.169 668Z"
          fill="var(--foreground)"
        />
      </svg>
    </figure>
  );
}
