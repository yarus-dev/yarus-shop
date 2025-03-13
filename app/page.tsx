import { Logo } from "@/components/logo";
import { cn } from "@/lib/styles";

export default function HomePage() {
  return (
    <div className={cn("flex  size-full justify-center items-center")}>
      <Logo />
    </div>
  );
}
