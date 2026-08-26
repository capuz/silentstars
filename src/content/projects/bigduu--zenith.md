---
repo: "bigduu/Zenith"
name: "Zenith"
description: "Bodhi AI — a local-first desktop AI agent that does the work, not just chats. This monorepo ties together the Rust runtime (Bamboo), React UI (Lotus), Tauri shell, Go backend & docs, with a coordinated release train."
readmeQualityOk: true
url: "https://github.com/bigduu/Zenith"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["ai-agent", "desktop-agent", "go", "llm-agent", "local-first", "mcp", "monorepo", "react", "rust", "tauri"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-06T16:25:09Z"
lastCommitAt: "2026-08-26T04:17:19Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 54
maintainers: ["bigduu", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b826f63f2f106c8af40dc63a74f922470cf6fcf883b4b43f6be27be357a569e5/bigduu/Zenith"
---

# Zenith

### Bodhi AI — the local-first desktop agent that does the work, not just chats.

**It uses tools, keeps memory, and shows you every step — not just a final answer.**
Zenith is its home base: the desktop product, UI, Rust runtime, Go backend, and docs
in one recursive clone, released in lockstep.

**[▶ Start with Bodhi AI](https://github.com/bigduu/Bodhi-AI)** · [Lotus](https://github.com/bigduu/Lotus) · [Bamboo](https://github.com/bigduu/Bamboo-agent) · [Bodhi Server](https://github.com/bigduu/bodhi-server) · [Pavilion](https://github.com/bigduu/Pavilion) · [Architecture Overview](https://github.com/bigduu/Pavilion/blob/main/articles/zenith-architecture-overview.md)

</div>

 B["Bodhi AI<br/>desktop product surface (Tauri shell)"]
  Z --> L["Lotus<br/>React + Vite UI layer"]
  Z --> R["Bamboo<br/>local-first Rust agent runtime"]
  Z --> S["Bodhi Server<br/>Go backend"]
  Z --> P["Pavilion<br/>website & docs"]

  B -. embeds .-> L
  L -. HTTP / SSE .-> R
  R -. auth · quota · LLM proxy .-> S
  P -. explains .-> B
```

> **Note** —— The Bodhi shell hosts the UI and native integration; Lotus is the actual UI; Lotus talks to the Bamboo runtime over **HTTP / SSE** (not Tauri…
