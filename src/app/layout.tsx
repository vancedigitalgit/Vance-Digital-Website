import type { Metadata } from "next";
import { Unbounded, Inter, Fraunces } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const description =
  "We build the dashboard that catches every wholesale order in one place and sends your customer a confirmation straight away, no matter how it came in.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vancedigital.com.au"),
  title: "Vance Digital | Ordering portals for wholesale food and produce",
  description,
  openGraph: {
    title: "Vance Digital",
    description,
    siteName: "Vance Digital",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/og-v4.png",
        width: 1200,
        height: 630,
        alt: "Vance Digital. Every order, in one place. Ordering portals for wholesale food and produce businesses in Australia.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vance Digital",
    description,
    images: ["/og-v4.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vance Digital",
  url: "https://vancedigital.com.au",
  logo: "https://vancedigital.com.au/logos/logo-dark.svg",
  image: "https://vancedigital.com.au/og-v4.png",
  description,
  telephone: "+61405683743",
  email: "inigop@vancedigital.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gold Coast",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  areaServed: "AU",
  sameAs: [
    "https://www.linkedin.com/company/vancedigital/",
    "https://www.facebook.com/profile.php?id=61578510435063",
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
      className={`${unbounded.variable} ${inter.variable} ${fraunces.variable} h-full`}
    >
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
