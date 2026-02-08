# Kibogamine: STEM Exercise Library

Kibogamine is a comprehensive, open-source platform for mastering STEM subjects through a curated collection of exercises in **Mathematics**, **Physics**, and **Chemistry**. Built with Next.js 16 and optimized for the Netlify platform.

## 🚀 Features

- **Multi-Subject Support**: Explore exercises categorized by subject and difficulty.
- **LaTeX Rendering**: High-quality mathematical and chemical notation using KaTeX.
- **Detailed Solutions**: Step-by-step guides to help understand complex concepts.
- **Modern Stack**: Leverages Next.js 16 (App Router), Tailwind CSS, and Netlify Core Primitives (Edge Functions, Blob Store).
- **Searchable Library**: Quickly find exercises relevant to your current study goals.

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- Netlify CLI (for local development)

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd kibogamine
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Netlify CLI (if not already present):**
   ```bash
   npm install netlify-cli@latest -g
   ```

4. **Link to Netlify (recommended for full functionality):**
   ```bash
   netlify link
   ```

5. **Start the development server:**
   ```bash
   netlify dev
   ```

Visit [localhost:8888](http://localhost:8888) to see the library in action.

## 📁 Project Structure

- `data/exercises/`: Markdown files containing exercise content and metadata.
- `components/`: Reusable UI components including LaTeX and Markdown renderers.
- `lib/`: Core logic for fetching and parsing exercises.
- `app/`: Next.js App Router pages and layouts.

## 📖 Documentation

- [Architecture Overview](ARCHITECTURE.md): Technical design and data flow.
- [Contribution Guide](CONTRIBUTING.md): How to add new exercises or improve the platform.
- [AI Context](.agent/AI_CONTEXT.md): Helpful metadata for AI agents working on this project.

## 🌐 Deployment

Deploying your own instance of Kibogamine to Netlify is easy:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-platform-starter)

---

*Part of the Kibogamine project.*
