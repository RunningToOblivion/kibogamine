# Contributing to Kibogamine

We welcome contributions to Kibogamine! Whether you're adding new exercises, fixing bugs, or improving the UI, your help is appreciated.

## 📝 Adding New Exercises

New exercises are the lifeblood of Kibogamine. Follow these steps to contribute a new problem:

1.  **Choose a Subject Folder**: Go to `data/exercises/[math|physics|chemistry]/`.
2.  **Create a New File**: Name it using a URL-friendly ID (e.g., `quadratic-formula.md`).
3.  **Add Metadata**: Use YAML frontmatter at the top of the file.
    ```yaml
    ---
    title: "Solving Quadratic Equations"
    subject: "math"
    difficulty: "medium"
    topics: ["algebra", "equations"]
    ---
    ```
4.  **Write the Content**: Use `## Problem` and `## Solution` headers.
    -   Use standard Markdown for text.
    -   Use `$...$` for inline LaTeX (e.g., $E=mc^2$).
    -   Use `$$...$$` for block LaTeX.

## 💻 Code Contributions

### Development Workflow

1.  **Fork and Clone**: Create a fork of the repository and clone it to your local machine.
2.  **Install Dependencies**: Run `npm install`.
3.  **Create a Branch**: `git checkout -b feature/your-feature-name`.
4.  **Local Testing**: Run `netlify dev` to verify your changes.
5.  **Submit a PR**: Push your branch and create a Pull Request.

### Style Guide

-   **Components**: Use functional React components with Tailwind CSS.
-   **Structure**: Keep components modular and placed in the `components/` directory.
-   **Types**: While currently JS-based, prioritize clear prop names and documentation.

## 🤖 For AI Agents

If you are an AI agent working on this project:
-   Refer to [.agent/AI_CONTEXT.md](.agent/AI_CONTEXT.md) for codebase-specific idioms and schema details.
-   Always verify LaTeX syntax for mathematical correctness.
-   Ensure metadata matches the existing schema to avoid breaking the exercise index.

---

*Part of the Kibogamine project.*
