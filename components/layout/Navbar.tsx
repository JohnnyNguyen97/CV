import ThemeToggle from "@/components/layout/ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="w-full py-4 px-6 flex justify-between items-center border-b"
      style={{ borderColor: "var(--card-border)" }}
    >
      <h1 className="text-xl font-bold title-gradient">Portfolio</h1>
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:underline text-[color:var(--muted)]">
            Homepage
          </a>
          <a
            href="/projects"
            className="hover:underline text-[color:var(--muted)]"
          >
            Projects
          </a>
          <a
            href="/about"
            className="hover:underline text-[color:var(--muted)]"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:underline text-[color:var(--muted)]"
          >
            Contact
          </a>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
