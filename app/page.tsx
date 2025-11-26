import Hero from "@/components/sections/Hero";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />

      <Skills />
      <Experience />

      <section className="px-8 py-16">
        <h2 className="text-3xl font-semibold mb-8 items-center text-center text-blue-400">
          My current projects.
        </h2>

        <div className="grid gap-6 items-stretch items-center text-center">
          <div className="w-[650px] h-[260px] items-center mx-auto">
            <ProjectCard
              title="Work Schedule OCR Project"
              description="An application which extracts and organizes work schedules from images using OCR technology."
              href="/projects/work-schedule-ocr"
            />
          </div>

          <div className="w-[650px] h-[260px] items-center mx-auto">
            <ProjectCard
              title="MMA Stats Tracker"
              description="This project tracks and analyzes MMA fighter statistics to provide insights and performance metrics. This Project is still under development. I will be doing this project in React with a .NET API."
              href="/projects/mma-stats-tracker"
            />
          </div>

          <div className="w-[650px] h-[260px] items-center mx-auto">
            <ProjectCard
              title="Data Structures and Algorithms Journal"
              description="This project card showcases my progress in data structures and algorithms. I practicing different sorting algorithms and data strutures in Python, and doing LeetCode problems to see if learned anything."
              href="/projects/data-structures-algorithms-journal"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
