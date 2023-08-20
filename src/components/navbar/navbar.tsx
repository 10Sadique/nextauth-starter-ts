"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavLinks } from "@/components/navbar/nav-links";

export const Navbar = () => {
  const pathname = usePathname();
  if (pathname === "/login" || pathname === "/register") return null;

  return (
    <nav className="py-2 border-b">
      <div className="container flex items-center justify-between">
        <Link href={"/"} className="font-bold text-xl">
          NextAuth
        </Link>

        <div>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};
