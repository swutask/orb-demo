import { cn } from "@/lib";
import Image from "next/image";

const getNavStyles = () => {
    return cn("pt-7 flex justify-center items-center h-20")
}

export function NavComponent() {
  return (
    <nav className={getNavStyles()}>
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        sizes="200px"
        priority
      />
    </nav>
  );
}
