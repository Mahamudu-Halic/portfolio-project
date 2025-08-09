import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { name } from "@/constants";
import { localManrope } from "@/lib/font-loader";
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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: `${name} | Frontend Developer`,
  description: `Portfolio of ${name} - Frontend Developer based in Ghana.`,
  keywords: [
    "portfolio",
    "web developer",
    "frontend developer",
    "creative coder",
    "Next.js developer",
    "React.js developer",
    "Tailwind CSS developer",
    "TypeScript developer",
    "Sanity developer",
    "Contentful developer",
    "Supabase developer",
    "Storybook developer",
    "Git developer",
  ],
  authors: [{ name, url: baseUrl }],
  creator: name,
  publisher: name,
  metadataBase: new URL(`${baseUrl}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${name} | Frontend Developer`,
    description: `Portfolio of ${name} - Frontend Developer based in Ghana.`,
    url: baseUrl,
    siteName: `${name} Portfolio`,
    images: [
      {
        url: "https://i.postimg.cc/T1FqTQZV/IMG-20241129-WA0009.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} | Frontend Developer`,
    description: `Portfolio of ${name} - Frontend Developer based in Ghana.`,
    creator: `@${name}`,
    images: ["https://i.postimg.cc/T1FqTQZV/IMG-20241129-WA0009.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple.png",
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${localManrope.className} antialiased bg-black-100 !normal-case`}
      >
        <Navbar />
        <div className="mb-10">
          <Toaster position="top-right" />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
