import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="customScrollBar  overflow-x-hidden">
      <body className={inter.className + " bg-background"}>
        <Navbar />
        <div className="flex sm:mt-60 mt-32">{children}</div>
      </body>
    </html>
  );
}
