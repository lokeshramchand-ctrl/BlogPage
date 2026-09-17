import {
  LayoutPanelLeft,
  Shapes,
  Tag,
  LifeBuoy,
  Share2,
  type LucideIcon,
} from "lucide-react";
import { footerColumns, type FooterColumn } from "@/data/footer";
import { FooterIllustration } from "./footer-illustration";

const ICONS: Record<FooterColumn["icon"], LucideIcon> = {
  use: LayoutPanelLeft,
  icons: Shapes,
  pricing: Tag,
  support: LifeBuoy,
  socials: Share2,
};

export function Footer() {
  return (
    <footer className="bg-muted pb-7 pt-32">
      <div className="mx-auto w-[calc(100%-3.5rem)] max-w-[80rem]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((column) => {
            const Icon = ICONS[column.icon];
            return (
              <div key={column.title} className="flex flex-col">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                  <span>{column.title}</span>
                </h3>
                <ul className="flex flex-grow flex-col">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="flex py-1.5 text-sm font-medium text-foreground hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <FooterIllustration />

        <p className="text-center text-sm font-medium text-muted-foreground/70">
          ©Nucleo
        </p>
      </div>
    </footer>
  );
}
