import { Logo } from "@/components/logo";
import { cn } from "@/lib/cn";

export default function Home() {
  return (
    <div
      className={cn`flex flex-col items-center justify-center min-h-screen p-4`}
    >
      <Logo />
    </div>
  );
}
