---
repo: "tomyimkc/sophia-agi"
name: "sophia-agi"
description: "Wisdom before intelligence. A provenance-aware reasoning layer that abstains instead of fabricating — stops LLMs inventing attributions and merging distinct traditions. Measured: 0% fabrication on unknown-answer traps (vs 17–25% raw); −12.5pt hallucinated attributions at 0% false-positive cost. An AGI-candidate proof package, not proven AGI."
readmeQualityOk: true
url: "https://github.com/tomyimkc/sophia-agi"
homepage: "https://tomyimkc.github.io/sophia-agi/"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["benchmark", "llm", "rag", "agents", "agi", "knowledge-graph", "provenance", "source-discipline", "ai-alignment", "ai-safety"]
stars: 6
forks: 0
openIssues: 12
closedIssues: 8
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-18T02:18:53Z"
lastCommitAt: "2026-08-10T05:04:44Z"
lastReleaseAt: "2026-07-31T10:20:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 88
undervaluedScore: 56
maintainers: ["tomyimkc"]
openGraphImageUrl: "https://opengraph.githubassets.com/df219630dc9c5d94da374ff91a165a9c11dca0fd843755b9d928a1783ac82151/tomyimkc/sophia-agi"
fundingLinks: ["GITHUB:https://github.com/tomyimkc", "CUSTOM:https://www.patreon.com/c/aideveloper_tomyim"]
discussionCount: 0
---

# Sophia — the Wisdom Gate

> **Wisdom before intelligence.** A provenance-aware reasoning layer that **abstains instead of fabricating**.

Sophia is an open, **provenance-aware, verifier-gated reasoning layer that abstains instead of fabricating** — a corpus + gate that stops LLMs from inventing attributions and merging distinct intellectual traditions, then reasoning on top of the error. It is a research program *toward* grounded AI; **not a claim of AGI** (see scope below).

The gate, in one line:

```text
claim  →  verify against sources  →  accept · abstain · block
```

**One-sentence problem it solves:** Modern AI confidently merges Confucius with the *Dao De Jing*, credits Freud for ideas from the 1950s, and treats legendary figures as literal authors — then uses those errors as premises for further reasoning.

## Sophia in 30 seconds

| Raw model failure | Sophia-gated behavior |
|---|---|
| Confident false attribution | Held, blocked, or repaired before publication |
| Unknown author guessed as a named figure | Honest abstention when provenance is missing |
| Claim ships because it sounds fluent | Claim must pass `record_claim → verify_claim` first |

```text
claim  →…
