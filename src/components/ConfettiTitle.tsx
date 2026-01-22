"use client";

import { useRef } from "react";
import { Confetti, ConfettiRef } from "./ui/confetti";

function ConfettiTitle() {
  const confettiRef = useRef<ConfettiRef>(null)
  return (
    <div className="relative flex h-125 w-full flex-col items-center justify-center overflow-hidden">
      <span className="pointer-events-none bg-linear-to-b from-black to-orange-600/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-orange-500 dark:to-orange-500/30">
        Carlos Canet
      </span>
      <span className="pointer-events-none bg-linear-to-b from-black to-orange-600/80 bg-clip-text text-center text-4xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-orange-400/80 dark:to-orange-400/20">
        Full Stack Developer Portfolio
      </span>
      <Confetti
        ref={confettiRef}
        className="absolute top-0 left-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({})
        }}
      />
    </div>
  );
}
export default ConfettiTitle;
