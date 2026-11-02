---
repo: "opena2a-org/oasb"
name: "oasb"
description: "Open Agent Security Benchmark - 223 attack scenarios, product-agnostic adapter interface, MITRE ATLAS mapped"
readmeQualityOk: true
url: "https://github.com/opena2a-org/oasb"
homepage: "https://oasb.ai"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [59, 41]
topics: ["standard", "tool"]
stars: 10
forks: 2
openIssues: 42
closedIssues: 158
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-10T18:43:35Z"
lastCommitAt: "2026-11-02T11:35:55Z"
lastReleaseAt: "2026-07-14T00:13:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 63
maintainers: ["thebenignhacker"]
openGraphImageUrl: "https://opengraph.githubassets.com/bab2b4f4831af49b26c62e91c8828da6b0c8bab572711ecc7db358cc51d575be/opena2a-org/oasb"
---

# Open Agent Security Benchmark (OASB)

> **[OpenA2A](https://github.com/opena2a-org)**: [CLI](https://github.com/opena2a-org/opena2a) · [HackMyAgent](https://github.com/opena2a-org/hackmyagent) · [Secretless](https://github.com/opena2a-org/secretless-ai) · [AIM](https://github.com/opena2a-org/agent-identity-management) · [Browser Guard](https://github.com/opena2a-org/ai-browserguard) · [DVAA](https://github.com/opena2a-org/damn-vulnerable-ai-agent)

[Website](https://oasb.ai) · [Discord](https://discord.gg/uRZa3KXgEn)

Standardized attack scenarios that evaluate whether a runtime security tool can detect and respond to threats against AI agents. Each scenario is mapped to the [OWASP Top 10 for Agentic Applications (2026)](https://github.com/opena2a-org/oasb/blob/HEAD/docs/owasp-agentic-mapping.md), and most also to the OWASP Top 10 for LLM Applications (2025). Plug in your tool, run the suite, get a detection coverage scorecard.

## Quick Start

```bash
npx @opena2a/oasb AT-AI-001   # one scenario file: prompt input scanning, against the reference adapter
```

What `npx @opena2a/oasb AT-AI-001` prints, trimmed ([full…
