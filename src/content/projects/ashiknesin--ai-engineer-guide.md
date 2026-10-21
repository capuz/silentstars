---
repo: "AshikNesin/ai-engineer-guide"
name: "ai-engineer-guide"
description: "A clean, fast Hugo-powered blog covering AI engineering trends, tools, and insights at AIEngineerGuide.com"
readmeQualityOk: true
url: "https://github.com/AshikNesin/ai-engineer-guide"
homepage: "https://AIEngineerGuide.com"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [75, 23]
topics: ["ai-agents", "ai-engineering", "hugo", "learn-in-public"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-12-22T16:25:13Z"
lastCommitAt: "2026-10-21T17:31:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 73
maintainers: ["AshikNesin"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6bf15279c362632ec338e51c5bd06f5b3c37793aaeb4b32550718d37270dcd3/AshikNesin/ai-engineer-guide"
---

# AI Engineer Guide
A clean, fast Hugo‑powered blog that powers [AIEngineerGuide.com](https://aiengineerguide.com)

## 🚀 Getting Started

### Prerequisites
Before you begin, make sure you have these installed:
- [Hugo](https://gohugo.io/installation/) (v0.140.0 or newer)
- [Node.js](https://nodejs.org/) (used for syncing content)

### Run Locally

```bash
# Clone the repo
git clone https://github.com/AshikNesin/ai-engineer-guide
cd ai-engineer-guide

# Start the dev server
hugo server -t hugo-bearblog

# Or, using Makefile
make dev

# Visit http://localhost:1313 in your browser
```

## 🏗️ Site Overview
- **Live Site**: [AIEngineerGuide.com](https://aiengineerguide.com)
- **Framework**: Hugo (static site generator)
- **Theme**: `hugo-bearblog` 
- **Hosting**: Cloudflare Pages + Pages Functions
- **Content Source**: Obsidian vault
- **Analytics**: Umami integration (self hosted)
- **Timezone**: Asia/Kolkata

## 📝 Content Management

### How It Works

### Content Pipeline
- Source notes live in `~/Sync/Notes/ai-notes/AIEngineerGuide/content/blog/`
- Synced via: `scripts/sync-obsidian-notes.js`
- Output: `content/blog/` in Hugo format
- Images: Automatically copied to…
