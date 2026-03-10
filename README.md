# whatMovie

A movie recommendation app that asks you 10 quick questions about your mood, preferences, and vibe — then uses AI to suggest 5 perfect movies for your night.

**Live app:** [movie-rec-iota.vercel.app](https://movie-rec-iota.vercel.app/)

## How It Works

1. Take a 10-question quiz (pace, mood, emotional intensity, era, setting, runtime, etc.)
2. An LLM analyzes your preferences and picks 5 tailored movie recommendations
3. Each recommendation is enriched with poster art, ratings, and overviews from TMDB

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19)
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion)
- **LLM:** OpenRouter API (via OpenAI SDK)
- **Movie Data:** TMDB API
- **Validation:** Zod

## Getting Started

### Prerequisites

You'll need API keys for:
- [OpenRouter](https://openrouter.ai/) — for LLM movie recommendations
- [TMDB](https://www.themoviedb.org/settings/api) — for movie posters, ratings, and metadata

### Setup

```bash
npm install
```

Create a `.env.local` file:

```
OPENROUTER_API_KEY=your_key_here
TMDB_API_KEY=your_key_here
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Commands

```bash
npm run build   # Production build
npm run lint    # Run ESLint
```
