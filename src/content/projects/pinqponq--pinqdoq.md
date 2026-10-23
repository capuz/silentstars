---
repo: "pinqponq/pinqdoq"
name: "pinqdoq"
description: "documents for agents"
readmeQualityOk: true
url: "https://github.com/pinqponq/pinqdoq"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-06-12T14:26:05Z"
lastCommitAt: "2026-10-23T08:46:42Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 51
maintainers: ["furkanturkn", "pinq-ponq", "yunuscanbartik"]
openGraphImageUrl: "https://opengraph.githubassets.com/45c2e923c72e62f7fd8fd93a4fadfc563eab4f1871c756cd9003f1ec56addeba/pinqponq/pinqdoq"
---

# pinq-doq

PinqPonq's shared AI knowledge hub: coding **rules**, reusable **skills**, code-generation **scripts**, and deep **references** for every project (mobile + backend).

## Layout

```
pinq-doq/
  rules/          → COPIED into a consumer's .claude/rules/   (auto-loaded, scoped by paths:)
    common.md                 always-on; carries a stack pointer to the files below
    kotlin-architecture.md    paths: ['**/*.kt','**/*.kts'] — Clean Arch, MVI, shared module
    kotlin-naming.md          paths: ['**/*.kt','**/*.kts']
    kotlin-conventions.md     paths: ['**/*.kt','**/*.kts'] — Compose, style, null-safety, DI
    kotlin-deveng-core.md     paths: ['**/*.kt','**/*.kts'] — cites references/kotlin/deveng-core-reference.md
    kotlin-testing.md         paths: ['**/*.kt','**/*.kts'] — test stack, what every change must test, device proof
    dotnet-conventions.md     paths: ['**/*.cs','**/*.csproj','**/*.sln']
    web-testing.md            paths: ['**/*.ts','**/*.tsx','**/*.js','**/*.jsx', …] — web end-to-end proof with Playwright
  skills/         → COPIED into a consumer's .claude/skills/  (intent-discovered)
    add-feature/                orchestrates a whole feature:…
