---
repo: "eltavine/Duck-ToolBox"
name: "Duck-ToolBox"
description: "KernelSU Module"
readmeQualityOk: true
url: "https://github.com/eltavine/Duck-ToolBox"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [54, 20]
stars: 399
forks: 69
openIssues: 11
closedIssues: 13
watchers: 1
contributors: 14
recentReleases: 10
createdAt: "2026-03-30T16:11:10Z"
lastCommitAt: "2026-11-02T13:38:23Z"
lastReleaseAt: "2026-10-17T01:46:26Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 90
undervaluedScore: 28
maintainers: ["eltavine", "dependabot[bot]", "benjamindaines"]
openGraphImageUrl: "https://opengraph.githubassets.com/23a8b60b439ff9b8aa69b0acbe7447e6119be07e5ea84cb8852120cd04d33411/eltavine/Duck-ToolBox"
---

# Duck ToolBox

Duck ToolBox is a root module (KernelSU, APatch or Magisk) that puts Android attestation
and system tools behind one WebUI. The backend is a Cargo workspace of single-purpose crates
compiled into one JSON CLI (`duckd`); the WebUI is a set of feature folders that the app
discovers at build time. Features only meet through versioned contracts, so each one can be
changed, removed or added on its own.

## Tools

- **Play Integrity**: an independently built GPLv3 engine derived from Play Integrity Fork,
  with configuration previews, migration, fingerprint generation, compatibility settings and
  diagnostics in the WebUI. It is disabled by default and requires explicit enabling;
  saved enable settings are retained. Injection requires Zygisk and a saved nonempty
  configuration. Full-mode global scripts also wait for configuration; explicitly
  selected scripts-only mode can run without a fingerprint. A separate stop control works
  during tasks, invalid configuration and pending recovery; configuration is retained. The management code remains MIT; see [licensing boundaries](https://github.com/eltavine/Duck-ToolBox/blob/HEAD/THIRD_PARTY_NOTICES.md).

- **Device Faker**:…
