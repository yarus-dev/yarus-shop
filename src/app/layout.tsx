import { cn } from "@/lib/cn";
import { getOriginUrl } from "@/lib/utils";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
const rubik = Rubik({
  subsets: ["cyrillic", "latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Yarus Shop",
  metadataBase: new URL(getOriginUrl()),
  applicationName: "Yarus Shop",
  creator: "Yaroslav Usenko",
  authors: [{ url: getOriginUrl("/humans.txt") }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk-UA">
      <body className={cn`${rubik.variable} antialiased`}>{children}</body>
    </html>
  );
}
