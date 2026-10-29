---
repo: "abhay-yemekar/hirelens"
name: "hirelens"
description: "Open-source, glass-box hiring intelligence. Rank candidates against a job with evidence-linked scores, rubric transparency, and built-in bias auditing."
readmeQualityOk: true
url: "https://github.com/abhay-yemekar/hirelens"
homepage: "https://hirelens-rosy.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["ai", "ats", "hiring", "hr-tech", "llm", "nextjs", "open-source", "rag", "recruiting", "responsible-ai"]
stars: 7
forks: 1
openIssues: 3
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2025-11-26T11:56:59Z"
lastCommitAt: "2026-10-29T12:24:52Z"
lastReleaseAt: "2026-10-06T09:10:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 81
maintainers: ["abhay-yemekar", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1104577260/39e73835-1ece-41ec-9d8f-48e2e7bce211"
discussionCount: 0
---

# HireLens

**See why, not just who.**

The open-source, glass-box hiring intelligence platform. Rank candidates against a rubric you control — with evidence-linked scores, tamper-evident audit trails, blind review, and built-in adverse-impact reporting.

**[▶ Try the live demo — no signup](https://hirelens-rosy.vercel.app/demo)** · [📖 Documentation](#documentation) · [⚡ Self-host in one command](#quickstart)

> **Status: v1.4.0 shipped (6 October 2026).** Production runs at **[hirelens-rosy.vercel.app](https://hirelens-rosy.vercel.app)** — the v1.4 line (talent-pool rediscovery, public parser API, ATS format check) is released; see the [changelog](https://github.com/abhay-yemekar/hirelens/blob/HEAD/CHANGELOG.md) and the [roadmap](#roadmap). Every feature in this README exists on `main` today, verified by tests.

---

## What works today

A pnpm + Turborepo monorepo shipping the full product:

1. **Extract** — PDF (unpdf), DOCX (mammoth), TXT/MD; magic-byte sniffing; scanned-PDF detection that refuses sparse PDFs instead of returning garbage.
2. **Parse** — deterministic heuristic parser → typed, Zod-validated `Candidate` record (JSON-Resume-compatible).
3. **Rubric** — paste a…
