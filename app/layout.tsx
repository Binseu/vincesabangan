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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@300;400;500;600&family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');if(s){document.documentElement.setAttribute('data-theme',s);}else{var p=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',p);}}catch(e){}})();`
          }}
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
