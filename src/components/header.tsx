"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Works", href: "/works" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 py-3">
      <div className="mx-auto flex w-[calc(100%-4.875rem)] max-w-[95rem] items-center justify-between">
        <Link href="/" aria-label="Logo" className="block h-[18px] w-[83px] shrink-0">
          <Image
            src="/images/orchid-logo.svg"
            alt="Orchid agency logo"
            width={401}
            height={88}
            className="h-full w-full object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-14 min-[1200px]:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold text-foreground",
                link.label === "Journal" && "underline underline-offset-4"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-sm font-semibold text-foreground min-[1200px]:hidden"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background">
          <div className="mx-auto flex w-[calc(100%-2.5rem)] max-w-[95rem] items-center justify-between py-3">
            <Link href="/" aria-label="Logo" className="block h-[18px] w-[83px] shrink-0">
              <Image
                src="/images/orchid-logo.svg"
                alt="Orchid agency logo"
                width={401}
                height={88}
                className="h-full w-full object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-foreground"
            >
              Close
            </button>
          </div>

          <div className="mx-auto flex w-[calc(100%-2.5rem)] max-w-[95rem] flex-1 flex-col justify-center gap-1 pb-24">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-[43px] leading-[1.1] font-semibold tracking-[-0.04em] text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
