import { cn } from "@/lib/styles";

export default function NotFound() {
  return (
    <div className={cn("flex  size-full justify-center items-center")}>
      <div className={cn("container max-w-prose p-4")}>
        <h1>404 - Page Not Found</h1>
      </div>
    </div>
  );
}
