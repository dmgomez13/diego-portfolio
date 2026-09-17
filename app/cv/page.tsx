import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CV() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            <Navbar />

            <section>
                <h1 className="text-2xl font-semibold tracking-tight">CV</h1>

                {/* About */}
                <div className="mt-12">
                    <h2 className="text-xl font-semibold tracking-tight">
                        About
                    </h2>

                    <div className="mt-4 space-y-4 leading-7 text-neutral-600 dark:text-neutral-400">

                        <p>
                            I&apos;m a Computer Science student at Stanislaus State
                            University with interests in IT, systems automation, and
                            cybersecurity.
                        </p>

                        <p>
                            My experience includes working in IT service desk support and
                            assisting with the operation of my university&apos;s computer lab. I
                            enjoy troubleshooting technical problems, working with computer
                            systems, and continuing to develop my skills across IT and
                            computer science.
                        </p>
                    </div>
                </div>

                {/* Experience */}
                <div className="mt-16">
                    <h2 className="text-xl font-semibold tracking-tight">
                        Experience
                    </h2>

                    <div className="mt-8">
                        <div className="flex flex-col justify-between gap-1 sm:flex-row">
                            <div>
                                <h3 className="font-medium">Computer Lab Assistant</h3>
                                <p className="text-sm text-neutral-500">
                                    Stanislaus State University
                                </p>
                            </div>

                            <p className="text-sm text-neutral-500">
                                Fall 2025 - Present
                            </p>
                        </div>

                        <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-neutral-600 dark:text-neutral-400">
                            <li>
                                Troubleshoot basic computer hardware and software issues and
                                assist users with hardware, software, and printing problems.
                            </li>

                            <li>
                                Perform minor maintenance and repairs on computer lab equipment.
                            </li>

                            <li>
                                Enforce lab procedures and maintain a safe, organized, and
                                efficient computing environment.
                            </li>
                        </ul>
                    </div>

                    <div className="mt-10">
                        <div className="flex flex-col justify-between gap-1 sm:flex-row">
                            <div>
                                <h3 className="font-medium">IT Service Desk</h3>
                                <p className="text-sm text-neutral-500">
                                    Yosemite Community College District
                                </p>
                            </div>

                            <p className="text-sm text-neutral-500">
                                Fall 2023 - Spring 2025
                            </p>
                        </div>

                        <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-neutral-600 dark:text-neutral-400">
                            <li>
                                Provided front-line IT support to students and staff for technical issues involving district devices and software.
                            </li>

                            <li>
                                Responded to support calls, documented technical issues, and created service desk tickets.
                            </li>

                            <li>
                                Assisted users with troubleshooting while providing efficient and courteous technical support.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Education */}
                <div className="mt-16">
                    <h2 className="text-xl font-semibold tracking-tight">
                        Education
                    </h2>

                    <div className="mt-8">
                        <div className="flex flex-col justify-between gap-1 sm:flex-row">
                            <div>
                                <h3 className="font-medium">
                                    Bachelor of Science in Computer Science
                                </h3>

                                <p className="text-sm text-neutral-500">
                                    Stanislaus State University
                                </p>
                            </div>

                            <p className="text-sm text-neutral-500">
                                Expected Spring 2027
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex flex-col justify-between gap-1 sm:flex-row">
                            <div>
                                <h3 className="font-medium">
                                    Associate of Science in Computer Science
                                </h3>

                                <p className="text-sm text-neutral-500">
                                    Modesto Junior College
                                </p>
                            </div>

                            <p className="text-sm text-neutral-500">
                                Spring 2025
                            </p>
                        </div>
                    </div>
                </div>

                {/* Technical Skills */}
                <div className="mt-16">
                    <h2 className="text-xl font-semibold tracking-tight">
                        Technical Skills
                    </h2>

                    <div className="mt-6 space-y-3 text-neutral-600 dark:text-neutral-400">
                        <p>
                            <span className="font-medium text-neutral-900 dark:text-neutral-100">
                                Programming:
                            </span>{" "}
                            Python, Java, C++, JavaScript
                        </p>

                        <p>
                            <span className="font-medium text-neutral-900 dark:text-neutral-100">
                                Web:
                            </span>{" "}
                            Next.js, React, TypeScript, Tailwind CSS
                        </p>
                        
                        <p>
                            <span className="font-medium text-neutral-900 dark:text-neutral-100">
                                IT:
                            </span>{" "}
                            Active Directory, hardware/software troubleshooting
                        </p>

                        <p>
                            <span className="font-medium text-neutral-900 dark:text-neutral-100">
                                Tools:
                            </span>{" "}
                            GitHub, Visual Studio Code
                        </p>
                    </div>
                </div>

                {/* Professional Development */}
                <div className="mt-16">
                    <h2 className="text-xl font-semibold tracking-tight">
                        Professional Development
                    </h2>

                    <div className="mt-6">
                        <div className="flex flex-col justify-between gap-1 sm:flex-row">
                            <div>
                                <h3 className="font-medium">CompTIA Security+</h3>
                                <p className="text-sm text-neutral-500">
                                    Currently preparing for certification
                                </p>
                            </div>

                            <p className="text-sm text-neutral-500">
                                In Progress
                            </p>
                        </div>
                    </div>
                </div>

                {/* Outside of Computer Science */}
                <div className="mt-16">
                    <h2 className="text-xl font-semibold tracking-tight">
                        Outside of Computer Science
                    </h2>


                    <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">
                        Outside of technology, I&apos;ve trained in combat sports for the
                        past five years, primarily practicing Brazilian Jiu-Jitsu and
                        kickboxing.
                    </p>
                </div>
            </section>

            <Footer />

        </main>
    );
}