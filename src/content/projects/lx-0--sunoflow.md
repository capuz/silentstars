---
repo: "lx-0/SunoFlow"
name: "SunoFlow"
description: "A mobile-first web app for managing and generating music with the Suno API"
readmeQualityOk: true
url: "https://github.com/lx-0/SunoFlow"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 8
forks: 0
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-03-21T21:54:34Z"
lastCommitAt: "2026-08-30T09:25:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 52
maintainers: ["lx-0"]
openGraphImageUrl: "https://opengraph.githubassets.com/08aea82ca849f1f24469fa63cec849d2f7c1bfded2b343d048466ddb952a72ba/lx-0/SunoFlow"
---

# SunoFlow

A mobile-first web app for managing and generating music with the [Suno API](https://sunoapi.org). Features AI music generation, playlist management, lyrics editing, audio waveform playback, and a public sharing system.

## Features

- Mobile-responsive layout with bottom navigation and swipe gestures
- User registration and login (email/password + Google OAuth)
- Email verification, password reset, and notification system
- AI music generation via Suno API with a generation queue and progress tracking
- Song library with favorites, playlists, history, and discovery
- Audio waveform player, mashup studio, and audio upload
- Lyrics and prompt templates with LLM-powered generation
- Public song/playlist sharing via shareable slugs (`/s/[slug]`, `/p/[slug]`)
- Persona manager and style boost
- Admin dashboard: users, analytics, logs, error reports
- Swagger API docs at `/api/docs`
- Sentry error tracking, Pino structured logging, rate limiting

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Auth | NextAuth.js v5 + Prisma adapter |
| ORM | Prisma v5 |
| Database | PostgreSQL 16…
