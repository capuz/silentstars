---
repo: "cdeust/Cortex"
name: "Cortex"
description: "Persistent memory for Claude Code — 36 neuroscience mechanisms, 97 papers. Reproducible via `make reproduce`: LongMemEval-S R@10 98.2% / MRR 0.915 (n=500), LoCoMo R@10 91.5% / MRR 0.805 (n=1982), BEAM-100K retrieval-proxy MRR 0.55. Clean-DB, single-process, production recall path. PostgreSQL + pgvector."
readmeQualityOk: true
url: "https://github.com/cdeust/Cortex"
homepage: "https://ai-architect.tools"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["mcp-server", "model-context-protocol", "agent-memory-system", "causal-inference", "claude-code", "claude-code-plugin", "cognitive-architecture", "cognitive-science", "neuroscience", "persistent-memory"]
stars: 65
forks: 11
openIssues: 0
closedIssues: 17
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2026-03-18T11:24:37Z"
lastCommitAt: "2026-07-07T06:38:33Z"
lastReleaseAt: "2026-04-01T23:02:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 39
maintainers: ["cdeust", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d65a673df4e52e30a812da30bf76304479b07f6fefd4467eab62cbecf36f1319/cdeust/Cortex"
---

</p>

</p>

  <strong>Persistent memory &amp; cognitive profiling for Claude Code</strong> — local-first, single-click MCP install.
</p>

</p>

  <strong>Companion projects:</strong><br>
</p>

  <sub><em><strong>Independent project:</strong> Cortex is an independent, open-source project. It is <strong>not an Anthropic product</strong> and is not affiliated with, sponsored by, or endorsed by Anthropic.</em></sub>
</p>

---

Claude forgets you every time you close the tab. Every architecture decision you explained. Every debugging session where you traced a bug through four layers of abstraction. Every "remember, we decided to use event sourcing, not CRUD" correction. Gone. Next session, you're a stranger to your own tools.

Cortex is a persistent memory engine for Claude built on computational neuroscience. It remembers what you worked on, how you think, what you decided and why — not as a text dump shoved into context, but as a living memory system that consolidates, forgets intelligently, and reconstructs the right context at the right time.

It runs **entirely on your machine** — a local SQLite database by default (zero setup, no services to install), or PostgreSQL + pgvector…
