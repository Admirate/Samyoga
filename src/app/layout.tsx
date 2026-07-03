import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samyogastudio.in"),
  title: {
    default: "Samyoga Studio — Yoga & Pilates, Hyderabad",
    template: "%s | Samyoga Studio",
  },
  description:
    "Not a workout. Not a quick fix. A mindful practice that stays with you—on and off the mat. Yoga & Pilates classes in Hyderabad with Srimalini.",
  keywords: [
    "yoga hyderabad",
    "pilates hyderabad",
    "yoga classes hyderabad",
    "samyoga studio",
    "yoga near me hyderabad",
    "beginner yoga",
  ],
  authors: [{ name: "Srimalini" }],
  creator: "Samyoga Studio",
  alternates: {
    canonical: "https://samyogastudio.in",
  },
  icons: {
    icon: [
      { url: "/images/logo-mark.png", type: "image/png" },
    ],
    apple: "/images/logo-mark.png",
    shortcut: "/images/logo-mark.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://samyogastudio.in",
    siteName: "Samyoga Studio",
    title: "Samyoga Studio — Yoga & Pilates, Hyderabad",
    description:
      "Not a workout. Not a quick fix. A mindful practice that stays with you—on and off the mat.",
    images: [
      {
        url: "/samyoga-hero.png",
        width: 1200,
        height: 630,
        alt: "Samyoga Studio — Yoga & Pilates, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samyoga Studio — Yoga & Pilates, Hyderabad",
    description:
      "Not a workout. Not a quick fix. A mindful practice that stays with you—on and off the mat.",
    images: ["/samyoga-hero.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
