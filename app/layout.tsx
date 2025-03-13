import { cn } from "@/lib/styles";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "ЯРУСАРНЯ",
  description: "Інтернет-крамниця Ярусарня",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk-UA">
      <body className={cn(rubik.variable, "antialiased")}>{children}</body>
    </html>
  );
}
