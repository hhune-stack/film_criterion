import type { Metadata } from "next";
import { Inter, Noto_Serif_JP } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://contrecamp-e18gvas07-hhu4.vercel.app"
  ),

  title: {
    default: "CONTRECHAMP",
    template: "%s | CONTRECHAMP",
  },

  description:
    "映画を読むための批評。映画から世界へ向けて思考を開く。",

  openGraph: {
    title: "CONTRECHAMP",
    description:
      "映画を読むための批評。映画から世界へ向けて思考を開く。",
    type: "website",
    locale: "ja_JP",
    siteName: "CONTRECHAMP",
  },

  twitter: {
    card: "summary_large_image",
    title: "CONTRECHAMP",
    description:
      "映画を読むための批評。映画から世界へ向けて思考を開く。",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSerifJP.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}