---
repo: "scalytics/kafSIEM"
name: "kafSIEM"
description: "Entity graph platform for air-gapped defense and critical infrastructure. Kafka-native OSINT, OT fusion, and immutable provenance on every edge."
readmeQualityOk: true
url: "https://github.com/scalytics/kafSIEM"
homepage: "https://osint.scalytics.io"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [69, 27]
topics: ["go", "open-source", "osint", "scalytics", "intelligence", "siem", "streaming-intelligence", "open-source-security-monitoring"]
stars: 61
forks: 14
openIssues: 5
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-16T06:47:16Z"
lastCommitAt: "2026-07-13T06:37:56Z"
lastReleaseAt: "2026-03-22T10:06:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 31
maintainers: ["novatechflow", "dependabot[bot]", "kamir"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e7a248baba628de88cbf665bef9a1574c9498fb42c0d3748884bddafbaf64d0/scalytics/kafSIEM"
---

# kafSIEM

Edge-ready operations intelligence with an evidence-linked entity graph.

kafSIEM watches Kafka agent traffic and OSINT feeds, materializes entities and
relationships in SQLite, and serves analyst workflows through a web desk and
typed OpenAPI. Deploy with Docker on a single host. No cluster database
required.

Keywords: entity graph, Kafka SIEM, OSINT dashboard, drone fleet operations,
SCADA security, edge deployment, ontology packs, provenance, SQLite analyst API.

## Screenshots

  </a>
  </a>
  </a>
</p>
  <strong>OSINT</strong> | <strong>Operations / Drones</strong> | <strong>Operations / SCADA</strong>
</p>

## Try in 30 seconds

No Kafka, API keys, or Docker required.

```bash
git clone https://github.com/scalytics/kafSIEM.git && cd kafSIEM
make help          # list all targets
make demo-osint    # public OSINT relations demo (fixtures, no Docker)
make demo-ontology # Operations ontology desk
make demo-fusion   # Fusion desk
```

`make demo-osint` opens the OSINT console with bundled alert and incident
fixtures — cyber, malware, ICS/energy, and terror clusters in the Relations
panel. No Kafka or Docker required.

## What you get

- **Entity graph** stored in…
