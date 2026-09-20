import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AWAN AUTOS | Quality Fuel & Auto Care | Quetta",
  description: "AWAN AUTOS on Shara-e-Zarghoon, Quetta — quality fuel, vehicle care and trusted automotive services. Quantity and Quality Assured.",
  keywords: ["Awan Autos", "Awan Autos Quetta", "Shara-e-Zarghoon", "Quetta petrol pump", "fuel station Quetta", "Shell Pakistan"],
  openGraph: {
    title: "AWAN AUTOS | Quetta",
    description: "Quality fuel, vehicle care and trusted automotive services in Quetta.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
