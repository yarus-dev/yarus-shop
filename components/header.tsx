import { Logo } from "@/components/logo"
import { cn } from "@/lib/cn"

export function Header({
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <header className={cn`flex justify-center px-4 ${className}`} {...props}>
      <Logo />
    </header>
  )
}
