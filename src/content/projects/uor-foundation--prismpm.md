---
repo: "UOR-Foundation/prismpm"
name: "prismpm"
description: "Build, run and ship self-verifying AI applications that just work. From edge to cloud. "
readmeQualityOk: true
url: "https://github.com/UOR-Foundation/prismpm"
homepage: "https://uor.foundation/PrismPM"
language: "TeX"
languages: ["TeX"]
languagePcts: [38]
topics: ["active", "computation", "latex", "tier-1-core", "uor", "uor-foundation"]
stars: 5
forks: 7
openIssues: 94
closedIssues: 122
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-08-30T14:47:42Z"
lastCommitAt: "2026-11-23T11:55:29Z"
lastReleaseAt: "2026-11-16T21:55:13Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 89
undervaluedScore: 78
maintainers: ["humuhumu33", "Knapp-Kevin", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e087330941bcd14508acee29959cb477068622b43b7972fb78d94f4a849a885/UOR-Foundation/prismpm"
---

*Illustrative placeholder artwork, pending UOR Foundation brand approval.*

# PrismPM

**Turn a software model into an application you can build, check, and share.**

[Why it exists](#why-prismpm-exists) · [What it provides](#what-this-repository-provides) · [Calculator quick start](#calculator-getting-started) · [Verification scope](#verification-scope) · [Development](#development-and-acceptance) · [Reference docs](#key-documents)

## Why PrismPM exists

Software teams often have two versions of the truth: what their design says
the program should do, and what the program actually does. If developers
maintain those separately, the design, code, and test evidence can drift
apart. A passing build alone may not show which behavior was checked.

**PrismPM aims to close that gap.** Developers describe an application
using a controlled, structured model. PrismPM uses that model to generate
software artifacts and collect verification evidence. The goal is to make
the connection between the model, the resulting software, and its checks
something people can inspect rather than simply trust.
