import ConfettiTitle from "@/features/About/components/ConfettiTitle";
import ContactCard from "@/features/Contact/components/ContactCard";
import ProjectListCard from "@/features/Projects/components/ProjectListCard";
import TechnologiesCard from "@/features/Technologies/components/TechnologiesCard";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center mt-10 bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col items-center justify-start px-8 py-16 bg-white dark:bg-black gap-2">
        <ConfettiTitle />
        <TechnologiesCard />
        <ProjectListCard />
        <ContactCard />
      </main>
    </div>
  );
}
