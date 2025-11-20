export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center border-b border-neutral-200 dark:border-neutral-800">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/projects" className="hover:underline">
          Projects
        </a>
        <a href="/about" className="hover:underline">
          About
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
      </div>
    </nav>
  );
}
