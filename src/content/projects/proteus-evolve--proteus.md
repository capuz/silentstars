---
repo: "proteus-evolve/Proteus"
name: "Proteus"
description: "Self-evolution for any agent harness. Plug in. Evolve. Measure."
readmeQualityOk: true
url: "https://github.com/proteus-evolve/Proteus"
homepage: "https://proteus-evolve.github.io/"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["agent", "agent-framework", "agent-memory", "deepseek", "deepseek-harness", "evolving", "harness", "harness-engineering", "recursive-self-improvement", "rsi"]
stars: 57
forks: 7
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 3
createdAt: "2026-08-17T10:09:33Z"
lastCommitAt: "2026-08-28T14:33:56Z"
lastReleaseAt: "2026-08-24T08:07:02Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 34
maintainers: ["yichen14", "JiaenLiu", "dukewillbe185"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ba12e9a0cc436d69f66f4f337e43e6acaddbec84ce4270696ff1f368089652b/proteus-evolve/Proteus"
---

</p>

<h3 align="center">Self-evolution for any agent harness.</h3>

  <b>Plug in. Evolve. Measure.</b>
</p>

</p>

</p>

---

Plug in *any* agent harness × *any* model, let it rewrite its own harness over many
context-fresh episodes, and measure **how the harness changes** — under a goal, many goals,
or no goal at all.

> Named for the sea-god who changes shape at will: Proteus watches a harness reshape
> itself, and gives you the ruler to measure the change.

## 🔭 Why Proteus is different

Agent self-improvement is moving from the weights to the **harness** — the prompts, memory,
skills, tools, and control loop the model runs on. Recent systems evolve a harness to raise
a benchmark score. Proteus asks a different, complementary question: **what does a
self-evolving harness actually *do*, and does an initial condition leave a permanent mark?**

Three things set it apart from every existing harness-evolution system:

1. **Harness-agnostic.** Others evolve harnesses built from their *own* primitives. Proteus
   evolves *yours*: implement one small `HarnessAdapter` and your agent — the bundled
   offline `minimal` harness (the CLI default), DeepSeek Harness, Pi, Aki, or your own —…
