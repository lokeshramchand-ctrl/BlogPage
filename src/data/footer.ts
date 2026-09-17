export interface FooterColumn {
  title: string;
  icon: "use" | "icons" | "pricing" | "support" | "socials";
  links: { label: string; href: string }[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Use",
    icon: "use",
    links: [
      { label: "Web App", href: "https://nucleoapp.com/application" },
      { label: "Mac/Windows Apps", href: "https://nucleoapp.com/native-application" },
      { label: "AI Integration", href: "https://nucleoapp.com/ai-integration" },
      { label: "React Packages", href: "https://nucleoapp.com/react-packages" },
      { label: "Why Nucleo", href: "https://nucleoapp.com/what-is-nucleo" },
      { label: "Past Releases", href: "https://nucleoapp.com/updates" },
    ],
  },
  {
    title: "Icons",
    icon: "icons",
    links: [
      { label: "All Icons", href: "https://nucleoapp.com/premium-icons" },
      { label: "Free Icons", href: "https://nucleoapp.com/free-icons" },
      { label: "Nucleo Core Icons", href: "https://nucleoapp.com/core-icons" },
      { label: "Nucleo UI Icons", href: "https://nucleoapp.com/ui-icons" },
      { label: "Nucleo Sharp Icons", href: "https://nucleoapp.com/sharp-icons" },
      { label: "Nucleo Pixel Icons", href: "https://nucleoapp.com/pixel-icons" },
      { label: "Nucleo Micro Bold Icons", href: "https://nucleoapp.com/micro-bold-icons" },
      { label: "Glass Icons", href: "https://nucleoapp.com/svg-glass-icons" },
      { label: "Credit Card Icons", href: "https://nucleoapp.com/credit-card-icons" },
      { label: "Flag Icons", href: "https://nucleoapp.com/svg-flag-icons" },
      { label: "Isometric Icons", href: "https://nucleoapp.com/svg-isometric-icons" },
      { label: "SVG Pattern Generator", href: "https://nucleoapp.com/svg-patterns" },
    ],
  },
  {
    title: "Pricing",
    icon: "pricing",
    links: [
      { label: "Pricing Options", href: "https://nucleoapp.com/pricing" },
      { label: "Student Discount", href: "https://nucleoapp.com/discounts" },
      { label: "License", href: "https://nucleoapp.com/license" },
      { label: "Extended License", href: "https://nucleoapp.com/extended-license" },
    ],
  },
  {
    title: "Support",
    icon: "support",
    links: [
      { label: "Mac/Windows App Guide", href: "https://nucleoapp.com/support" },
      { label: "Questions & Answers", href: "https://nucleoapp.com/questions-answers" },
      { label: "Contact", href: "https://nucleoapp.com/contact-us" },
      { label: "Terms", href: "https://nucleoapp.com/terms-conditions" },
      { label: "Privacy Policy", href: "https://nucleoapp.com/privacy-policy" },
    ],
  },
  {
    title: "Socials",
    icon: "socials",
    links: [
      { label: "Blog", href: "https://nucleoapp.com/blog" },
      { label: "x.com (Twitter)", href: "https://x.com/nucleoicons" },
    ],
  },
];
