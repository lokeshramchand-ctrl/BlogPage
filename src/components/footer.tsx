import Image from "next/image";
import Link from "next/link";
import { BehanceIcon, InstagramIcon, XIcon } from "@/components/icons";

const socialLinks = [
  { label: "Behance", href: "https://www.behance.net/", icon: BehanceIcon },
  { label: "Instagram", href: "https://www.instagram.com/", icon: InstagramIcon },
  { label: "X", href: "https://x.com/", icon: XIcon },
];

const pagesLinks = [
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Journal", href: "/journal" },
];

const legalLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms of service", href: "/terms-of-services" },
];

export function Footer() {
  return (
    <footer className="mx-auto flex w-[calc(100%-4.875rem)] max-w-[95rem] flex-col gap-10 pb-14">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-6">
          <Link href="/" aria-label="Logo Footer" className="block h-[2.75rem] w-[10.375rem]">
            <Image
              src="/images/orchid-logo.svg"
              alt="Orchid agency logo"
              width={401}
              height={88}
              className="h-full w-full object-contain"
            />
          </Link>
          <p className="text-base leading-[1.3] text-muted-foreground">
            Creative engineering
            <br />
            for thoughtful brands
          </p>
        </div>

        <div className="flex items-center gap-2 min-[810px]:gap-3.5">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={`Social Icon ${label}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground min-[810px]:h-[3.375rem] min-[810px]:w-[3.375rem]"
            >
              <Icon className="h-4 w-4 min-[810px]:h-5 min-[810px]:w-5" />
            </Link>
          ))}
        </div>
      </div>

      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-secondary">
        <Image
          src="/images/footer-flower.png"
          alt="Abstract macro of a glass drop forming a black-and-white flower shape through light refraction on a soft gray background."
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-10 min-[1200px]:flex-row min-[1200px]:items-start min-[1200px]:justify-between">
        <div className="flex flex-col gap-1 text-sm leading-[1.4] text-muted-foreground">
          <p>
            Königsallee 27, Düsseldorf,
            <br />
            Germany
          </p>
          <Link href="mailto:info@orchidstudio.com">info@orchidstudio.com</Link>
        </div>

        <div className="flex gap-16 min-[1200px]:gap-24">
          <div className="flex flex-col gap-3">
            {pagesLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
