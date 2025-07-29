import { cn } from "@/lib/cn"
import * as React from "react"

export function Heading({
  level = 4,
  className,
  children,
}: {
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  children: React.ReactNode
}) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements
  const styles = {
    1: "text-4xl font-extrabold text-balance",
    2: "text-3xl font-bold",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base",
  }[level]
  return (
    <Tag
      className={cn(
        "mt-6 scroll-m-20 font-semibold tracking-tight first:mt-0",
        styles,
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export function Paragraph({
  className,
  children,
  lead = false,
}: {
  className?: string
  children: React.ReactNode
  lead?: boolean
}) {
  return (
    <p
      className={cn(
        "[&:not(:first-child)]:mt-3",
        lead && "text-muted-foreground text-xl",
        className,
      )}
    >
      {children}
    </p>
  )
}

export function Blockquote({
  cite,
  className,
  children,
}: {
  cite?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <blockquote className={cn("mt-3 pl-5 italic", className)}>
      <p className="pt-1">{children}</p>
      {cite && (
        <footer className="mt-1 text-sm">
          — <cite>{cite}</cite>
        </footer>
      )}
    </blockquote>
  )
}

export function List({
  ordered,
  className,
  children,
  ...rest
}: {
  ordered?: boolean
  className?: string
  children: React.ReactNode
}) {
  const Tag = ordered ? "ol" : "ul"
  return (
    <Tag
      className={cn(
        "my-3 space-y-1 pl-5",
        ordered ? "list-decimal" : "list-disc",
        className,
      )}
      {...rest}
    >
      {React.Children.map(children, (child, i) =>
        React.isValidElement(child) &&
        typeof child.type === "string" &&
        child.type === "li" ? (
          child
        ) : (
          <li key={i}>{child}</li>
        ),
      )}
    </Tag>
  )
}

export function DefinitionList({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <dl className={cn("my-3 space-y-1", className)}>{children}</dl>
}

DefinitionList.Item = function DefinitionListItem({
  term,
  children,
}: {
  term: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <>
      <dt className={cn`text-lg font-semibold`}>{term}</dt>
      <dd className={cn`pl-5`}>{children}</dd>
    </>
  )
}

export function CodeBlock({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <pre
      className={cn(
        "mt-3 overflow-x-auto rounded-md bg-stone-600 px-3 py-4 font-mono text-sm text-stone-100",
        className,
      )}
    >
      <code>{children}</code>
    </pre>
  )
}
