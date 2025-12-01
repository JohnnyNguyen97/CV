export default function Skills() {
  const skills = [
    "C#/ .NET",
    "SQL",
    "NoSQL/MongoDB",
    "Kotlin/Jetpack Compose",
    "Blazor WebAsembly",
    "ASP.NET",
    "React/ Next.js",
    "Python",
    "Unity",
    "Git/GitHub",
    "HTML/CSS",
  ];

  return (
    <section className="px-8 py-16 flex flex-col items-center text-center gap-6">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-900">
        Skills & Tech
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl">
        {skills.map((skill) => (
          <div
            key={skill}
            className="h-20 w-full flex items-center justify-center rounded-xl bg-black/40 text-blue 300 border border-blue-700/30 shadow-sm text-sm text-center px-2"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
