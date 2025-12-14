import Link from 'next/link';

export function ExerciseCard({ exercise }) {
    const difficultyColors = {
        basic: 'bg-green-600',
        intermediate: 'bg-yellow-600',
        advanced: 'bg-red-600'
    };

    return (
        <Link href={`/exercises/${exercise.subject}/${exercise.id}`} className="no-underline">
            <div className="p-6 border border-blue-400 rounded-lg hover:border-blue-200 hover:bg-blue-800/30 transition cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold flex-1">{exercise.title}</h3>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${difficultyColors[exercise.difficulty]}`}>
                        {exercise.difficulty.toUpperCase()}
                    </span>
                </div>
                <p className="text-blue-200 text-sm">{exercise.description}</p>
            </div>
        </Link>
    );
}
