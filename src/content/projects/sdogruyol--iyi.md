---
repo: "sdogruyol/iyi"
name: "iyi"
description: "A language built for DX and AIX"
readmeQualityOk: true
url: "https://github.com/sdogruyol/iyi"
homepage: "https://iyi-lang.com"
language: "Crystal"
languages: ["Crystal"]
languagePcts: [96]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 520
recentReleases: 10
createdAt: "2026-08-03T12:01:33Z"
lastCommitAt: "2026-09-08T08:17:32Z"
lastReleaseAt: "2026-09-01T18:44:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 63
maintainers: ["sdogruyol"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9376c8bae207f476ebcac91a12f94344881dbd57e1d8b742a4fbc41fa419c1a/sdogruyol/iyi"
---

# iyi

**A language built for Developer & Agentic Experience, Portability, Performance,
and Efficiency.** (*iyi* is Turkish for "good".)

The easiest way to get it is one command, which installs the latest release
into `~/.local`:

```sh
curl -fsSL https://raw.githubusercontent.com/sdogruyol/iyi/master/install.sh | sh
~/.local/bin/iyi run ~/.local/share/iyi/samples/hello.iyi
```

Linux x86-64 and macOS arm64; the tarball by hand, and building from source,
are under [Getting it](#getting-it).

Those four are one design decision seen from four sides. A module is the unit of
compilation and it is compiled against its dependencies' **declarations**, never
their bodies — so a build reads less, a program carries less, a tool can read an
interface without a repository, and a person waits less. Everything below is
that rule and what it costs.

| | measured today |
|---|---|
| **Developer experience** | edit one module in a 7,207-line project and rebuild: **0.13 s**, against Crystal's 1.17 s and `go build`'s 0.16 s |
| **Agentic experience** | a module's interface is a file, not a convention: `iyi mod context` grounds an edit in every import's exact surface at **52–59%** of the sources'…
