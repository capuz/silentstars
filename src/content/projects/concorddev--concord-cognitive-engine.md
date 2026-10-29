---
repo: "ConcordDev/concord-cognitive-engine"
name: "concord-cognitive-engine"
description: "AI that shows its receipts — a verified-compute knowledge engine fused with a creator-economy world platform, with a layer that audits and repairs itself."
readmeQualityOk: true
url: "https://github.com/ConcordDev/concord-cognitive-engine"
homepage: "https://concord-os.org"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [56, 40]
topics: ["ai", "cognitive-engine", "dtu", "nodejs", "offline-first", "agents", "creator-economy", "deterministic-compute", "game-engine", "knowledge-graph"]
stars: 12
forks: 4
openIssues: 5
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2025-11-28T16:46:01Z"
lastCommitAt: "2026-10-29T05:49:30Z"
lastReleaseAt: "2026-10-12T16:41:36Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 82
undervaluedScore: 62
maintainers: ["ConcordDev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1106113358/ff336a00-e9bb-4a4f-9864-3a5432a8325d"
fundingLinks: ["GITHUB:https://github.com/ConcordDev"]
discussionCount: 1
---

# Concord: AI that shows its receipts

**Concord gives engineers AI answers they can check.**

Ask an engineering question in plain English. Concord runs a real solver, puts the result next to the textbook hand calculation, and stores a reproducible record of the inputs, assumptions and solver used. The engineer stays in the loop and signs off; Concord makes the check fast and auditable.

**Live product:** [concord-os.org](https://concord-os.org) · [Try it in 5 minutes](#try-it-in-5-minutes) · [Proof](#proof) · [Where we are](#where-we-are) · [Contact](#contact)

```text
You:      A simply supported steel beam 20 ft long carries a 1000 lb point load
          at midspan. E = 29,000,000 psi, I = 200 in^4. What is the maximum deflection?

Concord:  Routed to the beam engine (not guessed by the language model).
          δ = 0.04966 in (1.261 mm)
          Hand check: PL³/48EI = 1000 × 240³ / (48 × 29,000,000 × 200) = 0.04966 in  ✓
```

That exact question and answer are pinned by a test on `main` ([`server/tests/engineering-question-extract.test.js`](https://github.com/ConcordDev/concord-cognitive-engine/blob/HEAD/server/tests/engineering-question-extract.test.js)).

**Why it's…
