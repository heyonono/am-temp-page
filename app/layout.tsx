import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@fontsource-variable/instrument-sans";
import "./globals.css";

const siteUrl = "https://attentionmatters.ai";
const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Attention Matters | Practical AI for owner-led businesses",
  description:
    "Practical AI, automation, and digital systems advisory for owner-led businesses and organizations.",
  keywords: [
    "AI consultant Vancouver",
    "small business AI",
    "AI automation",
    "AI systems advisor",
    "business automation",
  ],
  openGraph: {
    title: "Attention Matters",
    description: "Put AI to work on the right problem.",
    url: siteUrl,
    siteName: "Attention Matters",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attention Matters",
    description: "Put AI to work on the right problem.",
  },
  icons: {
    icon: "/am-logo-mark.webp",
  },
};

export const viewport: Viewport = {
  themeColor: "#171624",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
      {googleAnalyticsId ? <GoogleAnalytics gaId={googleAnalyticsId} /> : null}
    </html>
  );
}
