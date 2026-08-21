import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vince Stephen Sabangan — System Engineer & Full-Stack Developer",
  description:
    "System Engineer & Full-Stack Developer — architecting scalable solutions and automating enterprise workflows.",
  verification: {
    google: "c2JFFKwoAUX-kVcsup50xvf2KHSF1b5-0flyao2Cn8I"
  },
  icons: "/Logo/Logo.svg"
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vince Stephen Sabangan",
  jobTitle: "System Engineer & Full-Stack Developer",
  url: "https://vince-stephen-sabangan.vercel.app",
  worksFor: {
    "@type": "Organization",
    name: "Denso Ten Solutions Phil Corp"
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Polytechnic University of the Philippines"
  },
  sameAs: ["https://linkedin.com/in/vince-stephen-sabangan"]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Mono:wght@300;400&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
