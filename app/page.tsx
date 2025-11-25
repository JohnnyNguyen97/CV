import Hero from "@/components/sections/Hero";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />

      <section className="px-8 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-blue-400">
          My current projects.
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <ProjectCard
            title="Work Schedule OCR Project"
            description="An application which extracts and organizes work schedules from images using OCR technology."
            href="/projects/work-schedule-ocr"
          />

          <ProjectCard
            title="MMA Stats Tracker"
            description="This project tracks and analyzes MMA fighter statistics to provide insights and performance metrics. This Project is still under development. I will be doing this project in React with a .NET API."
            href="/projects/mma-stats-tracker"
          />

          <ProjectCard
            title="Data Structures and Algorithms Journal"
            description="This project card showcases my progress in data structures and algorithms. I practicing different sorting algorithms and data strutures in Python, and doing LeetCode problems to see if learned anything."
            href="/projects/data-structures-algorithms-journal"
          />
        </div>
      </section>
    </main>
  );
}
