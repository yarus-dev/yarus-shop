"use client"

import { Link } from "@/components/link"
import { Heading, Paragraph } from "@/components/typography"
import { cn } from "@/lib/cn"
import { useEffect } from "react"

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className={cn`flex flex-1 flex-col items-center justify-center p-4`}>
      <div className={cn`max-w-prose`}>
        <Heading level={2} className={cn`mt-4 text-2xl font-bold`}>
          Щось пішло не так
        </Heading>
        <Paragraph>
          Вибачте, сталася помилка. Спробуйте{" "}
          <Link href="#" onClick={() => reset()}>
            ще раз.
          </Link>
        </Paragraph>
      </div>
    </div>
  )
}
