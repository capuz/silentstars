---
repo: "git-pkgs/proxy"
name: "proxy"
description: "A lightweight caching proxy for package registries. "
readmeQualityOk: true
url: "https://github.com/git-pkgs/proxy"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["caching-proxy", "go", "package-management", "package-registry", "supply-chain-security"]
stars: 185
forks: 35
openIssues: 34
closedIssues: 40
watchers: 5
contributors: 20
recentReleases: 3
createdAt: "2026-01-20T21:46:44Z"
lastCommitAt: "2026-08-29T10:23:07Z"
lastReleaseAt: "2026-07-27T11:22:01Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 89
undervaluedScore: 33
maintainers: ["andrew", "dependabot[bot]", "abhinavgautam01"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b5aa28f262549d80238570e2b178573b9549232d540ee0791e36f0e01ffcc53/git-pkgs/proxy"
fundingLinks: ["GITHUB:https://github.com/andrew", "KO_FI:https://ko-fi.com/andrewnez", "BUY_ME_A_COFFEE:https://buymeacoffee.com/andrewnez"]
---

# git-pkgs proxy

A caching proxy for package registries. Speeds up package downloads by caching artifacts locally, reducing bandwidth usage and improving reliability.

## Version Cooldown

Most supply chain attacks rely on speed: a malicious version gets published and consumed by automated pipelines within minutes, before anyone notices. The cooldown feature adds a quarantine period to newly published versions. When enabled, the proxy strips versions from metadata responses until they've aged past a configurable threshold.

```yaml
cooldown:
  default: "3d"              # hide versions published less than 3 days ago
  ecosystems:
    npm: "7d"                # npm gets a longer window
    cargo: "0"               # disable for cargo
  packages:
    "pkg:npm/lodash": "0"    # exempt trusted packages
```

A 3-day cooldown means that when `lodash` publishes version `4.18.0`, your builds keep using `4.17.21` until 3 days have passed. If the new release turns out to be compromised, you were never exposed.

Resolution order: package override, then ecosystem override, then global default. This lets you set a conservative default and carve out exceptions for packages where you need…
