function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17 17 7M7 7h10v10"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200 pt-8 dark:border-neutral-800">
      <div className="flex flex-wrap gap-6 text-sm">

        <a
          href="https://github.com/dmgomez13"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
        >
          github
          <ExternalLinkIcon />
        </a>

        <a
          href="https://linkedin.com/in/diego-gomez-a88939246/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
        >
          linkedin
          <ExternalLinkIcon />
        </a>

        <a
          href="mailto:dmgomez1313@gmail.com"
          className="inline-flex items-center gap-1 text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
        >
          email
          <ExternalLinkIcon />
        </a>

      </div>

      <p className="mt-8 text-xs text-neutral-400 dark:text-neutral-600">
        © 2026 Diego Gomez Macias
      </p>
    </footer>
  );
}