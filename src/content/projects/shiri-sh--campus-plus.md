---
repo: "Shiri-sh/campus-plus"
name: "campus-plus"
description: "The portal for JCT students"
readmeQualityOk: true
url: "https://github.com/Shiri-sh/campus-plus"
language: "Python"
languages: ["Python"]
languagePcts: [78]
stars: 9
forks: 0
openIssues: 6
closedIssues: 27
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-09-17T13:50:39Z"
lastCommitAt: "2026-10-29T10:20:28Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 48
maintainers: ["Shiri-sh", "Tamar-Dinavetsky", "neotal"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2f8f1a75921eb6f8230994de609955972abc7fedbe6b8db93d92c4bacf5e832/Shiri-sh/campus-plus"
---

# Campus+

An intelligent academic materials platform for JCT students — upload, discover, and share study resources with AI-powered search and automated content moderation.

## What it does

- **Smart catalog** — browse, search, and preview thousands of academic materials organized by course, year, and type. Imported files with no detectable year keep `academic_year = 0` and show as לא ידוע in the student explorer and admin year menu.
- **Hybrid search** — `catalog.approved_materials` and `/student/suggest` run SQL keyword matching and Chroma semantic hits together, then merge by material id. Course, year, and type filters apply to both sides. If Chroma or Gemini is unavailable, keyword results still return.
- **AI content agent** — a background worker evaluates every new upload: extracts text, verifies relevance via Tavily, generates a summary, and recommends approve/reject to admins
- **Upload with live classification** — students upload files and get instant course/type predictions before submitting
- **Admin dashboard** — KPI cards, pending approval queue, content reports, and user management in one view
- **MCP tool integration** — Tavily web search (`python -m…
