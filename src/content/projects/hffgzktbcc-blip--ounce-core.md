---
repo: "hffgzktbcc-blip/ounce-core"
name: "ounce-core"
description: "Rust runtime for open-source Switch homebrew on macOS Apple Silicon, Linux and Windows. Every claim is backed by a real program's frame."
readmeQualityOk: true
url: "https://github.com/hffgzktbcc-blip/ounce-core"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 209
forks: 21
openIssues: 1
closedIssues: 3
watchers: 3
contributors: 4
recentReleases: 5
createdAt: "2026-10-24T19:32:45Z"
lastCommitAt: "2026-11-07T13:54:41Z"
lastReleaseAt: "2026-11-06T14:27:50Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 31
maintainers: ["hffgzktbcc-blip", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7eb3077fbde21365ecec04cff15cb8e12e8a3d8f021a0fb6446f992c2004133e/hffgzktbcc-blip/ounce-core"
discussionCount: 2
---

**An inspectable AArch64 runtime for open-source Switch homebrew, measured by real frames.**

[The Ounce Vision](#the-ounce-vision) · [Architecture](#the-system) · [Get started](#quickstart) · [Verified progress](#what-is-proven) · [Roadmap](#the-road-ahead) · [Research & provenance](#responsible-research)

---

## ✦ THE OUNCE VISION ✦

### Execute. Observe. Understand. Verify.

**A research platform for making software behaviour observable, correctness testable, and results reproducible.**

*One experimental runtime. One evidence foundation. Many ways to investigate and learn.*

```mermaid
flowchart TB
    subgraph EXPERIENCE["THE RESEARCH EXPERIENCE · evolving product directions"]
        direction LR
        DBG["Ounce-Debug<br/>Investigate failures"]
        TRC["Ounce-Trace<br/>Inspect execution"]
        LRN["Ounce-Learn<br/>Explain the system"]
        BEN["Ounce-Bench<br/>Compare performance"]
    end
    V["OUNCE-VERIFY<br/>Registered oracles · evidence · reproducibility"]
    R["OUNCE-CORE RUNTIME<br/>AArch64 engines · memory · services · graphics"]
    P["Pinned, permitted programs and reproducible test inputs"]

    P --> R --> V
    V --> DBG
    V --> TRC
    V -->…
