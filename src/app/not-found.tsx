import { cn } from '@/lib/cn'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className={cn`flex flex-col items-center justify-center min-h-screen p-4`}>
      <Image src="/logo-full.svg" alt="Yarus Logo" width={200} height={20} priority />
      <h2 className={cn`mt-4 text-2xl font-bold`}>Сторінку не знайдено</h2>
      <p className={cn`mt-2 text-center text-sm`}>
        Вибачте, такої сторінки не існує.
      </p>
    </div>
  )
}
