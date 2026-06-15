"use client";

import Link from "next/link";
import { UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-green-700"
        >
          PahadiStay AI
        </Link>

        {/* Navigation Links */}
        <div className="hidden gap-8 md:flex">
          <Link href="/" className="hover:text-green-700 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-green-700 transition">
            About
          </Link>

          <Link href="/dashboard" className="hover:text-green-700 transition">
            Dashboard
          </Link>

          <Link href="/login" className="hover:text-green-700 transition">
            Login
          </Link>
        </div>

        {/* Profile Icon */}
        <UserCircle
          size={32}
          className="cursor-pointer text-gray-700 hover:text-green-700"
        />
      </div>
    </nav>
  );
}