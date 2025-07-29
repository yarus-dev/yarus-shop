import { cn } from "@/lib/cn"

export function Footer({
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn`${className}`} {...props}>
      <p className={cn`mx-auto max-w-fit p-4 text-xs text-zinc-500`}>
        © 2025 Інтернет-магазин товарів для інженерів «Ярус».{" "}
        <a href="/humans.txt" target="_blank" className="underline">
          Зроблено
        </a>{" "}
        з любов’ю{" "}
        <a
          href="https://www.usenkp.pp.ua"
          target="_blank"
          className="underline"
        >
          Ярославом Усенком
        </a>
        . Усі права залишаю за собою.
      </p>
    </footer>
  )
}
