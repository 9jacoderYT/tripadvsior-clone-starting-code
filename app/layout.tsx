import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarSimple from "@/components/navbar/index";
import Footer from "@/components/footer/index";
import Head from "next/head";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "TripAdvisor Clone",
  description: "Created by 9jacoder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="border-b border-1 shadow-sm mb-5 md:mb-0">
          <NavbarSimple />
        </div>

        <div className="z-2">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
