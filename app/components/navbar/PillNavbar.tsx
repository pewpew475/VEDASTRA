"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import NavItem from "./NavItem";
import { findNavItemIdByPathname, navItems } from "./navItems";

const tabletHiddenIds = new Set(["tools", "blog", "horoscope"]);

export default function PillNavbar() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("home");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setActiveId(findNavItemIdByPathname(pathname));
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) {
        return;
      }

      rafRef.current = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 60);
        rafRef.current = null;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        className="relative hidden max-w-275 overflow-hidden rounded-full border border-white/20 bg-linear-to-b from-white/14 via-white/9 to-white/6 px-2 py-2 shadow-[0_16px_42px_rgba(4,6,12,0.45),inset_0_1px_0_rgba(255,255,255,0.28)] ring-1 ring-white/10 backdrop-blur-xl md:flex"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, scale: isScrolled ? 0.97 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onMouseLeave={() => setHoveredId(null)}
      >
        <ul className="flex items-center gap-1">
          {navItems.map((item) => {
            const hiddenOnTablet = tabletHiddenIds.has(item.id);
            return (
              <NavItem
                key={item.id}
                item={item}
                isActive={activeId === item.id}
                isHovered={hoveredId === item.id}
                onClick={() => setActiveId(item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId((current) => (current === item.id ? null : current))}
                className={hiddenOnTablet ? "md:hidden lg:block" : undefined}
              />
            );
          })}
        </ul>
      </motion.nav>

      <div className="ml-auto flex md:hidden">
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-linear-to-b from-white/14 via-white/9 to-white/6 text-[#f0ead9] shadow-[0_10px_25px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] ring-1 ring-white/10 backdrop-blur-xl transition hover:border-[#c9a84c]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
            onClick={() => setMobileOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <motion.aside
              className="absolute right-0 top-0 h-full w-[min(86vw,360px)] border-l border-[#2e3555] bg-[#0d1229] p-4 shadow-[-16px_0_48px_rgba(2,6,20,0.65)]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-end">
                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#141b38] text-[#f0ead9] transition hover:border-[#c9a84c]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`block rounded-2xl px-4 py-3 text-sm font-medium tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                          isActive
                            ? "bg-[#c9a84c] text-neutral-900"
                            : "text-neutral-200 hover:bg-[#1b2447]"
                        }`}
                        onClick={() => {
                          setActiveId(item.id);
                          setMobileOpen(false);
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
