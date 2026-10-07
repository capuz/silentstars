---
repo: "denn-gubsky/loomcycle"
name: "loomcycle"
description: "The runtime substrate for agentic systems — one Go binary, six LLM providers, MCP-native, configurable as a managed sandbox or full agentic dev environment. Where agents live, talk, and learn."
readmeQualityOk: true
url: "https://github.com/denn-gubsky/loomcycle"
homepage: "https://loomcycle.dev"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["ai-agents", "golang", "llm", "mcp", "ollama", "agentic-ai", "antrophic", "llm-agent", "mcp-server", "multi-agent"]
stars: 14
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-02T11:17:07Z"
lastCommitAt: "2026-10-07T10:31:01Z"
lastReleaseAt: "2026-05-09T12:26:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 93
undervaluedScore: 47
maintainers: ["denn-gubsky"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1227212265/4e223050-0145-4b7f-904a-3c7e6429218f"
fundingLinks: ["GITHUB:https://github.com/denn-gubsky"]
---

🌐 <a href="https://loomcycle.dev"><strong>loomcycle.dev</strong></a> &nbsp;·&nbsp;
  📝 <a href="https://loomcycle.dev/blog/">Engineering blog</a> &nbsp;·&nbsp;
  📐 <a href="https://github.com/denn-gubsky/loomcycle/blob/main/docs/ARCHITECTURE.md">Architecture</a>

---

> 🌳 **Stable and in production.** loomcycle is past v1.0 — feature-complete, hardened, and distribution-ready (Homebrew, multi-arch Docker, a Claude Code plugin, TS + Python adapters, a TrueNAS app). Validated by an 8-hour soak: 1.27M circuits, 3.8M agent runs, zero leaks. Development since v1.0 has been new primitives plus hardening — see [`REVISIONS.md`](https://github.com/denn-gubsky/loomcycle/blob/HEAD/REVISIONS.md) for recent releases and [the releases page](https://github.com/denn-gubsky/loomcycle/releases) for the full history. Apache-2.0. We welcome bug reports, security disclosures, feature contributions, downstream consumers, and forks. See [`CONTRIBUTING.md`](https://github.com/denn-gubsky/loomcycle/blob/HEAD/CONTRIBUTING.md).

---

## What it is

**The agentic runtime, in a sidecar.** loomcycle is one Go binary, ~50 MB. It runs *alongside* your application, not inside it. Your app calls loomcycle over…
