import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const exercisesDir = path.join(process.cwd(), 'data', 'exercises');

function parseExerciseContent(content) {
    // Split by section headers and extract content
    const problemMatch = content.match(/##\s*Problem\s*([\s\S]*?)(?=##\s*Solution|$)/i);
    const solutionMatch = content.match(/##\s*Solution\s*([\s\S]*?)$/i);

    return {
        problem: problemMatch ? problemMatch[1].trim() : content.trim(),
        solution: solutionMatch ? solutionMatch[1].trim() : ''
    };
}

export function getAllExercises() {
    const exercises = {};
    const subjects = fs.readdirSync(exercisesDir);

    subjects.forEach((subject) => {
        const subjectDir = path.join(exercisesDir, subject);
        const files = fs.readdirSync(subjectDir).filter((file) => file.endsWith('.md'));

        exercises[subject] = files.map((file) => {
            const filePath = path.join(subjectDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data, content } = matter(fileContent);
            const { problem, solution } = parseExerciseContent(content);

            return {
                ...data,
                problem,
                solution
            };
        });
    });

    return exercises;
}

export function getExercisesBySubject(subject) {
    const subjectDir = path.join(exercisesDir, subject);
    
    if (!fs.existsSync(subjectDir)) {
        return [];
    }

    const files = fs.readdirSync(subjectDir).filter((file) => file.endsWith('.md'));

    return files.map((file) => {
        const filePath = path.join(subjectDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);
        const { problem, solution } = parseExerciseContent(content);

        return {
            ...data,
            problem,
            solution
        };
    });
}

export function getExerciseById(subject, id) {
    const filePath = path.join(exercisesDir, subject, `${id}.md`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const { problem, solution } = parseExerciseContent(content);

    return {
        ...data,
        problem,
        solution
    };
}
