---
repo: "mmnto-ai/totem"
name: "totem"
description: "Rules you can enforce, state you can derive, context you can query: plain files in your repo, under whichever coding agent you use."
readmeQualityOk: true
url: "https://github.com/mmnto-ai/totem"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["ai-agents", "ast-grep", "cli", "code-review", "developer-tools", "git-hooks", "linting", "mcp-server", "rule-engine", "static-analysis"]
stars: 17
forks: 4
openIssues: 516
closedIssues: 986
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-27T21:46:24Z"
lastCommitAt: "2026-09-24T08:42:38Z"
lastReleaseAt: "2026-03-05T01:48:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 93
undervaluedScore: 47
maintainers: ["satur8d", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/60ede944a3af356e14cc7e77fd65c1c94c767d70b16747f288a479571136a5fa/mmnto-ai/totem"
discussionCount: 2
---

# Totem

**Editor integrations:** [Claude Code](https://github.com/mmnto-ai/totem/blob/HEAD/.claude/) · [Gemini CLI](https://github.com/mmnto-ai/totem/blob/HEAD/.gemini/) · [GitHub Copilot](https://github.com/mmnto-ai/totem/blob/HEAD/.github/copilot-instructions.md) · [JetBrains Junie](https://github.com/mmnto-ai/totem/blob/HEAD/.junie/) · others in progress. See [`AGENTS.md`](https://github.com/mmnto-ai/totem/blob/HEAD/AGENTS.md) for how integration works.

_AI coding agents are brilliant goldfish. Totem keeps your project's lessons, rules, and context in the repository itself, underneath whichever agent you run, so what the team learned survives the session that learned it._

> `totem lint` is deterministic and offline. Zero LLM calls, no network, and the cost scales with the size of your diff, not the size of your history. Timing numbers live in [CI-recomputed receipts](https://github.com/mmnto-ai/totem/blob/HEAD/docs/wiki/maturity.md), not in this README.

When using LLMs on projects, I found that agents kept making the same architectural mistakes. They forgot context and reinvented helpers that already existed. The velocity was great, but the architectural integrity degraded…
