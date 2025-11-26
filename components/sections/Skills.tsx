export default function Skills() {
  const skills = ["C#/ .NET", "SQL", "Unity"];

  return (
    <section className="px-8 py-16 flex flex-col items-center text-center gap-6">
      <h2 className="text-3xl font-semibold text-blue-400">Skills & Tech</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-4 py-2 rounded-xl bg-black/40 text-blue-300 border border-blue-700/30 shadow-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
