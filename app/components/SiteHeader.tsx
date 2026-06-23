"use client";

import { Logo, PillNavbar } from "./navbar";

export default function SiteHeader() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-start justify-center bg-transparent px-6 pb-0 pt-7 shadow-none ring-0">
        <PillNavbar />
      </header>

      <div className="absolute left-6 top-0 z-50">
        <Logo />
      </div>
    </>
  );
}

