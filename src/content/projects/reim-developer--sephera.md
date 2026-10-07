---
repo: "Reim-developer/Sephera"
name: "Sephera"
description: "Answer \"what breaks if I change this?\" Reverse dependency analysis, cycle detection, and token-budgeted context packs. Rust CLI with built-in MCP server."
readmeQualityOk: true
url: "https://github.com/Reim-developer/Sephera"
homepage: "https://sephera.vercel.app"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["cli", "context-engineering", "developer-tools", "llm", "rust", "mcp", "tree-sitter", "ai-tools", "cli-tools", "code-analysis"]
stars: 77
forks: 9
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2025-04-11T14:44:41Z"
lastCommitAt: "2026-10-07T10:31:07Z"
lastReleaseAt: "2026-10-06T05:09:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["Reim-developer"]
openGraphImageUrl: "https://opengraph.githubassets.com/a66f920f0b00557061445748e67374a318f3b5c1d235d661c159a86ca84295fe/Reim-developer/Sephera"
---

# Sephera

**Know what breaks before you touch it.**

You are about to edit a shared module. Which files depend on it?

`grep` finds text matches, not call paths. Your IDE guesses. An LLM hallucinates a confident wrong answer.

Sephera builds a real dependency graph from your actual `import` / `use` / `#include` statements, then answers that question exactly.

```bash
cargo install sephera
```

---

## The graph is checked against real repositories

A dependency tool that reports confident nonsense is worse than no tool. So the
numbers are measured on three real projects at pinned commits, asserted in CI,
and reproducible:

```bash
python scripts/fetch_corpus.py      # clone the three repositories
python scripts/measure_accuracy.py --verify
```

```
repository  files  internal  self-refs  unresolved  cycles  cfg-gated
----------  -----  --------  ---------  ----------  ------  ---------
      axum    307       640         66           8      19         86
     flask     80       185          5           0      43          0
   express    141       159          0           0       0          0
```

`unresolved` counts imports meant for this project that could not be placed to a…
