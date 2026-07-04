---
repo: "g-cqd/apple-docs"
name: "apple-docs"
description: "Local Apple developer documentation corpus — CLI, MCP server, and static site generator. 10 sources, tiered search, offline-first."
readmeQualityOk: true
url: "https://github.com/g-cqd/apple-docs"
homepage: "https://apple-docs.everest.mt"
language: "JavaScript"
languages: ["JavaScript", "Swift"]
languagePcts: [56, 41]
topics: ["apple", "bun", "cli", "documentation", "mcp", "swift"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-04-12T22:52:57Z"
lastCommitAt: "2026-07-04T22:48:39Z"
lastReleaseAt: "2026-05-13T00:28:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 58
maintainers: ["g-cqd"]
openGraphImageUrl: "https://opengraph.githubassets.com/785e0a1d77e88641616cd09726a43444783580c2f6c8e71acf89b7ce04bf0d6c/g-cqd/apple-docs"
---

# apple-docs

**All of Apple's developer documentation, on your machine.** Search it from
the terminal, browse it in your browser, and plug it into Claude, Codex,
Cursor, or any other MCP client — fully offline once installed.

One indexed corpus (~353,000 documents), three ways in:

- **CLI** — `apple-docs search "NavigationStack"` answers in milliseconds.
- **MCP server** — your AI assistant cites real Apple docs instead of guessing.
- **Local website** — browse and full-text search in the browser, or publish
  it as a static site.

It covers Apple's API reference (DocC), Human Interface Guidelines, App Store
Review Guidelines, Swift Evolution, the Swift book, Swift.org, WWDC sessions
(1997–2026, transcripts included), Apple sample code, archived documentation,
a Swift package catalog, every SF Symbol, and Apple's fonts.

## Quick start

You need [Bun](https://bun.sh) 1.1+.

```bash
git clone https://github.com/g-cqd/apple-docs.git
cd apple-docs
bun run dev:setup    # install dependencies + link the CLI
apple-docs setup     # download + install the latest snapshot
```

`setup` downloads one verified archive (**1.89 GB**) and installs it in a few
minutes. After that, everything…
