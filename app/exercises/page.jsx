import Link from 'next/link';
import { SearchExercises } from 'components/search-exercises';
import { getAllExercises } from 'lib/exercises';

export const metadata = {
    title: 'Exercise Library'
};

const subjects = [
    { id: 'math', label: 'Mathematics', icon: '∑' },
    { id: 'physics', label: 'Physics', icon: '⚛' },
    { id: 'chemistry', label: 'Chemistry', icon: '⚗' }
];

export default function ExercisesPage() {
    const exercises = getAllExercises();

    return (
        <div className="flex flex-col gap-12">
            <section>
                <h1 className="text-4xl font-bold mb-4">STEM Exercise Library</h1>
                <p className="text-lg text-blue-200 mb-8">
                    Explore comprehensive exercises across Mathematics, Physics, and Chemistry. Master fundamental concepts with detailed solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {subjects.map((subject) => (
                        <Link key={subject.id} href={`/exercises/${subject.id}`} className="no-underline">
                            <div className="p-6 border border-blue-400 rounded-lg hover:border-blue-200 hover:bg-blue-800/30 transition cursor-pointer text-center">
                                <div className="text-5xl mb-3">{subject.icon}</div>
                                <h2 className="text-2xl font-semibold">{subject.label}</h2>
                                <p className="text-blue-200 text-sm mt-2">
                                    {exercises[subject.id]?.length || 0} exercises
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6">Search & Filter</h2>
                <SearchExercises exercises={exercises} />
            </section>

            <section>
                <Link href="/" className="btn btn-lg">
                    ← Back to Home
                </Link>
            </section>
        </div>
    );
}
