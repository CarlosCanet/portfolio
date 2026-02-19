import ConfettiTitle from "@/features/about/components/ConfettiTitle";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center mt-10 bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col items-center justify-start px-8 py-16 bg-white dark:bg-black gap-2">
        <ConfettiTitle className="-mt-32" />
        <div className="flex flex-col gap-5 w-full items-center -mt-20 z-10">
          <div className="flex flex-col md:flex-row mx-5 w-4/5 gap-5"></div>
          <div className="flex flex-col md:flex-row mx-5 w-4/5 gap-5"></div>
        </div>
      </main>
    </div>
  );
}
