# Architecture: Kibogamine

This document outlines the technical design, data flow, and key components of the Kibogamine STEM Exercise Library.

## 🏗️ System Overview

Kibogamine is built with **Next.js 16** using the **App Router** paradigm. It leverages a file-based data system for easy content management and is optimized for the **Netlify** platform.

### Key Technologies
- **Next.js 16**: Core framework, utilizing Server Components for performance.
- **Tailwind CSS**: Utility-first CSS for responsive and modern UI.
- **KaTeX**: Fast LaTeX rendering for mathematical and chemical formulas.
- **gray-matter**: Parsing YAML frontmatter in exercise markdown files.
- **Netlify Core Primitives**: Edge Functions for dynamic logic and Blob Store for persistent data.

## 📁 Data Model: Exercises

Exercises are stored as Markdown files in `data/exercises/[subject]/[id].md`.

### Metadata (YAML Frontmatter)
Each exercise file contains metadata used for indexing and display:
- `title`: Short descriptive title.
- `subject`: `math`, `physics`, or `chemistry`.
- `difficulty`: `easy`, `medium`, or `hard`.
- `topics`: Array of related tags (e.g., `calculus`, `kinematics`).

### Content Structure
The content is split into two primary sections using Markdown headers:
- `## Problem`: The exercise statement.
- `## Solution`: The detailed step-by-step solution.

## 🔄 Data Flow

1.  **Request**: User navigates to a subject or specific exercise.
2.  **Server Action/Fetch**: `lib/exercises.js` uses `fs` and `path` to locate and read the corresponding `.md` files.
3.  **Parsing**: `gray-matter` extracts metadata, and custom parsing logic splits the content into problem and solution.
4.  **Rendering**:
    -   `components/markdown.jsx` converts Markdown to JSX.
    -   `components/client-latex-renderer.jsx` (and KaTeX) processes LaTeX strings encountered in the content.
5.  **Response**: The fully rendered page is served to the client.

## ⚙️ Netlify Integration

- **Edge Functions**: Used for middleware (e.g., `middleware.js`) and dynamic routing optimizations.
- **Blob Store**: Used for storing persistent user data (like exercise attempts or feedback).
- **Image CDN**: Handles image optimization for any assets used within exercises.

---

*Part of the Kibogamine project.*
