import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import './globals.css'
import './styles/home.css'
import './styles/biography.css'
import './styles/clinical.css'
import './styles/recognition.css'
import './styles/publications.css'
import './styles/contact.css'
import './styles/privacy.css'

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Kasu Prasad Reddy — Ophthalmologist",
    template: "%s",
  },
  description:
    "The official website of Dr. Kasu Prasad Reddy — ophthalmologist, Member of the Royal College of Ophthalmologists, and founder of Maxivision Eye Hospitals, Hyderabad.",
  metadataBase: new URL("https://drkasuprasad.com"),
  alternates: {
    canonical: "https://drkasuprasad.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://drkasuprasad.com",
    siteName: "Dr. Kasu Prasad Reddy",
    title: "Dr. Kasu Prasad Reddy — Ophthalmologist",
    description:
      "The official website of Dr. Kasu Prasad Reddy — ophthalmologist, Member of the Royal College of Ophthalmologists, and founder of Maxivision Eye Hospitals, Hyderabad.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Kasu Prasad Reddy — Ophthalmologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Kasu Prasad Reddy — Ophthalmologist",
    description:
      "The official website of Dr. Kasu Prasad Reddy — ophthalmologist, Member of the Royal College of Ophthalmologists, and founder of Maxivision Eye Hospitals, Hyderabad.",
    images: ["/og-image.jpg"],
  },
};

const GTM_ID = "GTM-XXXXXXX"; // Replace with real GTM ID before go-live

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}