---
repo: "nimit2801/Agentic-AI-For-Good"
name: "Agentic-AI-For-Good"
description: "Agentic AI For Good"
readmeQualityOk: true
url: "https://github.com/nimit2801/Agentic-AI-For-Good"
homepage: "https://agenticaiforgood.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [66]
topics: ["agentic-ai", "agents", "devrel", "for-good", "agentic-ai-for-good"]
stars: 21
forks: 2
openIssues: 6
closedIssues: 27
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-17T15:27:07Z"
lastCommitAt: "2026-07-14T05:56:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 46
maintainers: ["nimit2801"]
openGraphImageUrl: "https://opengraph.githubassets.com/427ac68b565e0095197532cdfd96eeaa493ec9fd52c1beefeeee962a5cd292a4/nimit2801/Agentic-AI-For-Good"
---

# Agentic AI For Good

🌐 **Live site:** [agenticaiforgood.com](https://agenticaiforgood.com)

## What Is This?

Two things in one repo:

1. **Web catalog** — Browse and search 100+ curated AI agent tools by use case, category, and stack
2. **MCP server** — Search the catalog directly from Claude Desktop or Claude Code

The catalog lives in `tools/*.yaml` — anyone can add a tool via pull request.

## Architecture

```
tools/*.yaml (open catalog)
      ↓
GitHub Actions CI (validate + embed)
      ↓
Supabase (PostgreSQL + pgvector)
      ↓
Next.js 16 on Vercel
      ↓
Claude via MCP (HTTP or npx)
```

## Project Structure

```
Agentic-AI-For-Good-Website/
├── tools/                      # Open catalog — YAML files for each tool
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/mcp/           # Hosted MCP server endpoint
│   │   └── api/tools/         # Tool search & fetch APIs
│   ├── components/            # React components (shadcn/ui)
│   ├── lib/                   # Supabase client, utils
│   └── views/                 # Page-level view components
├── scripts/                   # Supabase sync, validation, embedding
├── agentic-ai-for-good-mcp/…
