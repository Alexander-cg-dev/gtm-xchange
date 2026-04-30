import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400","500","600","700","800"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300","400","500","600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GTM Xchange | Cambia dólares y soles online al mejor tipo de cambio",
  description:
    "GTM Xchange es tu casa de cambio digital en Perú. Cambia dólares y soles online con el mejor tipo de cambio del mercado, de forma rápida y segura.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
