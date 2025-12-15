export default function GitHubButton() {
  return (
    <a
      href="https://github.com/JohnnyNguyen97"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open GitHub profile"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full w-12 h-12 shadow-md hover:shadow-lg transition-all bg-[color:var(--card-bg)]/80"
      style={{ border: '1px solid', borderColor: 'var(--card-border)' }}
    >
      {/* GitHub Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[color:var(--primary)]"
      >
        <path d="M9 19c-5 1-5-2-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 10.5 19V22"></path>
      </svg>
    </a>
  );
}