---
repo: "guillermoscript/lms-front"
name: "lms-front"
description: "Open-source multi-tenant LMS for creators and schools: sell courses on your own subdomain. Next.js 16 + React 19 + Supabase (RLS) + Stripe Connect, an AI tutor over MCP, gamification, certificates, i18n (en/es). Self-hostable."
readmeQualityOk: true
url: "https://github.com/guillermoscript/lms-front"
homepage: "https://preciopana.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["ai", "lms", "nextjs", "openai", "course-platform", "edtech", "elearning", "learning-management-system", "mcp", "model-context-protocol"]
stars: 44
forks: 33
openIssues: 18
closedIssues: 439
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2023-07-12T15:19:48Z"
lastCommitAt: "2026-10-31T15:58:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 66
maintainers: ["guillermoscript"]
openGraphImageUrl: "https://opengraph.githubassets.com/737aee638841e2ab0c7f491e21ccc88a8e66dfb4786723d255e512f8398dcdf3/guillermoscript/lms-front"
discussionCount: 1
---

# LMS Platform

**Open-source, multi-tenant LMS for creators and schools.** Every school gets its own subdomain (`school.platform.com`), its own branding, and its own students. Educators build courses and sell them; students enroll, learn, take exams, and earn verifiable certificates.

**Live instance:** [preciopana.com](https://preciopana.com) · **Setup:** [`docs/GETTING_STARTED.md`](https://github.com/guillermoscript/lms-front/blob/HEAD/docs/GETTING_STARTED.md) · **Contribute:** [`CONTRIBUTING.md`](https://github.com/guillermoscript/lms-front/blob/HEAD/CONTRIBUTING.md)

**Stack:** Next.js 16 · React 19 · TypeScript · Supabase (Postgres + Auth + RLS) · Shadcn UI (base-mira) · Tailwind CSS v4 · Stripe Connect · next-intl (en/es)

## What's in it

| | |
|--|--|
| **Multi-tenancy** | Subdomain-per-school, tenant theming, per-tenant roles — one deployment, many schools. Isolation is enforced in Postgres with Row Level Security, not in application code. |
| **Courses** | Block-editor lessons with rich MDX components, exercises, checkpoints, exams with AI-assisted grading, progress tracking, FSRS spaced repetition. |
| **Payments** | Stripe Connect (platform fee + revenue split),…
