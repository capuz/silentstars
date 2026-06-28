---
repo: "nano-step/eval-harness"
name: "eval-harness"
description: "Behavior-regression testing for LLM agents. 4-class attribution, 6-field FAIL schema, $-cost gating, flaky detection. Bash + jq. Works with opencode today, runner-pluggable."
url: "https://github.com/nano-step/eval-harness"
homepage: "https://github.com/nano-step/eval-harness"
language: "Shell"
languages: ["Shell"]
languagePcts: [97]
topics: ["agent-testing", "ai-agents", "anthropic", "bash", "ci-cd", "claude", "developer-tools", "eval", "llm-evaluation", "llm-testing"]
stars: 5
forks: 4
openIssues: 29
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-05-28T15:30:41Z"
lastCommitAt: "2026-06-28T06:57:36Z"
lastReleaseAt: "2026-05-30T11:42:39Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 63
undervaluedScore: 57
maintainers: ["hoainho"]
openGraphImageUrl: "https://opengraph.githubassets.com/671a2b9750b530827db81f2685c176278c4852dbaac937a43c1ad4f4d0dc6fc8/nano-step/eval-harness"
discussionCount: 3
---

# @nano-step/eval-harness

> **Behavior-regression testing for LLM agents.** 4-class attribution, 6-field FAIL schema, $-cost gating, flaky detection. Bash + jq. Works with [opencode](https://github.com/sst/opencode) today, runner-pluggable.

</p>

> _The GIF above is built from [`docs/assets/demo.tape`](./docs/assets/demo.tape) with [Charm vhs](https://github.com/charmbracelet/vhs). If it's missing, run `vhs docs/assets/demo.tape`._

### Learn more

- [**Concepts**](./docs/concepts.md) — the 4 ideas that distinguish eval-harness (6-field FAIL, 4-class attribution, 3-sample stability, $-cost gating).
- [**Comparison**](./docs/comparison.md) — eval-harness vs promptfoo, DeepEval, Ragas, OpenAI Evals.
- [**Why not promptfoo?**](./docs/why-not-promptfoo.md) — direct head-to-head, when to use both.
- [**Runners**](./docs/runners.md) — runner abstraction + path to LangGraph / Claude Agent SDK / your own framework.

**v0.4.2** — Behavior-regression eval harness for [opencode](https://github.com/sst/opencode) skills.
> v0.4.2 closes all 8 BLOCKERs surfaced by independent audits: `EVAL_BYPASS` works, `score_shell` is sandboxed, fixture path-traversal blocked, `attribute.sh` portable…
