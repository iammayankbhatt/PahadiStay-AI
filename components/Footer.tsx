import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        
        <h2 className="text-xl font-bold">
          PahadiStay AI
        </h2>

        <div className="mt-4 flex flex-col gap-2 md:flex-row md:gap-6">
          <Link href="/about">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Privacy</Link>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          © 2026 PahadiStay AI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}