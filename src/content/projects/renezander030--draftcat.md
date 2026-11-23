---
repo: "renezander030/draftcat"
name: "draftcat"
description: "Governed AI pipelines for service businesses. Deterministic-first, single Go binary, operator-approved."
readmeQualityOk: true
url: "https://github.com/renezander030/draftcat"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["golang", "human-in-the-loop", "llm", "ai-agents", "ai-governance", "cli", "guardrails", "llmops", "prompt-injection", "self-hosted"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-03-18T06:50:39Z"
lastCommitAt: "2026-11-23T13:27:44Z"
lastReleaseAt: "2026-10-08T06:07:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 55
maintainers: ["renezander030"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1185022856/bcad22af-93e5-46de-8f6c-19b9f5dbecac"
---

> **AI suggests. Deterministic code decides. The operator signs off.**

Draftcat runs YAML-defined pipelines that triage email, qualify leads, draft replies, extract data from PDFs, and govern self-hosted voice AI. Every outbound action passes an operator approval gate, every LLM call is budget-checked, and every fetched item is deduped against a SQLite state store. One business per instance, self-hosted, auditable.

## Let a server count votes it cannot read

A normal approval server sees how every person voted. Draftcat's experimental **FHE encrypted tally** lets three or more reviewers turn `approve` or `reject` into unreadable ciphertext on their own machines. A collector combines those files without opening them; only the key owner can reveal the final count and learn whether quorum was met.

```text
reviewers encrypt votes  →  collector adds unreadable ballots  →  key owner opens one total
                              collector never sees yes or no
```
