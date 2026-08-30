---
repo: "yeargun/lilscript"
name: "lilscript"
description: "A standalone statically typed language with whole-program JavaScript and native optimization."
readmeQualityOk: true
url: "https://github.com/yeargun/lilscript"
homepage: "https://yeargun.github.io/lilscript/"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [53, 34]
stars: 11
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-05T11:36:59Z"
lastCommitAt: "2026-08-30T09:24:13Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 53
maintainers: ["yeargun"]
openGraphImageUrl: "https://opengraph.githubassets.com/af5d54e16499165280365451402ce1962cca898fc86b62c1c954061ba3f0203e/yeargun/lilscript"
---

# LilScript

**LilScript is built to make correct web programs smaller than equivalent JavaScript.**

Site: [lilscript.eddocu.com](https://lilscript.eddocu.com/)

LilScript is a typed, compression-first language that compiles primarily to JavaScript and secondarily to C/native for its portable subset. Types and explicit boundaries let the compiler change representations before JavaScript is fixed, then score complete legal artifacts for raw, gzip, or Brotli.

The engineering target is corpus-scoped and testable: every declared supported,
semantically equivalent application or library boundary should eventually be no
larger than its best eligible pinned JavaScript baseline for the selected metric.
That is the direction of the project, not a theorem or a claim that every current
port already wins.

## Evidence Status

The canonical paired corpus is green, while current real-library measurements are
mixed: some artifacts improve, some are unchanged, and some regress. Read
[current status](https://github.com/yeargun/lilscript/blob/HEAD/docs/current-status.md) before quoting a result. Measurement
meaning and eligible comparisons are defined by the
[verification…
