---
repo: "secmods/depgate"
name: "depgate"
description: "Control what enters your software supply chain. An open-source proxy and policy engine for npm, PyPI, Maven, Go, NuGet, Cargo, Composer, and RubyGems."
readmeQualityOk: true
url: "https://github.com/secmods/depgate"
homepage: "https://secmods.github.io/depgate"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["dependency-management", "malicious-packages", "package-security", "software-supply-chain", "software-supply-chain-security", "supply-chain-security", "dependency-firewall", "package-firewall", "depgate", "artifactory"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-10-20T10:41:36Z"
lastCommitAt: "2026-10-25T08:50:12Z"
lastReleaseAt: "2026-10-21T10:15:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 33
maintainers: ["hayageek", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1426879418/b536faf8-1ef2-4268-afb1-8e2d368c88c7"
discussionCount: 0
---

An open-source dependency gateway: one proxy and policy engine in front of npm, PyPI, Maven, Go, NuGet, Cargo, Composer and RubyGems.

---

## What is DepGate?

DepGate sits between your package managers and the public registries they download from, and decides, version by version, what is allowed into your organization.

Developers and CI pipelines point `npm`, `pip`, `mvn`, `go`, `dotnet`, `cargo`, `composer` or `gem` at DepGate instead of the public registry. DepGate fetches the package from upstream, checks it against the malware list and your policies, and either serves it or refuses it with a clear reason. Nothing reaches a laptop or a build without passing that check, and every decision is recorded.

### Why a gateway, not a scanner

Open-source packages are the largest part of most applications and the easiest way in for an attacker. A hijacked maintainer account, a typosquatted name or a package that impersonates an internal one can reach thousands of builds within hours. Scanning after `npm install` is too late: the install scripts have already run.

DepGate moves the decision to the moment of download:

- **Known malware never downloads.** Every request is checked…
