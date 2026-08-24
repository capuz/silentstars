---
repo: "poliakarmai/gsc"
name: "gsc"
description: "GSC — verified remediation engine: SAST that proves exploits (PoC), verifies fixes (Proof-of-Fix), and self-heals CI. Apache 2.0 + Commercial."
readmeQualityOk: true
url: "https://github.com/poliakarmai/gsc"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-06-25T07:46:07Z"
lastCommitAt: "2026-08-24T04:21:31Z"
lastReleaseAt: "2026-08-13T09:09:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 52
maintainers: ["poliakarmai"]
openGraphImageUrl: "https://opengraph.githubassets.com/94bba97be874ef878bff61f1d5b9167ebb5064428dcbce54fc51a5f81eb7f2b0/poliakarmai/gsc"
---

# 🛡️ GSC — Git Security Checker

**Version:** v1.4.0 · **Detectors:** 47 (43 registry + 4 engines) · **Schema:** v33 · **Modules:** 169

### Self-learning SAST that sees the **past, present, and future** of every vulnerability

Not just another scanner. GSC **proves** vulnerabilities with generated exploits,
**fixes** them with verified patches, and **heals** your codebase with automatic PRs.

[Quick Start](#-quick-start) · [Features](#-what-makes-gsc-unique) ·
[GitHub Action](#-github-action) · [Architecture](#-architecture) ·
[Roadmap](#-roadmap) · [Documentation](https://github.com/poliakarmai/gsc/blob/HEAD/docs/README.md)

</div>

---

## 🎯 Why GSC?

Every SAST tool shows you a **snapshot of "right now"** — a list of findings you
have to triage, verify, and fix manually.

**GSC is different.** It closes the entire security loop:

**detect → prove → fix → verify → heal → predict → learn**

| Stage | What GSC does | Who else does this? |
|---|---|---|
| **Detect** | 47 detectors + LLM revalidation | Semgrep, Snyk, CodeQL, Sonar |
| **Prove** | Auto-generates a working exploit (PoC) | 🟡 *partial* — PT Application Inspector (exploit confirmation), Checkmarx (exploitability) |
|…
