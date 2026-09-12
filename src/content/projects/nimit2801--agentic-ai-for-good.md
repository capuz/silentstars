---
repo: "nimit2801/Agentic-AI-For-Good"
name: "Agentic-AI-For-Good"
description: "Agentic AI For Good"
readmeQualityOk: true
url: "https://github.com/nimit2801/Agentic-AI-For-Good"
homepage: "https://agenticaiforgood.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [69]
topics: ["agentic-ai", "agents", "devrel", "for-good", "agentic-ai-for-good"]
stars: 23
forks: 2
openIssues: 6
closedIssues: 27
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-17T15:27:07Z"
lastCommitAt: "2026-09-12T08:05:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 50
maintainers: ["nimit2801"]
openGraphImageUrl: "https://opengraph.githubassets.com/6407cccfe202e46aec2dd28bc95654c0ef03f7e898584de45806eb079e7f6f21/nimit2801/Agentic-AI-For-Good"
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
