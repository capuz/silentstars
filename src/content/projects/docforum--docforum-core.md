---
repo: "DocForum/docforum-core"
name: "docforum-core"
description: "The backend modular monolith — everything from PRD.md/ARCHITECTURE.md except the contract itself: auth, users, doctors, patients, availability, appointments, referrals, consultations, prescriptions, lab-orders, facilities, notifications, and a payments module that imports docforum-escrow as a dependency. Owns Postgres/Prisma, owns all PHI."
readmeQualityOk: true
url: "https://github.com/DocForum/docforum-core"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["express", "healthcare", "modular-monolith", "postgresql", "prisma", "typescript"]
stars: 12
forks: 44
openIssues: 88
closedIssues: 44
watchers: 0
contributors: 21
recentReleases: 0
createdAt: "2026-09-09T12:00:53Z"
lastCommitAt: "2026-10-21T21:16:04Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 75
undervaluedScore: 53
maintainers: ["afeezorobsco-cyber", "zainabwahab-eth", "Marvellous805"]
openGraphImageUrl: "https://opengraph.githubassets.com/e22be329f0b8bdee60ac50802df9726b090c0a34c078ab46ec37c99e13c94f68/DocForum/docforum-core"
---

# docforum-core

**The backend of DocForum** — a platform that collapses a multi-visit,
multi-queue hospital journey into one continuous digital thread. A patient
searches for a doctor, books a slot, gets referred to the right specialist
without re-explaining themselves, receives a prescription or lab order, and
gets it fulfilled at a qualified partner facility — all tracked end to end.

This is the **hub repository** of the `DocForum` GitHub organization: it
owns the product definition (PRD), the full system architecture, the data
model, and the master roadmap that the other two repos are scoped against.

**📖 [Browse the docs site](https://docforum.github.io/docforum-core/)** —
PRD, architecture, ADRs, API reference, and every repo's roadmap in one
place, synced at build time from each repo's own files (see
[`docs/site/`](https://github.com/DocForum/docforum-core/blob/HEAD/docs/site)).

---

## Table of contents

- [Organization layout](#organization-layout)
- [Tech stack](#tech-stack)
- [Domain model, at a glance](#domain-model-at-a-glance)
- [Backend modules](#backend-modules)
- [Repo layout](#repo-layout)
- [Documentation](#documentation)
- [Getting started](#getting-started)…
