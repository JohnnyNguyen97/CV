import Hero from "@/components/sections/Hero";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />

      <section className="px-8 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-blue-400">
          Featured Projects
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <ProjectCard
            title="AI Dashboard"
            description="A modern dashboard with ML-powered insights."
            href="/projects/ai-dashboard"
          />

          <ProjectCard
            title="Portfolio Website"
            description="This website — built with Next.js and Tailwind."
            href="/projects/portfolio"
          />
        </div>
      </section>
    </main>
  );
}
