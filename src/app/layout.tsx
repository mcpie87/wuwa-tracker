import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CharacterProvider } from "@/providers/CharacterProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wuwa Planner",
  description: "Echo simulator and others",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CharacterProvider>
          <div className="container mx-auto p-4">
            <Header />
            <main className="mt-8">{children}</main>
            <Footer />
          </div>
        </CharacterProvider>
      </body>
    </html>
  );
}
