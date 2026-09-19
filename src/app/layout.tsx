import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
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
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
