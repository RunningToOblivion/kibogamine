'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

export function SearchExercises({ exercises }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');
    const [selectedSubject, setSelectedSubject] = useState('all');
    const [selectedTags, setSelectedTags] = useState([]);
    const [showTagMenu, setShowTagMenu] = useState(false);

    // Get all unique tags from exercises
    const allTags = useMemo(() => {
        const tags = new Set();
        Object.values(exercises).flat().forEach((exercise) => {
            if (exercise.tags && Array.isArray(exercise.tags)) {
                exercise.tags.forEach((tag) => tags.add(tag));
            }
        });
        return Array.from(tags).sort();
    }, [exercises]);

    const filteredExercises = useMemo(() => {
        let results = Object.values(exercises).flat();

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            results = results.filter(
                (exercise) =>
                    exercise.title.toLowerCase().includes(query) ||
                    (exercise.problem && exercise.problem.toLowerCase().includes(query)) ||
                    exercise.subject.toLowerCase().includes(query) ||
                    (exercise.tags && exercise.tags.some((tag) => tag.toLowerCase().includes(query)))
            );
        }

        // Filter by subject
        if (selectedSubject !== 'all') {
            results = results.filter((exercise) => exercise.subject === selectedSubject);
        }

        // Filter by difficulty
        if (selectedDifficulty !== 'all') {
            results = results.filter((exercise) => exercise.difficulty === selectedDifficulty);
        }

        // Filter by tags
        if (selectedTags.length > 0) {
            results = results.filter((exercise) =>
                exercise.tags && selectedTags.some((tag) => exercise.tags.includes(tag))
            );
        }

        return results;
    }, [searchQuery, selectedDifficulty, selectedSubject, selectedTags, exercises]);

    const toggleTag = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                {/* Search Bar */}
                <div>
                    <input
                        type="text"
                        placeholder="Search exercises by title, description, or subject..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 bg-blue-800 border border-blue-400 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-200 transition"
                    />
                </div>

                {/* Subject Filter */}
                <div>
                    <p className="text-sm font-semibold text-blue-200 mb-2">Subject</p>
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => setSelectedSubject('all')}
                            className={`px-4 py-2 rounded-lg font-semibold transition ${
                                selectedSubject === 'all'
                                    ? 'bg-blue-600 text-white border border-blue-400'
                                    : 'bg-blue-800/50 text-blue-200 border border-blue-400 hover:bg-blue-800'
                            }`}
                        >
                            All Subjects
                        </button>
                        <button
                            onClick={() => setSelectedSubject('math')}
                            className={`px-4 py-2 rounded-lg font-semibold transition ${
                                selectedSubject === 'math'
                                    ? 'bg-blue-600 text-white border border-blue-400'
                                    : 'bg-blue-800/50 text-blue-200 border border-blue-400 hover:bg-blue-800'
                            }`}
                        >
                            ∑ Mathematics
                        </button>
                        <button
                            onClick={() => setSelectedSubject('physics')}
                            className={`px-4 py-2 rounded-lg font-semibold transition ${
                                selectedSubject === 'physics'
                                    ? 'bg-blue-600 text-white border border-blue-400'
                                    : 'bg-blue-800/50 text-blue-200 border border-blue-400 hover:bg-blue-800'
                            }`}
                        >
                            ⚛ Physics
                        </button>
                        <button
                            onClick={() => setSelectedSubject('chemistry')}
                            className={`px-4 py-2 rounded-lg font-semibold transition ${
                                selectedSubject === 'chemistry'
                                    ? 'bg-blue-600 text-white border border-blue-400'
                                    : 'bg-blue-800/50 text-blue-200 border border-blue-400 hover:bg-blue-800'
                            }`}
                        >
                            ⚗ Chemistry
                        </button>
                    </div>
                </div>

                {/* Difficulty Filter */}
                <div>
                    <p className="text-sm font-semibold text-blue-200 mb-2">Difficulty</p>
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => setSelectedDifficulty('all')}
                            className={`px-4 py-2 rounded-lg font-semibold transition ${
                                selectedDifficulty === 'all'
                                    ? 'bg-blue-600 text-white border border-blue-400'
                                    : 'bg-blue-800/50 text-blue-200 border border-blue-400 hover:bg-blue-800'
                            }`}
                        >
                            All Levels
                        </button>
                        <button
                            onClick={() => setSelectedDifficulty('basic')}
                            className={`px-4 py-2 rounded-lg font-semibold transition ${
                                selectedDifficulty === 'basic'
                                    ? 'bg-green-600 text-white border border-green-400'
                                    : 'bg-green-800/30 text-green-200 border border-green-400 hover:bg-green-800/50'
                            }`}
                        >
                            Basic
                        </button>
                        <button
                            onClick={() => setSelectedDifficulty('intermediate')}
                            className={`px-4 py-2 rounded-lg font-semibold transition ${
                                selectedDifficulty === 'intermediate'
                                    ? 'bg-yellow-600 text-white border border-yellow-400'
                                    : 'bg-yellow-800/30 text-yellow-200 border border-yellow-400 hover:bg-yellow-800/50'
                            }`}
                        >
                            Intermediate
                        </button>
                        <button
                            onClick={() => setSelectedDifficulty('advanced')}
                            className={`px-4 py-2 rounded-lg font-semibold transition ${
                                selectedDifficulty === 'advanced'
                                    ? 'bg-red-600 text-white border border-red-400'
                                    : 'bg-red-800/30 text-red-200 border border-red-400 hover:bg-red-800/50'
                            }`}
                        >
                            Advanced
                        </button>
                    </div>
                </div>

                {/* Tags Filter (Collapsible) */}
                {allTags.length > 0 && (
                    <div>
                        <button
                            onClick={() => setShowTagMenu(!showTagMenu)}
                            className="flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-blue-100 transition"
                        >
                            <span>{showTagMenu ? '▼' : '▶'}</span>
                            Advanced Filters ({selectedTags.length > 0 ? selectedTags.length + ' active' : 'Tags'})
                        </button>

                        {showTagMenu && (
                            <div className="mt-3 p-4 bg-blue-800/30 border border-blue-400 rounded-lg">
                                <p className="text-xs font-semibold text-blue-300 mb-3 uppercase">Filter by Topic</p>
                                <div className="flex flex-wrap gap-2">
                                    {allTags.map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={() => toggleTag(tag)}
                                            className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                                                selectedTags.includes(tag)
                                                    ? 'bg-purple-600 text-white border border-purple-400'
                                                    : 'bg-blue-700 text-blue-200 border border-blue-500 hover:bg-blue-600'
                                            }`}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Results */}
            <div>
                <p className="text-blue-200 text-sm mb-4">
                    Found {filteredExercises.length} exercise{filteredExercises.length !== 1 ? 's' : ''}
                </p>

                {filteredExercises.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredExercises.map((exercise) => (
                            <ExerciseSearchResult key={exercise.id} exercise={exercise} />
                        ))}
                    </div>
                ) : (
                    <div className="p-8 bg-blue-800/30 border border-blue-400 rounded-lg text-center">
                        <p className="text-blue-200">No exercises found matching your search.</p>
                        <p className="text-blue-300 text-sm mt-2">Try adjusting your search terms or filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function ExerciseSearchResult({ exercise }) {
    const difficultyColors = {
        basic: 'bg-green-600',
        intermediate: 'bg-yellow-600',
        advanced: 'bg-red-600'
    };

    return (
        <Link href={`/exercises/${exercise.subject}/${exercise.id}`} className="no-underline">
            <div className="p-6 border border-blue-400 rounded-lg hover:border-blue-200 hover:bg-blue-800/30 transition cursor-pointer h-full">
                <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">{exercise.title}</h3>
                        <p className="text-blue-300 text-sm capitalize">{exercise.subject}</p>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded whitespace-nowrap ml-2 ${difficultyColors[exercise.difficulty]}`}>
                        {exercise.difficulty.toUpperCase()}
                    </span>
                </div>
                {exercise.tags && exercise.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-blue-400">
                        {exercise.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs bg-blue-700 text-blue-200 px-2 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                        {exercise.tags.length > 3 && (
                            <span className="text-xs text-blue-300 px-2 py-1">
                                +{exercise.tags.length - 3} more
                            </span>
                        )}
                    </div>
                )}
            </div>
        </Link>
    );
}
