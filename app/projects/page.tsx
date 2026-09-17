import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FolderIcon from "@/components/FolderIcon";

export default function Projects() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Navbar />

      <section>
        <h1 className="text-2xl font-semibold tracking-tight">
          Projects
        </h1>

        <p className="mt-6 text-neutral-600 dark:text-neutral-400">
          Things I&apos;ve built and projects I&apos;m currently working on.
        </p>

        <div className="mt-12">
          <a
            href="/projects/portfolio"
            className="group block rounded-lg border border-neutral-200 p-5 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
          >
            <div className="flex items-center gap-5">

              {/* Project icon */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                <FolderIcon />
              </div>

              {/* Project information */}
              <div>
                <h2 className="font-medium">
                  Personal Portfolio
                </h2>

                <p className="mt-2 leading-6 text-neutral-600 dark:text-neutral-400">
                  A personal website for showcasing my experience, education,
                  technical interests, and future projects.
                </p>
              </div>

            </div>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}