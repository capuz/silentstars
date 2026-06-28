---
repo: "Astoriel/trackboard"
name: "trackboard"
description: "Open-source workspace for analytics tracking plans. Import schemas, branch changes, publish versions, validate payloads."
url: "https://github.com/Astoriel/trackboard"
homepage: "http://github.astoriel.tech/trackboard/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [43, 42]
topics: ["analytics", "data-quality", "event-tracking", "fastapi", "nextjs", "python", "schema-validation", "self-hosted", "tracking-plan", "typescript"]
stars: 92
forks: 5
openIssues: 0
closedIssues: 0
watchers: 15
contributors: 2
recentReleases: 1
createdAt: "2021-05-08T10:40:04Z"
lastCommitAt: "2026-06-28T01:43:36Z"
lastReleaseAt: "2026-04-15T01:30:54Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 72
undervaluedScore: 40
maintainers: ["Astoriel"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4c2c478b56e62d6f6c48e6f6844c1707bd4a47e46a3b3b56d9bef94d712ac27/Astoriel/trackboard"
---

</p>

  <strong>Open-source tracking plan management for teams that want analytics contracts in their own stack.</strong>
</p>

</p>

---

## Project Status

Active product prototype. Snapshot date: 2026-06-27. See [STATUS.md](STATUS.md) and [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md) for the release boundary.

Trackboard is positioned as a self-hosted, open-source alternative to hosted tracking-plan tools such as Avo. The useful v1 surface is intentionally narrow: define event contracts, review changes before they break analytics, generate typed helpers, and validate production events close to the edge.

## What It Is

Trackboard has three connected parts:

- **Control plane:** a FastAPI/Next.js workspace for tracking plans, branches, merge reviews, published versions, API keys, validation, DLQ triage, and code generation.
- **Contract toolchain:** a canonical contract export, CLI validation/diff/codegen, and a GitHub Action for PR checks.
- **Runtime data plane:** Trackboard Guard, a small Go service that accepts Segment-compatible events, validates them against a published contract, forwards accepted events, stores rejected events in SQLite DLQ, and replays fixed events after…
