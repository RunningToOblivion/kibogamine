# AI Context: Kibogamine

This document provides specialized context for AI agents working on the Kibogamine project.

## 🤖 System Identity

Kibogamine is a **STEM Exercise Library** built with Next.js 16. It is a content-heavy application that prioritizes pedagogical clarity and mathematical accuracy.

## 🧠 Codebase Idioms

### Exercise Fetching
- **Primary Utility**: `lib/exercises.js`. Use this for all exercise-related data access.
- **Dynamic Routing**: Subject and ID are extracted from routes and passed to `getExerciseById(subject, id)`.

### Rendering
- **LaTeX**: Use `$inline$` or `$$block$$`. The `components/client-latex-renderer.jsx` handles conversion.
- **Markdown**: Handled by `components/markdown.jsx`.

### UI/UX
- **Tailwind CSS**: Follow the existing blue/STEM-themed color palette.
- **Components**: Reusable UI elements are in `components/`. Check `card.jsx` and `alert.jsx` before building new ones.

## 📊 Data Schema: Exercises

### Directory Structure
`data/exercises/{subject}/{filename}.md`

### YAML Frontmatter
```yaml
title: string      # Required. Title of the exercise.
subject: string    # Required. "math" | "physics" | "chemistry"
difficulty: string # "easy" | "medium" | "hard"
topics: string[]   # Array of tags
```

### Content Separation
Content MUST be separated by `## Problem` and `## Solution` headers. The parser relies on these exact headers (case-insensitive) to split data.

## 🛠️ Common Tasks for Agents

1.  **Adding an Exercise**: Create `.md` file in the correct subject folder. Ensure LaTeX syntax is correct.
2.  **Updating Search**: Modify `components/search-exercises.jsx` if indexing logic changes.
3.  **UI Refinement**: All styles should be in Tailwind. Check `styles/` for any global overrides.

## ⚠️ Known Gotchas

- **LaTeX Escaping**: In JS strings, backslashes and special characters need careful handling. Prefer keeping LaTeX in `.md` files to avoid escaping issues.
- **Next.js 16 Compatibility**: Ensure all new components follow the App Router patterns (Server/Client component split).

---

*Part of the Kibogamine project.*
