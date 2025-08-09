import About from "@/components/about";
import Landing from "@/components/landing";
import Projects from "@/components/projects";
import TechStacks from "@/components/tech-stacks";

export default function Home() {
  return (
    <main className="font-manrope flex flex-col gap-20">
      <Landing />
      <TechStacks />
      <Projects />
      <About />
    </main>
  );
}
