---
repo: "kundanvarma/genalpha-bss"
name: "genalpha-bss"
description: "new generation boss based on Oda"
readmeQualityOk: true
url: "https://github.com/kundanvarma/genalpha-bss"
language: "Java"
languages: ["Java", "JavaScript"]
languagePcts: [64, 29]
stars: 5
forks: 4
openIssues: 7
closedIssues: 123
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-09T14:18:52Z"
lastCommitAt: "2026-11-03T11:15:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 68
maintainers: ["kundanvarma", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6410a94d401732f4fea4b43a01f6811d32da868f405d16d5cd5506e3ff3deab5/kundanvarma/genalpha-bss"
---

# genalpha-bss — a composable, multi-tenant, agentic BSS on TM Forum ODA

A vendor-neutral telecom **Business Support System** built as **41 composable ODA components**
(Spring Boot microservices exposing TMF Open APIs) plus **seven channels** (six web, one mobile), behind one API
gateway. Any OIDC identity provider, any PostgreSQL, any Kafka-protocol broker — nothing
operator-specific is hardcoded. Two demo operators run side by side on a single deployment to
prove it.

**Run it now** — three commands, then a browser:

```bash
mvn -q package -DskipTests && docker compose build && docker compose up -d
```

→ [Quickstart](#quickstart) (demo data + every persona login) · [CTK scorecard](https://github.com/kundanvarma/genalpha-bss/blob/HEAD/docs/ctk-conformance.md) · [the proof run — every suite, attempts on record](https://kundanvarma.github.io/genalpha-bss/proof-run.html) · [guided demo](#a-look-at-it) · [Growth guide](https://github.com/kundanvarma/genalpha-bss/blob/HEAD/docs/growth-guide.md) · [Martech guide](https://github.com/kundanvarma/genalpha-bss/blob/HEAD/docs/martech-guide.md)

**At a glance**

- Catalog → order → activate → bill → cash, complete — 41 ODA components…
