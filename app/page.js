import { HeroComponent } from "@/components";
import { cn } from "@/lib";

const getHomeStyles = () => cn("flex w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start");

export default function Home() {
  return (
    <main className={getHomeStyles()}>
      <HeroComponent />
    </main>
  );
}
