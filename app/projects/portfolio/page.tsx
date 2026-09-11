import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Portfolio() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Navbar />

      <article>
        <Link
          href="/projects"
          className="text-sm text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
        >
          ← projects
        </Link>

        <h1 className="mt-8 text-2xl font-semibold tracking-tight">
          Personal Portfolio
        </h1>

        <p className="mt-4 text-neutral-500">
          Next.js · React · TypeScript · Tailwind CSS
        </p>

        <div className="mt-12 space-y-12">
          <section>
            <h2 className="text-lg font-medium">
              About the Project
            </h2>

            <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">
              I built this website as my personal portfolio to showcase my
              education, professional experience, technical interests, and
              projects as I continue developing my career in computer science
              and information technology.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">
              Technologies
            </h2>

            <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">
              The website is built with Next.js, React, TypeScript, and
              Tailwind CSS. It includes reusable React components, responsive
              layouts, multiple routes, and light and dark themes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">
              What I Learned
            </h2>

            <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">
              Building this project introduced me to component-based web
              development, routing with Next.js, responsive design with
              Tailwind CSS, and managing interactive client-side features
              such as theme switching.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}