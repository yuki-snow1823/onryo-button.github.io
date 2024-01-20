import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "怨霊ボタン",
  description: "そのボタンは押してはならない...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://yuki-snow1823.github.io/onryo-button.github.io/" />
        <meta property="og:image" content="https://github.com/yuki-snow1823/onryo-button.github.io/assets/59280290/effbb6f7-f867-49fc-8316-a8721780deef" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
