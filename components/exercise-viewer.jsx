import { Markdown } from './markdown';
import { SolutionButton } from './solution-button';

export async function ExerciseViewer({ exercise }) {
    // We need to render markdown to HTML on the server to avoid passing it to client
    // For now, we'll pass the raw markdown and let the client handle it
    // This is a limitation we'll need to work around
    
    const difficultyColors = {
        basic: 'bg-green-600',
        intermediate: 'bg-yellow-600',
        advanced: 'bg-red-600'
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">{exercise.title}</h1>
                <span className={`text-sm font-bold px-3 py-1 rounded ${difficultyColors[exercise.difficulty]}`}>
                    {exercise.difficulty.toUpperCase()}
                </span>
            </div>

            <p className="text-lg text-blue-200">{exercise.description}</p>

            <div className="p-6 bg-blue-800/50 border border-blue-400 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Problem</h2>
                <div className="prose prose-invert max-w-none">
                    <Markdown content={exercise.problem} />
                </div>
            </div>

            <SolutionButton solution={exercise.solution} />
        </div>
    );
}
