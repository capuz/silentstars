---
repo: "blindzero/IdentityLifecycleEngine"
name: "IdentityLifecycleEngine"
description: "IdentityLifecycleEngine is a headless, configurable Identity Lifecycle (JML) engine in PowerShell 7. Plans and executes joiner/mover/leaver workflows across accounts and entitlements via pluggable steps and providers. Supports validate/plan/execute, preview diffs, policies, and structured audit/event streams."
readmeQualityOk: true
url: "https://github.com/blindzero/IdentityLifecycleEngine"
homepage: "https://blindzero.github.io/IdentityLifecycleEngine/"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [99]
topics: ["account-management", "identity-management", "powershell", "powershell-module"]
stars: 7
forks: 0
openIssues: 14
closedIssues: 105
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-28T02:44:10Z"
lastCommitAt: "2026-10-31T19:01:14Z"
lastReleaseAt: "2026-02-07T23:08:51Z"
status: "thriving"
tags: []
healthScore: 81
undervaluedScore: 54
maintainers: ["Copilot", "dependabot[bot]", "blindzero"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1123963979/6b378fa4-cc8b-4c68-b938-eaa6527110c3"
---

# IdentityLifecycleEngine (IdLE)

---

IdLE is a **generic, headless, configuration-driven** lifecycle orchestration engine
for identity and account processes (Joiner / Mover / Leaver), built for **PowerShell 7+**.

The key idea is to **separate intent from implementation**:

- **What** should happen is defined in a **workflow** (data-only configuration).
- **How** it happens is implemented by **steps** and **providers** (pluggable modules).
  - **steps** define, via StepTypes, which provider-agnostic **capabilities** are required to perform a workflow step
  - **providers** register to the core and announce the provided **capabilities** and implement the vendor system specific interface

---

## Why IdLE?

JML (joiner/mover/leavers) processes are

- error prone, especially if performed manually
- time consuming and therefore
- quite annoying for operators

Self-made identity lifecycle automation often turns into long scripts that are:

- tightly coupled to one environment
- hard to test
- hard to change safely

Identity Management Systems (IdMS) on the other side are either complex or expensive (or both of it) and then often do not care about supplementary systems that also need…
