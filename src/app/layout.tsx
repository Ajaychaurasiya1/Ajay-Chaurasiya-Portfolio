import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://ajaychaurasiya.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ajay Chaurasiya | Full Stack Developer",
    template: "%s | Ajay Chaurasiya",
  },
  description:
    "Full Stack Developer specializing in MERN Stack, AI Platforms, and SaaS Development. Building modern web applications, dashboards, and AI evaluation systems.",
  keywords: [
    "Ajay Chaurasiya",
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "AI Platforms",
    "SaaS Development",
    "Portfolio",
  ],
  authors: [{ name: "Ajay Chaurasiya" }],
  creator: "Ajay Chaurasiya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ajay Chaurasiya Portfolio",
    title: "Ajay Chaurasiya | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN Stack, AI Platforms, and SaaS Development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Chaurasiya | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN Stack, AI Platforms, and SaaS Development.",
  },
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ajay Chaurasiya",
  jobTitle: "Full Stack Developer",
  url: siteUrl,
  sameAs: [
    "https://www.linkedin.com/in/ajaychaurasiya1/",
    "https://github.com/ajaychaurasiya1/",
    "https://www.instagram.com/velthrix",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "AI Platforms",
    "SaaS Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
