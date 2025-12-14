import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h1 className="mb-4 text-4xl sm:text-5xl font-bold">Kibogamine</h1>
                <p className="mb-2 text-xl font-semibold text-blue-300">STEM Exercise Library</p>
                <p className="mb-6 text-lg text-blue-200">
                    Master mathematics, physics, and chemistry with a comprehensive collection of exercises. 
                    Learn fundamental concepts through detailed problems and solutions.
                </p>
                <Link href="/exercises" className="btn btn-lg">
                    Browse Exercises →
                </Link>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/exercises/math" className="no-underline">
                    <div className="p-6 border border-blue-400 rounded-lg hover:border-blue-200 hover:bg-blue-800/30 transition cursor-pointer h-full">
                        <div className="text-4xl mb-3">∑</div>
                        <h3 className="text-xl font-semibold mb-2">Mathematics</h3>
                        <p className="text-blue-200 text-sm">
                            Algebra, calculus, linear systems, and more. Build your mathematical foundations.
                        </p>
                    </div>
                </Link>

                <Link href="/exercises/physics" className="no-underline">
                    <div className="p-6 border border-blue-400 rounded-lg hover:border-blue-200 hover:bg-blue-800/30 transition cursor-pointer h-full">
                        <div className="text-4xl mb-3">⚛</div>
                        <h3 className="text-xl font-semibold mb-2">Physics</h3>
                        <p className="text-blue-200 text-sm">
                            Kinematics, energy, forces, and motion. Understand the laws of the physical world.
                        </p>
                    </div>
                </Link>

                <Link href="/exercises/chemistry" className="no-underline">
                    <div className="p-6 border border-blue-400 rounded-lg hover:border-blue-200 hover:bg-blue-800/30 transition cursor-pointer h-full">
                        <div className="text-4xl mb-3">⚗</div>
                        <h3 className="text-xl font-semibold mb-2">Chemistry</h3>
                        <p className="text-blue-200 text-sm">
                            Reactions, molarity, bonding, and reactions. Master the science of matter.
                        </p>
                    </div>
                </Link>
            </section>

            <section className="border-t border-blue-400 pt-8">
                <h2 className="text-2xl font-bold mb-4">How It Works</h2>
                <div className="space-y-4 text-blue-200">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">1</div>
                        <div>
                            <h3 className="font-semibold text-white">Browse by Subject</h3>
                            <p>Select from mathematics, physics, or chemistry to explore available exercises.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">2</div>
                        <div>
                            <h3 className="font-semibold text-white">Solve the Problem</h3>
                            <p>Read the exercise carefully and attempt to solve it on your own.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">3</div>
                        <div>
                            <h3 className="font-semibold text-white">View the Solution</h3>
                            <p>Compare your work with our detailed step-by-step solutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
                <Link href="/exercises" className="btn btn-lg">
                    Explore the Library
                </Link>
            </section>
        </div>
    );
}
