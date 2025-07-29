import { Link } from "@/components/link"
import { Heading, Paragraph } from "@/components/typography"
import { cn } from "@/lib/cn"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 - Сторінка не знайдена",
  description: "Вибачте, такої сторінки не існує.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/404",
  },
}

export default function NotFound() {
  return (
    <div className={cn`flex flex-1 flex-col items-center justify-center p-4`}>
      <div className={cn`max-w-prose`}>
        <Heading level={1} className={cn`text-center`}>
          404
        </Heading>
        <Paragraph lead className={cn`text-center`}>
          Сторінка не знайдена
        </Paragraph>
        <Paragraph>
          Ймовірно, ця сторінка ніколи не існувала або стала непотрібною,
          і&nbsp;ми її&nbsp;видалили.
        </Paragraph>
        <Paragraph>
          Таке трапляється, не&nbsp;засмучуйтеся.{" "}
          <Link href="/">На&nbsp;головній</Link> ще є&nbsp;сторінки,
          не&nbsp;гірші за&nbsp;цю.
        </Paragraph>
        <Paragraph>
          Скаржитися сюди&nbsp;&rarr;{" "}
          <a
            className={cn`text-blue-600 hover:underline`}
            href="mailto:support@yarus.shop"
          >
            support@yarus.shop
          </a>
        </Paragraph>
      </div>
    </div>
  )
}
