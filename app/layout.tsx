import type { Metadata } from "next";
import { Lexend, Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/sections/navbar";
import { AuthProvider } from "@/lib/auth-context";
import { SonnerProvider } from "@/components/sonner-provider";
import Footer from "@/sections/footer";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const funnelDisplay = Archivo({
  variable: "--font-funnel",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "KPPM CA",
  description: "A Chartant Accounting Firm for everyone",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} ${funnelDisplay.variable} antialiased`}
      ><AuthProvider>
        <Navbar/>
        {children}
        <Footer />
        <SonnerProvider />
        </AuthProvider>
      </body>
    </html>
  );
}

