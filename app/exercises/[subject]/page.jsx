import Link from 'next/link';
import { ExerciseCard } from 'components/exercise-card';
import { getExercisesBySubject } from 'lib/exercises';

export const metadata = {
    title: 'Subject Exercises'
};

const subjectLabels = {
    math: 'Mathematics',
    physics: 'Physics',
    chemistry: 'Chemistry'
};

const subjectIcons = {
    math: '∑',
    physics: '⚛',
    chemistry: '⚗'
};

export default async function SubjectPage({ params }) {
    const { subject } = await params;
    const subjectExercises = getExercisesBySubject(subject);
    const label = subjectLabels[subject] || subject;
    const icon = subjectIcons[subject] || '📚';

    return (
        <div className="flex flex-col gap-8">
            <div>
                <Link href="/exercises" className="text-blue-300 hover:text-blue-100 mb-4 inline-block">
                    ← Back to Exercises
                </Link>
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{icon}</span>
                    <h1 className="text-4xl font-bold">{label}</h1>
                </div>
                <p className="text-blue-200">
                    {subjectExercises.length} exercises available
                </p>
            </div>

            {subjectExercises.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {subjectExercises.map((exercise) => (
                        <ExerciseCard key={exercise.id} exercise={exercise} />
                    ))}
                </div>
            ) : (
                <div className="p-6 bg-blue-800/30 border border-blue-400 rounded-lg text-center">
                    <p className="text-blue-200">No exercises available for this subject yet.</p>
                </div>
            )}
        </div>
    );
}
