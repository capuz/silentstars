---
repo: "compactbench/compactbench"
name: "compactbench"
description: "Open benchmark for LLM context compaction methods — measures what survives when you replace conversation history with a compacted artifact. Multi-cycle drift, hidden ranked set."
readmeQualityOk: true
url: "https://github.com/compactbench/compactbench"
homepage: "https://compactbench.github.io/compactbench/"
language: "Python"
languages: ["Python"]
languagePcts: [74]
topics: ["agents", "ai", "benchmark", "context-compression", "context-management", "evaluation", "llm", "llm-evaluation", "long-context", "memory"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-17T04:00:25Z"
lastCommitAt: "2026-11-16T04:27:00Z"
lastReleaseAt: "2026-04-17T22:29:33Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 53
maintainers: ["UsernameLoad", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/93636eb07937256ad6f228c56aac4a37080e28f6857f2341e9e42d44995f7983/compactbench/compactbench"
fundingLinks: ["KO_FI:https://ko-fi.com/shpdeve", "CUSTOM:https://compactbench.com/donate"]
---

# CompactBench

> **Your agent compacts its context before it runs out of room. Does it keep what matters?** CompactBench is the benchmark that finds out.

Long-running LLM agents compact their history — summarize it, extract state, keep a ledger — and then carry on with only the compacted version. CompactBench gives your compactor a long, adversarial conversation, compacts it again and again as the conversation continues, and after every compaction asks a fixed reader model structured questions about what survived.

**What makes it different:**

- **It measures the compaction layer, not the model.** The reader only ever sees your artifact.
- **Real multi-cycle drift.** After the first compaction your method gets only its previous artifact plus the new turns — never the old turns again — while rules change, decisions get overridden, and ownership moves.
- **Adversarial by construction.** Wrong answers are built from the conversation itself: the superseded decision, the rule for another project, the look-alike colleague, the runner-up vendor.
- **No LLM judge.** Every answer is an option letter or an exact value, scored mechanically, with confidence intervals.
- **Controls.**…
