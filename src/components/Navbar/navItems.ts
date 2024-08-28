export interface NavItem {
  href: string;
  text: string;
  subItems?: NavItem[];
}

export const navItems: NavItem[] = [
  { href: "/", text: "Home" },
  {
    href: "/handeling-state",
    text: "Handeling State",
    subItems: [
      { href: "/handeling-state", text: "Preface" },
      { href: "/handeling-state/independent-state", text: "Independent State Demo" },
      { href: "/handeling-state/shared-state", text: "Shared State Demo" },
    ],
  },
  {
    href: "/article-two",
    text: "Article Two Demo",
    subItems: [
      { href: "/article-two/preface", text: "Preface" },
      { href: "/article-two/popup", text: "Popup Demo" },
    ],
  },
  {
    href: "/article-three",
    text: "Article Three Demo",
    subItems: [
      { href: "/article-three/preface", text: "Preface" },
      { href: "/article-three/toast", text: "Toast Message Demo" },
    ],
  },
  { href: "/about", text: "About/Contact" },
];
