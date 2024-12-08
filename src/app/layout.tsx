"use client"

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { usePathname } from 'next/navigation';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-sans bg-[#F6F7F9] min-h-screen`}> 
        <Navbar />
        <main className="container mx-auto px-6 py-8">
          {children}
        </main>
        {/* Conditionally render the footer */}
        {pathname !== '/dashboard' && <Footer />}
      </body>
    </html>
  );
}
