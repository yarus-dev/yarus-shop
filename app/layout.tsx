import "@/app/globals.css"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

import { cn } from "@/lib/cn"
import { getOriginUrl } from "@/lib/utils"
import type { Metadata } from "next"
import { IBM_Plex_Sans } from "next/font/google"

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["cyrillic", "latin"],
  variable: "--font-ibm-plex-sans",
})

export const metadata: Metadata = {
  title: "Ярус — інтернет-магазин для інженерів",
  description:
    "Ярус — інтернет-магазин для інженерів і розробників. 3D-принтери, пластик, комплектуючі для дронів, плати та інші інженерні рішення в одному місці.",
  keywords: [
    "інтернет-магазин",
    "інженери",
    "3D-принтери",
    "пластик",
    "дрони",
    "плати",
  ],
  metadataBase: new URL(getOriginUrl()),
  applicationName: "Yarus Shop",
  creator: "Yaroslav Usenko",
  publisher: "Yaroslav Usenko",
  authors: [
    { name: "Yaroslav Usenko", url: "https://www.usenko.pp.ua" },
    { url: getOriginUrl("/humans.txt") },
  ],
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk-UA">
      <body
        className={cn`${IBMPlexSans.variable} flex size-full min-h-screen flex-col antialiased`}
      >
        <Header />
        {children}
        <Footer className={cn`mt-auto`} />
      </body>
    </html>
  )
}
