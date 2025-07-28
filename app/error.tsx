"use client"

import { Logo } from "@/components/logo"
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
    <div
      className={cn`flex min-h-screen flex-col items-center justify-center p-4`}
    >
      <Logo withText className="h-12" />
      <h2 className={cn`mt-4 text-2xl font-bold`}>Щось пішло не так</h2>
      <button
        onClick={() => reset()}
        className={cn`bg-foreground text-background mt-4 rounded px-4 py-2`}
      >
        Спробувати знову
      </button>
    </div>
  )
}
