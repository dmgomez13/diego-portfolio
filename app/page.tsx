import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Navbar />

      <section>
        <h1 className="text-2xl font-semibold tracking-tight">
          Diego Gomez Macias
        </h1>

        <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
          <p>
            I&apos;m a Computer Science student interested in IT, systems automation, and cybersecurity.
          </p>

          <p>
            I enjoy working with technology hands-on, solving technical
            problems, and learning how computer systems can be made more
            efficient, reliable, and secure. 
          </p>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-lg font-medium">
          Areas of Interest
        </h2>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
            IT
          </span>

          <span className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
            Systems Automation
          </span>

          <span className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
            Cybersecurity
          </span>
        </div>
      </section>
      <Footer />
    </main>
  );
}