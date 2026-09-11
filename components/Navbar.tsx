"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "home" },
    { href: "/projects", label: "projects" },
    { href: "/cv", label: "cv" },
  ];

  return (
    <nav className="mb-16 flex justify-end gap-6 text-sm">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              isActive
                ? "font-medium text-neutral-950 dark:text-white"
                : "text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
            }
          >
            {link.label}
          </Link>
        );
      })}
      <ThemeToggle />
    </nav>
  );
}