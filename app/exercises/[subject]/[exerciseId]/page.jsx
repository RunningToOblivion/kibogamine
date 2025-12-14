import Link from 'next/link';
import { ExerciseViewer } from 'components/exercise-viewer';
import { getExerciseById } from 'lib/exercises';

export const metadata = {
    title: 'Exercise'
};

export default async function ExercisePage({ params }) {
    const { subject, exerciseId } = await params;
    const exercise = getExerciseById(subject, exerciseId);

    if (!exercise) {
        return (
            <div className="flex flex-col gap-6">
                <Link href="/exercises" className="text-blue-300 hover:text-blue-100">
                    ← Back to Exercises
                </Link>
                <div className="p-6 bg-red-900/30 border border-red-400 rounded-lg text-center">
                    <p className="text-red-200">Exercise not found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6">
            <Link href={`/exercises/${subject}`} className="text-blue-300 hover:text-blue-100">
                ← Back to {subject}
            </Link>
            <ExerciseViewer exercise={exercise} />
        </div>
    );
}
