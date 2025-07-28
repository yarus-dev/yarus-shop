import Logo from "@/components/Logo";
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
      <Logo />
      <h2 className={cn`mt-4 text-2xl font-bold`}>Сторінку не знайдено</h2>
      <p className={cn`mt-2 text-center text-sm`}>
        Вибачте, такої сторінки не існує.
      </p>
    </div>
  );
}
