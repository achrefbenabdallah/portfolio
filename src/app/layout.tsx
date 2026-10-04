import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://achref-portfolio.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Achref Ben Abdallah — Software Engineer & Media Buyer",
  description:
    "Full-stack software engineer (Angular, React, Node.js, Spring Boot) and Meta media buyer. I build the product and run the paid campaigns that grow it — 8.0× ROAS across ~$88K in attributed revenue.",
  keywords: [
    "Achref Ben Abdallah",
    "Software Engineer",
    "Full-Stack Developer",
    "Media Buyer",
    "Meta Ads",
    "Angular",
    "React",
    "Node.js",
    "Spring Boot",
    "Performance Marketing",
    "Tunisia",
  ],
  authors: [{ name: "Achref Ben Abdallah" }],
  openGraph: {
    title: "Achref Ben Abdallah — Software Engineer & Media Buyer",
    description:
      "Full-stack engineer and Meta media buyer. I build products and run the paid campaigns that scale them.",
    url: siteUrl,
    siteName: "Achref Ben Abdallah",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achref Ben Abdallah — Software Engineer & Media Buyer",
    description:
      "Full-stack engineer and Meta media buyer. I build products and run the paid campaigns that scale them.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
