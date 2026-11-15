---
repo: "doccupine/cli"
name: "cli"
description: "Generate beautiful, ready-to-use documentation with just one CLI command – fast, simple, and open source. AI-ready."
readmeQualityOk: true
url: "https://github.com/doccupine/cli"
homepage: "https://doccupine.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["build-tool", "cli", "documentation", "generator", "nextjs", "react"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2025-09-01T20:09:17Z"
lastCommitAt: "2026-11-15T11:18:03Z"
lastReleaseAt: "2026-08-22T12:53:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 77
maintainers: ["luangjokaj", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd94d12403be7b0261b6934744527065d61d1f7bd2e8b9475644a5f384c8ccae/doccupine/cli"
discussionCount: 1
---

# Doccupine

[Doccupine](https://doccupine.com) is an open-source CLI that turns a directory of MDX files into a full-featured Next.js documentation website. Write your docs in Markdown, and Doccupine watches for changes, generates pages, and starts a live dev server automatically.

## Features

- **Live preview** - watches your MDX files and regenerates pages on every save
- **Auto-generated navigation** - sidebar built from frontmatter (`category`, `order`)
- **Sections** - organize docs into tabbed sections via frontmatter or `sections.json`
- **API reference** - point at an OpenAPI spec to generate interactive endpoint pages with a live playground
- **Subscribable changelogs** - pages using the `Update` component publish an RSS feed at `{page-url}/rss.xml`
- **Theming** - dark/light mode with customizable theme via `theme.json`
- **AI chat assistant** - built-in RAG-powered chat (OpenAI, Anthropic, or Google)
- **MCP server** - exposes `search_docs`, `get_doc`, and `list_docs` tools for AI agents
- **Custom fonts** - Google Fonts or local fonts via `fonts.json`
- **Static assets** - `public/` directory is watched and synced to the generated app
- **Lean icons** - only the…
