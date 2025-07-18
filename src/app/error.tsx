'use client'

import Image from 'next/image'
import { useEffect } from 'react'

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Image src="/logo-full.svg" alt="Yarus Logo" width={200} height={20} priority />
      <h2 className="mt-4 text-2xl font-bold">Щось пішло не так</h2>
      <button
        onClick={() => reset()}
        className="mt-4 bg-foreground text-background py-2 px-4 rounded"
      >
        Спробувати знову
      </button>
    </div>
  )
}
