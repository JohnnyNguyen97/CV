import Hero from "@/components/sections/Hero";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />

      <section className="grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 mx-auto">
        <ProjectCard
          title="Projects"
          description="Browse all personal and academic work."
          href="/projects"
        />

        <ProjectCard
          title="Case Study"
          description="Read an in-depth deep dive."
          href="/projects/case-study"
        />
      </section>
    </div>
  );
}
