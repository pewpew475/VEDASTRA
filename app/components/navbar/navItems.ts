export type NavItem = {
  label: string;
  href: string;
  id: string;
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "consult-experts", label: "Consult Experts", href: "/consult-experts" },
  { id: "services", label: "Services", href: "/services" },
  { id: "gemstones", label: "Gemstones", href: "/gemstones" },
  { id: "courses", label: "Courses", href: "/courses" },
  { id: "horoscope", label: "Horoscope", href: "/horoscope" },
  { id: "tools", label: "Tools", href: "/tools" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "membership", label: "Membership", href: "/membership" },
];

export const findNavItemIdByPathname = (pathname: string): string => {
  const matched = navItems.find((item) => item.href === pathname);
  return matched?.id ?? "home";
};
