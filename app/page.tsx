import { Logo } from "@/components/logo"
import { cn } from "@/lib/cn"

export default function Home() {
  return (
    <div
      className={cn`flex min-h-screen flex-col items-center justify-center p-4`}
    >
      <Logo />
    </div>
  )
}
