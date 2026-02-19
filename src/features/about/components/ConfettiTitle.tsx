"use client";

import { useRef } from "react";
import { Confetti, ConfettiRef } from "@/components/ui/confetti";
import { Shape } from "canvas-confetti";
import { cn } from "@/lib/utils";

interface ConfettiTitleProps {
  className?: string;
}

function ConfettiTitle({ className }: ConfettiTitleProps) {
  const confettiRef = useRef<ConfettiRef>(null);
  return (
    <div className={cn("relative flex h-125 w-full flex-col items-center justify-center overflow-hidden", className)}>
      <span className="pointer-events-none bg-linear-to-b from-black to-orange-600/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-orange-500 dark:to-orange-500/30">
        Carlos Canet
      </span>
      <span className="pointer-events-none bg-linear-to-b from-black to-orange-600/80 bg-clip-text text-center text-4xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-orange-400/80 dark:to-orange-400/20">
        Full Stack Developer
      </span>
      <Confetti
        ref={confettiRef}
        className="absolute top-0 left-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
        options={{
          get colors() {
            return ["#F97316", "#FB923C", "#FCD34D", "#34D399", "#60A5FA", "#A78BFA"];
          },
          get shapes() {
            return ["square", "circle"] as Shape[];
          },
          get spread() {
            return 90;
          },
          get particleCount() {
            return 150;
          },
          get scalar() {
            return 0.8;
          },
          get ticks() {
            return 300;
          },
        }}
      />
    </div>
  );
}
export default ConfettiTitle;
