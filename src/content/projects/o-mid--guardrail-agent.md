---
repo: "o-mid/guardrail-agent"
name: "guardrail-agent"
description: "NL intent → schema → Go policy → HITL → local EVM/Solana execution"
readmeQualityOk: true
url: "https://github.com/o-mid/guardrail-agent"
homepage: "https://guardrail-agent-six.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-08-01T08:29:05Z"
lastCommitAt: "2026-09-17T08:51:24Z"
lastReleaseAt: "2026-08-03T13:20:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 46
maintainers: ["o-mid"]
openGraphImageUrl: "https://opengraph.githubassets.com/77136c701e0c5247a3d5a986438755855cefde3cd088d67d9e3f693f9d309fe9/o-mid/guardrail-agent"
---

# Guardrail Agent

Natural-language chain intent, schema-checked plan, Go policy gate, human approve per step, dry-run then execute on local EVM (Anvil) and Solana (test validator).

Model output never becomes raw calldata or instruction bytes. Reject paths are part of the product, not edge cases.

**Latest release:** [v0.1.0](https://github.com/o-mid/guardrail-agent/releases/tag/v0.1.0) · [Changelog](https://github.com/o-mid/guardrail-agent/blob/HEAD/docs/CHANGELOG.md)

## Docs

- [Architecture](https://github.com/o-mid/guardrail-agent/blob/HEAD/docs/architecture.md) - components, trust boundaries, data model
- [Process](https://github.com/o-mid/guardrail-agent/blob/HEAD/docs/process.md) - happy path, rejects, state machines, audit events
- [Demo](https://github.com/o-mid/guardrail-agent/blob/HEAD/docs/demo.md) - local setup, interviewer script, screenshots
- [Threat model](https://github.com/o-mid/guardrail-agent/blob/HEAD/docs/threat-model.md) - assets, controls, residual risk
- [Changelog](https://github.com/o-mid/guardrail-agent/blob/HEAD/docs/CHANGELOG.md)

## Stack

| Path | Role |
|------|------|
| `apps/web` | Next.js + Tailwind UI |
| `services/api` | Express + Mongo…
