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
  metadataBase: new URL("https://awanautos.cyou"),
  title: "AWAN AUTOS | Shell Service Station Quetta",
  description: "AWAN AUTOS is a Shell-branded service station on Shara-e-Zarghoon, Quetta, offering quality fuel, lubricants, car wash and vehicle care services.",
  keywords: [
    "Awan Autos",
    "Awan Autos Quetta",
    "Shell Service Station Quetta",
    "Shell Quetta",
    "petrol pump Quetta",
    "fuel station Quetta",
    "Shara-e-Zarghoon Quetta",
    "car wash Quetta",
    "diesel Quetta",
    "engine oil Quetta"
  ],
  alternates: { canonical: "https://awanautos.cyou/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "AWAN AUTOS | Shell Service Station Quetta",
    description: "Quality fuel, lubricants and trusted automotive services at Awan Autos, Shara-e-Zarghoon, Quetta.",
    url: "https://awanautos.cyou/",
    siteName: "AWAN AUTOS",
    locale: "en_PK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AWAN AUTOS | Shell Service Station Quetta",
    description: "Quality fuel, lubricants and trusted automotive services in Quetta."
  }
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
