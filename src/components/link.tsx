import { cn } from "@/lib/cn";
import NextLink, { LinkProps } from "next/link";
import { forwardRef } from "react";

type Props = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, ...props }, ref) => (
    <NextLink
      ref={ref}
      className={cn`text-blue-600 hover:underline ${className}`}
      {...props}
    >
      {children}
    </NextLink>
  )
);

Link.displayName = "Link";

export default Link;
