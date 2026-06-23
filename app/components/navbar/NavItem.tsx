"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { NavItem as NavItemType } from "./navItems";

type NavItemProps = {
  item: NavItemType;
  isActive: boolean;
  isHovered: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className?: string;
};

export default function NavItem({
  item,
  isActive,
  isHovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className,
}: NavItemProps) {
  return (
    <li
      className={`relative cursor-pointer rounded-full px-4 py-2 ${className ?? ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovered && !isActive ? (
        <motion.div
          layoutId="hover-sub-pill"
          className="absolute inset-0 z-0 rounded-full bg-white/10"
          transition={{ type: "spring", stiffness: 210, damping: 34, mass: 1.2 }}
        />
      ) : null}

      {isActive ? (
        <motion.div
          layoutId="active-sub-pill"
          className="absolute inset-0 z-0 rounded-full bg-[#c9a84c] shadow-[0_0_16px_4px_rgba(201,168,76,0.5)]"
          transition={{ type: "spring", stiffness: 190, damping: 32, mass: 1.25 }}
        />
      ) : null}

      <Link
        href={item.href}
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
        className="relative z-10 inline-flex w-full items-center justify-center rounded-full whitespace-nowrap px-0.5 py-0.5 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      >
        <motion.span
          animate={{ scale: isActive ? 1.05 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={isActive ? "text-neutral-900" : "text-neutral-300"}
        >
          {item.label}
        </motion.span>
      </Link>
    </li>
  );
}
