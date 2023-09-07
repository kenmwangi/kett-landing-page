import React from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { navLinks } from "@/data/navLinks";

const nav = (
  <nav className="flex gap-4">
    {navLinks.map((userMenu) => {
      const { id, href, title } = userMenu;
      return (
        <Link
          key={id}
          href={href}
          className="bg-transparent text-blue-400 hover:text-blue-500 hover:bg-neutral-50 py-0.5 px-2"
        >
          {title}
        </Link>
      );
    })}
  </nav>
);

export default function UserMenu() {
  return nav;
}
