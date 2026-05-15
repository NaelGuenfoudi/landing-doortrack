import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Doortrack | L'application mobile de prospection terrain",
  description: "Priorisez vos secteurs, suivez vos actions terrain et transformez la prospection en données claires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} font-sans antialiased scroll-smooth`}>
      <body className="bg-white text-slate-900">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
