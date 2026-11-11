---
repo: "noizu-labs-ml/NoizuPromptLingo"
name: "NoizuPromptLingo"
description: "A Standardized Prompt Syntax/Language to train models and humans against for faster behavior tuning of models. "
readmeQualityOk: true
url: "https://github.com/noizu-labs-ml/NoizuPromptLingo"
language: "Elixir"
languages: ["Elixir", "TypeScript"]
languagePcts: [51, 20]
stars: 13
forks: 3
openIssues: 4
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2023-05-08T02:44:07Z"
lastCommitAt: "2026-11-11T19:48:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 56
maintainers: ["noizu", "noizu-agentic-coder[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0721054f56c17e2b08fe46326f8373dacafa0370715c582578c0d0cc46c201a4/noizu-labs-ml/NoizuPromptLingo"
---

# NoizuPromptLingo (NPL)

**Repo:** https://github.com/noizu-labs-ml/NoizuPromptLingo

The NPL structured prompt-engineering syntax — placeholders, intuition pumps, directives, prefixes, and tagged prompt sections — plus a public MCP that serves that corpus. This repo publishes the *language* agents load; the agent work platform (sessions, tickets, chat, wiki, memory, tobor MCP fleet) lives separately in [agent-kit-mcp](https://github.com/the-robot-lives/agent-kit-mcp).

## What

- **Convention YAML** in `conventions/` — single source of truth for the NPL syntax sections (syntax, declarations, pumps, directives, prefixes, prompt-sections, special-sections).
- **MCP** at `/mcp` — two tools only: `NPLLoad` (expression DSL) and `NPLSpec` (versioned spec generation). **No authentication required.**
- **OAuth** is optional. Clients that insist on OAuth (Claude Code, Cursor, …) complete PKCE and receive a **site-approval** token (`sub=site:npl`). The token does not identify a user; it only means "approved for this site."
- **REST** at `/api/v1/npl/*` (public) for browsing sections and generating the same spec the admin panel produces.
- **Admin / conventions browser** (signed-in) to…
