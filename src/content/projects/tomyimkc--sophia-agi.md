---
repo: "tomyimkc/sophia-agi"
name: "sophia-agi"
description: "Wisdom before intelligence. A provenance-aware reasoning layer that abstains instead of fabricating — stops LLMs inventing attributions and merging distinct traditions. Measured: 0% fabrication on unknown-answer traps (vs 17–25% raw); −12.5pt hallucinated attributions at 0% false-positive cost. An AGI-candidate proof package, not proven AGI."
readmeQualityOk: true
url: "https://github.com/tomyimkc/sophia-agi"
homepage: "https://tomyimkc.github.io/sophia-agi/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["benchmark", "llm", "rag", "agents", "agi", "knowledge-graph", "provenance", "source-discipline", "ai-alignment", "ai-safety"]
stars: 5
forks: 0
openIssues: 12
closedIssues: 8
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-06-18T02:18:53Z"
lastCommitAt: "2026-07-07T06:37:34Z"
lastReleaseAt: "2026-07-04T04:05:01Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 88
undervaluedScore: 58
maintainers: ["tomyimkc", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/52400cec0be37ab483e1a840f755dcbc352f9b8d60c95350bbdfa01c786b2bc6/tomyimkc/sophia-agi"
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

**Validated proof (clears the no-overclaim gate):**
- On a local model, Sophia cuts hallucinated attributions from **36.1% → 23.6%** (Δ **12.5%**, 95% CI [5.6%, 19.4%]) at **0% false-positive cost**.
- On the self-authored 2026-06-22 abstain-calibration pack, Sophia fabricated **0%** on genuine "I don't know" traps vs raw models' 17–25%. **Caveat:** a first-party…
