import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
            <h2 className="font-medium">
              Personal Portfolio
            </h2>

            <p className="mt-2 leading-6 text-neutral-600 dark:text-neutral-400">
              A personal website for showcasing my experience, education,
              technical interests, and future projects.
            </p>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}