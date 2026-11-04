---
repo: "x-cmd/install"
name: "install"
description: "Curated YAML package index for x install / x eget — 2,350+ packages across 70+ categories, daily-rebuilt as immutable v<YYYYMMDD> GitHub Releases. Apache 2.0."
readmeQualityOk: true
url: "https://github.com/x-cmd/install"
homepage: "https://x-cmd.com/install"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [56, 29]
topics: ["install", "skills", "software"]
stars: 11
forks: 14
openIssues: 49
closedIssues: 59
watchers: 1
contributors: 13
recentReleases: 10
createdAt: "2021-09-26T03:31:34Z"
lastCommitAt: "2026-11-04T08:03:03Z"
lastReleaseAt: "2026-08-29T16:32:34Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "release_machine", "fork_magnet"]
healthScore: 87
undervaluedScore: 90
maintainers: ["edwinjhlee", "lunrenyi", "mixsoulgithub"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf3ca2c981d5ad74cfe9ad864acc39e1b6b71dfd00c5744ea7822a5822804b4a/x-cmd/install"
---

# x-cmd install

Three things to keep straight:

1. **[x-cmd](https://x-cmd.com)** — a POSIX shell superpowers toolkit. The thing you install and run.
2. **`x install`** / **`x eget`** — two commands inside x-cmd that resolve "how do I get tool X onto my machine?". `x install` picks the best available install rule; `x eget` fetches a prebuilt binary from a GitHub release. (See [`x-cmd.com/mod/install`](https://x-cmd.com/mod/install) and [`x-cmd.com/mod/eget`](https://x-cmd.com/mod/eget).)
3. **This repository (`x-cmd-install/install`)** — the **data** those commands consume. Not the code, not the modules — just the curated YAML index: for each of 2,350+ tools, the install rules per OS / per package manager.

In short: x-cmd has the brain; this repo has the lookup table.

> 📦 **2,350+ packages** across 70+ categories under [`src/`](https://github.com/x-cmd/install/blob/HEAD/src).
> 🚀 Daily-rebuilt artifacts (TSV + tar.xz) ship as **immutable `vYYYYMMDD` GitHub Releases** at 12:00 UTC (= 20:00 Asia/Shanghai). Consumers fetch from the latest release (marked "Latest"), **not** from `main`.

---

## Our stance

We welcome interesting new tools, and we don't judge by stars or…
