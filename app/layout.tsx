import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "JunoAI Innovations - Technology Consulting & Software Development",
  description: "Strategic technology consulting and innovative software solutions. Developers of HousePoints family chore management system.",
  keywords: "technology consulting, cloud architecture, software development, HousePoints, IT consulting, digital transformation",
  openGraph: {
    title: "JunoAI Innovations",
    description: "Transform your business with strategic technology solutions",
    url: "https://junoax.com",
    siteName: "JunoAI Innovations",
    images: [
      {
        url: "https://junoax.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
