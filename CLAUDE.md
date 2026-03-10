# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Next.js dev server (port 3000)
- `npm run build` — Production build
- `npm run lint` — Run ESLint (flat config, `eslint.config.mjs`)

No test framework is configured.

## Environment Variables

- `OPENROUTER_API_KEY` — Used by `lib/openrouter.ts` to call the LLM via OpenRouter
- `TMDB_API_KEY` — Used by `lib/tmdb.ts` to fetch movie posters/metadata

## Architecture

Next.js 16 App Router project (React 19, TypeScript, Tailwind CSS v4). A movie recommendation quiz app: users answer 10 questions, then an LLM recommends 5 movies enriched with TMDB data.

### Flow

1. **Landing** (`app/page.tsx`) → links to quiz
2. **Quiz** (`app/quiz/page.tsx`) — Steps through 10 questions, stores answers in React state, saves to `sessionStorage` on completion, navigates to `/results`
3. **Results** (`app/results/page.tsx`) — Reads answers from `sessionStorage`, POSTs to `/api/recommend`, displays movie cards

### API Route

`app/api/recommend/route.ts` — POST endpoint that:
- Validates body with Zod (`lib/schemas.ts`)
- Calls `getRecommendations()` from `lib/openrouter.ts` (uses OpenAI SDK pointed at OpenRouter)
- Enriches results with TMDB poster/rating data via `lib/tmdb.ts`

### Key Patterns

- **Question system**: Questions defined in `data/questions.ts` as `QuestionConfig[]`. Each has a `type` field that maps to a component via `QuestionRenderer` (`components/quiz/QuestionRenderer.tsx`). Question types: `emoji_scale`, `image_card_grid`, `three_option`, `year_slider`, `toggle`, `free_text`.
- **Zod schemas** in `lib/schemas.ts` validate both the quiz payload and the LLM JSON response.
- **Types** live in `types/quiz.ts` and `types/recommendation.ts`.
- **Animations** use the `motion` package (Framer Motion).
- **Styling** uses Tailwind CSS v4 with custom CSS variables defined in `app/globals.css`.
