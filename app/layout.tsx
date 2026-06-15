import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PahadiStay AI",
  description: "Smart Homestay Discovery, Booking & Travel Planning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}