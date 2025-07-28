import { Link } from "@/components/link";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сторінка не знайдена",
  description: "Вибачте, такої сторінки не існує.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/not-found",
  },
};

export default function NotFound() {
  return (
    <div
      className={cn`flex flex-col items-center justify-center min-h-screen p-4`}
    >
      <Logo withText className="h-12" />
      <div className="max-w-xl">
        <h2 className={cn`mt-4 text-4xl text-center font-bold`}>
          <strong className={cn`text-4xl block`}>404</strong>
          <span>Сторінка не знайдена</span>
        </h2>
        <p className={cn`mt-4 text-lg`}>
          Ймовірно, ця сторінка ніколи не існувала або стала непотрібною,
          і&nbsp;ми її&nbsp;видалили.
        </p>
        <p className={cn`mt-2 text-lg`}>
          Таке трапляється, не&nbsp;засмучуйтеся.{" "}
          <Link href="/">На&nbsp;головній</Link> ще є&nbsp;сторінки,
          не&nbsp;гірші за&nbsp;цю.
        </p>
        <p className={cn`mt-2 text-lg`}>
          Скаржитися сюди&nbsp;&rarr;{" "}
          <a
            className={cn`text-blue-600 hover:underline`}
            href="mailto:support@yarus.shop"
          >
            support@yarus.shop
          </a>
        </p>
      </div>
    </div>
  );
}
