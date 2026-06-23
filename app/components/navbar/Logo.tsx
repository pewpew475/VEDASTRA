"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      className="z-50"
      initial={{ opacity: 0, x: -20, y: -8 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Link
          href="/"
          aria-label="VedAstraa home"
          className="inline-flex items-center rounded-full px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c]/60"
        >
          <Image
            src="/logo-removebg.png"
            alt="VedAstraa"
            width={280}
            height={80}
            priority
            className="h-16 w-auto select-none md:h-20 lg:h-24"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}
