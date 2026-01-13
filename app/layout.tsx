import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "../components/MobileNav";
import { ThemeProvider } from "../contexts/ThemeContext";
import ThemeVideo from "../components/ThemeVideo";

import { Plus_Jakarta_Sans, Poppins } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teddytilahun.com"),
  title: "Teddy - Full Stack Developer | React & Node.js Expert in Ethiopia",
  description:
    "Teddy Tilahun - Professional Full Stack Developer specializing in React, Next.js, Node.js, and mobile app development. Based in Addis Ababa, Ethiopia. Available for software development projects and consulting.",
  keywords: [
    "Teddy Tilahun",
    "Full Stack Developer Ethiopia",
    "React Developer Addis Ababa",
    "Node.js Developer Ethiopia",
    "Software Engineer Ethiopia",
    "Web Developer Addis Ababa",
    "Mobile App Developer Ethiopia",
    "JavaScript Developer Ethiopia",
    "TypeScript Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Frontend Developer Ethiopia",
    "Backend Developer Ethiopia",
    "Software Development Ethiopia",
    "Web Development Services Ethiopia",
    "Ethiopian Software Developer",
    "Addis Ababa Web Developer",
    "React Native Developer",
    "MongoDB Developer",
    "Express.js Developer",
  ],
  authors: [{ name: "Tewodros Tilahun (Teddy)" }],
  creator: "Tewodros Tilahun",
  publisher: "Teddy Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://teddytilahun.com",
    siteName: "Teddy - Full Stack Developer",
    title: "Teddy - Full Stack Developer | React & Node.js Expert in Ethiopia",
    description:
      "Professional Full Stack Developer specializing in React, Next.js, Node.js, and mobile app development. Based in Addis Ababa, Ethiopia.",
    images: [
      {
        url: "/assets/avater.png",
        width: 1200,
        height: 630,
        alt: "Teddy Tilahun - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teddy - Full Stack Developer | React & Node.js Expert in Ethiopia",
    description:
      "Professional Full Stack Developer specializing in React, Next.js, Node.js, and mobile app development. Based in Addis Ababa, Ethiopia.",
    images: ["/assets/avater.png"],
    creator: "@teddytilahun",
  },
  alternates: {
    canonical: "https://teddytilahun.com",
  },
  category: "technology",
  classification: "Software Development",
  other: {
    "geo.region": "ET-AA",
    "geo.placename": "Addis Ababa",
    "geo.position": "9.0192;38.7525",
    ICBM: "9.0192, 38.7525",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tewodros Tilahun",
              alternateName: "Teddy",
              jobTitle: "Full Stack Developer",
              description:
                "Professional Full Stack Developer specializing in React, Next.js, Node.js, and mobile app development",
              url: "https://teddytilahun.com",
              image: "https://teddytilahun.com/assets/avater.png",
              sameAs: [
                "https://github.com/tewodros-tilahun-01",
                "https://www.linkedin.com/in/tewodros--tilahun/",
                "https://t.me/teraa3",
                "https://leetcode.com/u/teddylet/",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Addis Ababa",
                addressCountry: "Ethiopia",
              },
              email: "teddytilahun01@gmail.com",
              telephone: "+251987130441",
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "MongoDB",
                "Express.js",
                "React Native",
                "Full Stack Development",
                "Web Development",
                "Mobile App Development",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance Developer",
              },
              nationality: "Ethiopian",
            }),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#10b981" />
        <meta name="format-detection" content="telephone=no" />

        {/* Geo Tags for Ethiopia/Addis Ababa */}
        <meta name="geo.region" content="ET-AA" />
        <meta name="geo.placename" content="Addis Ababa" />
        <meta name="geo.position" content="9.0192;38.7525" />
        <meta name="ICBM" content="9.0192, 38.7525" />

        {/* Language and Content Tags */}
        <meta httpEquiv="content-language" content="en" />
        <meta name="content-type" content="text/html; charset=UTF-8" />

        {/* Favicon */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/logo.png"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/logo.png" />
        <link rel="shortcut icon" href="/assets/logo.png" />
      </head>
      <body
        className={`${jakarta.variable} ${poppins.variable} antialiased bg-primary`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <div className="min-h-dvh relative text-primary  cursor-crosshair w-full">
            <ThemeVideo />
            <MobileNav />

            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
