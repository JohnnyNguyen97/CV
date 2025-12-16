import Hero from "@/components/sections/Hero";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Tools from "@/components/sections/Tools";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Skills />
      <Tools />
      <Experience />
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold title-gradient mb-8 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <ProjectCard
            title="Work Schedule OCR Project"
            description="An application which extracts and organizes work schedules from images using OCR technology. The application includes salary calculation and tax deductions. Built with PythonSimpleGUI."
            href="https://github.com/JohnnyNguyen97/Vagtplan_OCR"
            image="/images/vagtplan-ocr.png"
            githubLink="https://github.com/JohnnyNguyen97/Vagtplan_OCR"
            isExternal={true}
          />

          <ProjectCard
            title="MMA Stats Tracker Live"
            description="This project tracks and analyzes MMA fighter statistics to provide insights and performance metrics. Currently under development using React with a .NET API."
            href="/projects/mma-stats-tracker"
            image="/images/maxholloway.png"
          />

          <ProjectCard
            title="Data Structures and Algorithms Journal"
            description="This project showcases my progress in data structures and algorithms. I practice different sorting algorithms and data structures in Python, and solve LeetCode problems."
            href="/projects/data-structures-algorithms-journal"
            image="/images/Grokking.png"
            githubLink="https://github.com/JohnnyNguyen97/algorithms-journal"
            isExternal={true}
          />
        </div>
      </section>
    </main>
  );
}
