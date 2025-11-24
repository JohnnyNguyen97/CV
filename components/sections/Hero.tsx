export default function Hero() {
  return (
    <section className="min-h-[70vh] w-full flex flex-col justify-center items-start gap-6 px-8 py-32">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
        Hello, I am Johnny
      </h1>

      <p className="text-lg max-w-xl text-zinc-400">
        Welcome to my portfolio. This is where I will be showcasing my projects.
      </p>

      <a
        href="/projects"
        className="mt-4 px-6 py-3 rounded-xl bg-[var(--primary)] text-black font-semibold hover-glow"
      >
        View Projects →
      </a>
    </section>
  );
}
