---
repo: "langerma/dumpstore"
name: "dumpstore"
description: "A lightweight NAS management UI written in Go — built for Linux and FreeBSD, designed to stay out of the way of a vanilla system."
readmeQualityOk: true
url: "https://github.com/langerma/dumpstore"
homepage: "https://langerma.github.io/dumpstore/"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [69, 20]
topics: ["ansible", "arm64", "dashboard", "freebsd", "golang", "helios64", "homelab", "linux", "nas", "self-hosted"]
stars: 15
forks: 3
openIssues: 29
closedIssues: 77
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-03T22:43:53Z"
lastCommitAt: "2026-11-11T11:23:17Z"
lastReleaseAt: "2026-03-07T22:44:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 90
undervaluedScore: 56
maintainers: ["langerma", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/782bbff24341741da610c043498f405abacb25766171d9e38662f29b79dec478/langerma/dumpstore"
discussionCount: 0
---

> **Pre-1.0 notice:** dumpstore is under active development. Until v1.0, any release may introduce breaking changes to the API, config format, or behaviour. Use in production at your own risk.

> **AI disclosure:** dumpstore is developed with heavy use of AI coding assistants, mainly [Claude Code](https://claude.com/claude-code). Most commits are AI-assisted — they carry a `Co-Authored-By: Claude` trailer. Every change is merged by the maintainer and has to pass CI (build, unit tests, CodeQL, OpenAPI lint); the VM integration suite runs nightly and on labelled PRs. AI-written code can still contain subtle mistakes, and dumpstore runs as root and rewrites system configuration: read the code, try it on a non-critical machine first, and report problems through the issue tracker or [SECURITY.md](https://github.com/langerma/dumpstore/blob/HEAD/SECURITY.md). Provided as is — see [LICENSE](https://github.com/langerma/dumpstore/blob/HEAD/LICENSE).

## Why this exists

I run a [Kobol Helios64](https://wiki.kobol.io/helios64/intro/) as my home NAS — a five-bay ARM board that deserves better than the software ecosystem currently offers it. The storage UIs I tried were too heavy, too…
