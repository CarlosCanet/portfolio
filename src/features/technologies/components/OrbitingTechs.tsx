"use client";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { IconCloud } from "@/components/ui/icon-cloud";
import { useTheme } from "next-themes";

interface iconImages {
  name: string;
  color?: string;
}

function OrbitingTechs() {
  const { theme } = useTheme();
  const slugs: Array<iconImages> = [
    { name: "typescript" },
    { name: "javascript" },
    { name: "react" },
    { name: "nextdotjs", color: `${theme === "dark" ? "f8f8f8" : ""}` },
    { name: "git" },
    { name: "github", color: `${theme === "dark" ? "f8f8f8" : ""}` },
    { name: "githubcopilot", color: `${theme === "dark" ? "f8f8f8" : ""}` },
    { name: "modelcontextprotocol", color: `${theme === "dark" ? "f8f8f8" : ""}` },
    { name: "mongodb" },
    { name: "postgresql" },
    { name: "express", color: `${theme === "dark" ? "f8f8f8" : ""}` },
    { name: "nodedotjs" },
    { name: "prisma" },
    { name: "vitest" },
    { name: "jest" },
    { name: "html5" },
    { name: "css" },
    { name: "tailwindcss" },
    { name: "pnpm" },
    { name: "docker" },
    { name: "figma" },
    { name: "cloudinary" },
    { name: "stripe" },
  ];
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug.name}${slug.color ? `/${slug.color}` : ""}`);
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-xl white">
      <IconCloud images={images} />
      <StripedPattern className="mask-[radial-gradient(180px_circle_at_center,orange,transparent)] opacity-70" />
    </div>
  );
}
export default OrbitingTechs;
