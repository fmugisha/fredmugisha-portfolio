"use client";

import Image from "next/image";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  avatar: string;
  className?: string;
  markClassName?: string;
  children: ReactNode;
};

// Scrolls back to the top reliably, even with the sticky header.
export default function BrandLink({ avatar, className, markClassName, children }: Props) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", window.location.pathname);
  }

  return (
    <a className={className} href="#top" onClick={handleClick} aria-label="Back to top">
      <Image src={avatar} alt="" width={34} height={34} className={markClassName} priority /> {children}
    </a>
  );
}
