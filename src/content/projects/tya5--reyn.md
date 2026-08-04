---
repo: "tya5/reyn"
name: "reyn"
description: "AI agent workflow OS . Constrained, validated, replayable execution. Predictability over autonomy."
readmeQualityOk: true
url: "https://github.com/tya5/reyn"
homepage: "https://tya5.github.io/reyn/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent", "agent-framework", "agent-runtime", "dsl", "llm", "markdown", "multi-agent", "orchestration", "python", "workflow"]
stars: 7
forks: 0
openIssues: 39
closedIssues: 795
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-06T15:05:07Z"
lastCommitAt: "2026-08-04T06:11:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 56
maintainers: ["tya5"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bcbf9003213972c12ff2be3db595e44ec5086b217f64ba8e1db6aead91f557f/tya5/reyn"
discussionCount: 1
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="website/assets/reyn-wordmark-white.png">
</picture>

**Self-hosted general agent — every decision constrained, auditable, replayable.**

Reyn is a self-hosted agent runtime whose **entire decision loop is an OS-enforced contract** — so every run is predictable, auditable, and replayable. It speaks the standard agent protocols (MCP, A2A), but bets on the loop itself being yours to verify rather than on integration breadth.

</div>

```bash
git clone https://github.com/tya5/reyn.git
cd reyn && pip install -e ".[dev]"
reyn init
reyn chat          # talk to the agent — persistent memory, RAG recall, MCP + A2A built in
```

---

## What it guarantees

Most agent frameworks optimize for reach. Reyn optimizes for the **integrity of the loop itself** — what the runtime promises about every decision the model makes.

| Guarantee | What it means |
|---|---|
| **Bounded decisions** | The model only picks from options the OS hands it (next step + a typed result). It can't invent a step, jump somewhere unlisted, or skip validation — a bad or hallucinated output is rejected before any side effect happens. |
| **Everything on disk,…
