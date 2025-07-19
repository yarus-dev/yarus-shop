import { cn } from '@/lib/cn';
import Image from "next/image";

export default function Home() {
  return (
    <div className={cn`flex flex-col items-center justify-center min-h-screen p-4`}>
      <Image
        src="/logo-full.svg"
        alt="Yarus Logo"
        width={200}
        height={20}
        priority
      />
    </div>
  );
}
