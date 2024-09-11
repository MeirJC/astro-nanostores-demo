import githubIcon from "@assets/github-logo.svg";
import linkedinIcon from "@assets/LinkedIn.svg";
import hashnodeIcon from "@assets/hashnode-logo.png";
import xIcon from "@assets/Twitter.svg";

import type { ImageMetadata } from "astro";

export interface NavItem {
  href: string;
  text: string;
  subItems?: NavItem[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ImageMetadata;
}

export type SocialLinks = {
  [key: string]: SocialLink;
};

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
  // {
  //   href: "/article-two",
  //   text: "Article Two Demo",
  //   subItems: [
  //     { href: "/article-two/preface", text: "Preface" },
  //     { href: "/article-two/popup", text: "Popup Demo" },
  //   ],
  // },
  // {
  //   href: "/article-three",
  //   text: "Article Three Demo",
  //   subItems: [
  //     { href: "/article-three/preface", text: "Preface" },
  //     { href: "/article-three/toast", text: "Toast Message Demo" },
  //   ],
  // },
  { href: "/about", text: "About/Contact" },
];

export const socialLinks: SocialLinks = {
  githubProfile: {
    name: "GitHub",
    url: "https://github.com/MeirJC",
    icon: githubIcon,
  },
  githubProjectRepo: {
    name: "GitHub",
    url: "https://github.com/MeirJC/astro-nanostores-demo",
    icon: githubIcon,
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/meirjcohen/",
    icon: linkedinIcon,
  },
  hashnodeBlog: {
    name: "Hashnode",
    url: "https://hashnode.com/@MeirJC",
    icon: hashnodeIcon,
  },
  hashnodeArticle1: {
    name: "Hashnode",
    url: "https://hashnode.com/@MeirJCARTICLLLL",
    icon: hashnodeIcon,
  },
  x: {
    name: "X",
    url: "https://x.com/MeirJC",
    icon: xIcon,
  },
  // hashnodeArticle2: {
  //   name: "Hashnode",
  //   url: "https://hashnode.com/@MeirJC",
  //   icon: hashnodeIcon,
  // },
};
