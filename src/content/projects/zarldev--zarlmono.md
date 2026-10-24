---
repo: "zarldev/zarlmono"
name: "zarlmono"
description: "mono repo"
readmeQualityOk: true
url: "https://github.com/zarldev/zarlmono"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-13T14:03:06Z"
lastCommitAt: "2026-10-24T00:15:16Z"
lastReleaseAt: "2026-07-20T13:05:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 43
maintainers: ["zarldev", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/adb870208a2450fb6a30b1f81d25692318d19290266b5d3822d53f1675ff8746/zarldev/zarlmono"
---

# zarlmono

**The Go-native agent monorepo — zarlcode / zkit**

---

## What's here

| Asset | Module | What it does |
|---|---|---|
| **zarlcode** | [`zarlcode/`](https://github.com/zarldev/zarlmono/blob/HEAD/zarlcode/) | Terminal coding-agent TUI/CLI — plan, build, switch models, resume sessions, inspect diffs, verify. |
| **zkit** | [`zkit/`](https://github.com/zarldev/zarlmono/blob/HEAD/zkit/) | The Go agent substrate: streaming runner, tool registry, LLM providers, guardrails, compaction, MCP, sandboxing, vault. |
| **swebench-eval** | [`swebench-eval/`](https://github.com/zarldev/zarlmono/blob/HEAD/swebench-eval/) | SWE-bench evaluation driver on the same coding-agent assembly. |
| **examples** | [`examples/`](https://github.com/zarldev/zarlmono/blob/HEAD/examples/) | Deterministic and provider-backed harnesses that isolate individual patterns; many offer no-LLM scripted modes. |

---

## Try zarlcode

```bash
# Homebrew
brew install zarldev/tap/zarlcode

# or build from source
cd zarlmono && go tool task zarlcode

# first run
zarlcode init
zarlcode keys set anthropic "$ANTHROPIC_API_KEY"
zarlcode
```

```bash
zarlcode                               # interactive TUI
zarlcode…
