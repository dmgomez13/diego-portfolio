export default function Footer() {
    return (
        <footer className="mt-24 border-t border-netural-200 pt-8 dark:border-neutral-800">
            <div className="flex flex-wrap gap-6 text-sm">
                <a
                    href="https://github.com/diegogomez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                >
                    github ↗
                </a>

                <a
                    href="https://linkedin.com/in/diego-gomez-a88939246/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                >
                    linkedin ↗
                </a>

                <a
                    href="mailto:dmgomez1313@gmail.com"
                    className="text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                >
                    email ↗
                </a>
            </div>

            <p className="mt-8 text-xs text-neutral-400 dark:text-neutral-600">
                © 2026 Diego Gomez Macias
            </p>
        </footer>
    );
}