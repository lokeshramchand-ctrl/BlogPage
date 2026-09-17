"use client";

import { useEffect, useState } from "react";
import { NucleoLogo } from "./nucleo-logo";

const NAV_LINKS = [
  { label: "Icons", href: "https://nucleoapp.com/premium-icons" },
  { label: "App", href: "https://nucleoapp.com/application" },
  { label: "AI Integration", href: "https://nucleoapp.com/ai-integration" },
  { label: "Pricing", href: "https://nucleoapp.com/pricing" },
];

const STICKY_LINKS = [
  { label: "Icons", href: "https://nucleoapp.com/premium-icons" },
  { label: "AI Integration", href: "https://nucleoapp.com/ai-integration" },
  { label: "App", href: "https://nucleoapp.com/application" },
  { label: "Pricing", href: "https://nucleoapp.com/pricing" },
];

export function Header() {
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setStickyVisible(window.scrollY > 150);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="relative z-[3] hidden h-20 items-center md:flex">
        <div className="mx-auto flex h-20 w-[calc(100%-3.5rem)] max-w-[80rem] items-center justify-between">
          <nav className="flex-1">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-foreground hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-1 items-center justify-center">
            <a href="https://nucleoapp.com/" aria-label="Go to homepage">
              <NucleoLogo className="h-10 w-10 text-foreground transition-colors" />
            </a>
          </div>

          <div className="flex flex-1 items-center justify-end gap-6">
            <a
              href="https://nucleoapp.com/log-in"
              className="text-sm font-medium text-foreground hover:text-primary"
            >
              Login
            </a>
            <a
              href="https://nucleoapp.com/app"
              className="inline-flex h-[38px] items-center gap-2 rounded-lg bg-foreground px-4 text-sm font-medium text-background shadow-sm"
            >
              Launch Web App
            </a>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-foreground/10" />
      </header>

      <header className="relative z-[3] flex h-20 items-center justify-center md:hidden">
        <a href="https://nucleoapp.com/" aria-label="Go to homepage">
          <NucleoLogo className="h-10 w-10 text-foreground" />
        </a>
        <div className="absolute inset-x-0 bottom-0 h-px bg-foreground/10" />
      </header>

      <div
        className="sticky top-0 z-10 mx-auto w-full max-w-[30rem] px-4 pt-3 transition-transform duration-300 ease-in-out"
        style={{
          transform: stickyVisible ? "translateY(0)" : "translateY(-150%)",
          position: "fixed",
          left: 0,
          right: 0,
          visibility: stickyVisible ? "visible" : "hidden",
        }}
      >
        <nav className="relative h-11 rounded-2xl bg-background/80 p-0.5 shadow-lg ring-1 ring-foreground/5 backdrop-blur-md">
          <ul className="flex h-full items-center justify-between">
            {STICKY_LINKS.map((link) => (
              <li key={link.label} className="flex-1">
                <a
                  href={link.href}
                  className="flex h-10 items-center justify-center whitespace-nowrap rounded-[14px] px-2 text-center text-xs font-medium text-foreground hover:bg-foreground/[0.075] sm:text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex-1">
              <a
                href="https://nucleoapp.com/premium-icons"
                className="flex h-10 items-center justify-center whitespace-nowrap rounded-[14px] bg-[radial-gradient(ellipse_at_top,var(--color-primary)_0%,hsl(257_86%_52%)_100%)] px-2 text-center text-xs font-medium text-white shadow-[inset_0_1px_0_hsla(0,0%,100%,0.25)] sm:text-sm"
              >
                Buy Icons
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
