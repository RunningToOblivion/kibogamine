import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16 border-t border-blue-400 mt-16">
            <div className="flex flex-col gap-8">
                <div>
                    <h3 className="font-semibold text-white mb-2">Kibogamine</h3>
                    <p className="text-sm text-blue-200">
                        A comprehensive STEM exercise library for mastering mathematics, physics, and chemistry.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 text-sm">
                    <div>
                        <p className="font-semibold text-white mb-2">Subjects</p>
                        <ul className="space-y-1 text-blue-200">
                            <li><Link href="/exercises/math" className="hover:text-white transition">Mathematics</Link></li>
                            <li><Link href="/exercises/physics" className="hover:text-white transition">Physics</Link></li>
                            <li><Link href="/exercises/chemistry" className="hover:text-white transition">Chemistry</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-white mb-2">Learn</p>
                        <ul className="space-y-1 text-blue-200">
                            <li><Link href="/exercises" className="hover:text-white transition">Browse Exercises</Link></li>
                            <li><Link href="/" className="hover:text-white transition">How It Works</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-blue-400 text-sm text-blue-300">
                    <p>© {currentYear} Kibogamine. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
