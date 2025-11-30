export default function Tools() {
  const tools = [
    "Git/Github/Git Bash",
    "Visual Studio 2022",
    "Visual Studio Code",
    "Postman",
    "Android Studio",
    "Unity",
    "MongoDB Compass",
    "Azure DevOps",
    "MS SQL Server Management Studio",
    "Windows 10/11",
    "Microsoft Office",
  ];

  return (
    <section className="px-8 py-16 flex flex-col items-center text-center gap-6">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-900">
        Tools
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl">
        {tools.map((tool) => (
          <div
            key={tool}
            className="h-20 w-full flex items-center justify-center rounded-xl bg-black/40 text-blue 300 border border-blue-700/30 shadow-sm text-sm text-center px-2"
          >
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
}
