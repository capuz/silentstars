---
repo: "OmniNode-ai/onex_change_control"
name: "onex_change_control"
description: "ONEX Change Control - Canonical governance + schema distribution + enforcement tooling to prevent cross-repo drift"
readmeQualityOk: true
url: "https://github.com/OmniNode-ai/onex_change_control"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 7
forks: 4
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-12-19T20:48:45Z"
lastCommitAt: "2026-09-27T09:29:05Z"
lastReleaseAt: "2026-06-07T11:00:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 65
maintainers: ["onexbot-occ-writer[bot]", "jonahgabriel"]
openGraphImageUrl: "https://opengraph.githubassets.com/dca22ff0b63aa7e506f2bcb5824e775a4e0620489d01aaa4c90c5a6f7aac216a/OmniNode-ai/onex_change_control"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/brand/omninode-inline-white.png">
    <source media="(prefers-color-scheme: light)" srcset="docs/assets/brand/omninode-inline-full-color.svg">
  </picture>
</p>

# onex_change_control

Governance, drift detection, and enforcement library for the ONEX (OmniNode eXecution) ecosystem.

---

## What This Repo Is

`onex_change_control` (package: `onex-change-control`) is the **canonical governance and enforcement hub** for the ONEX platform. It prevents cross-repo drift by:

- Defining versioned Pydantic schemas for governance artifacts (`ModelTicketContract`, `ModelDayClose`).
- Shipping CLI validators that downstream repos run in CI to prove contract compliance.
- Enforcing architectural invariants (schema purity, naming conventions, DB-boundary, hardcoded-topic detection) via pre-commit hooks and CI gates.
- Owning the evaluation framework (A/B eval suites and comparators) for quantitative ONEX value measurement.

---

## Who Uses This Repo

| Consumer | Usage |
|----------|-------|
| Every downstream repo | Runs `validate-yaml contracts/<TICKET>.yaml` in CI |
| OmniClaude | Imports models to verify and…
