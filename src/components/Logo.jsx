import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image src="/logo.svg" alt="Yarus Logo" width={40} height={40} priority />
      <span className="ml-2 text-xl font-bold">Yarus</span>
    </div>
  );
}
