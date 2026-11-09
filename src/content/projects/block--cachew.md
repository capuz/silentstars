---
repo: "block/cachew"
name: "cachew"
description: "Cachew (pronounced cashew) is a super-fast application-level pass-through cache"
readmeQualityOk: true
url: "https://github.com/block/cachew"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 44
forks: 18
openIssues: 12
closedIssues: 31
watchers: 0
contributors: 21
recentReleases: 2
createdAt: "2025-12-15T21:18:43Z"
lastCommitAt: "2026-11-09T00:54:28Z"
lastReleaseAt: "2026-09-24T17:13:15Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 50
maintainers: ["alecthomas", "worstell", "stuartwdouglas"]
openGraphImageUrl: "https://opengraph.githubassets.com/99e7264229154a20842fa31e06346f5710a1a10b3933dce7e4dd90813f9160f3/block/cachew"
---

# Cachew

Cachew (pronounced "cashew") is a tiered, protocol-aware, caching HTTP proxy for software engineering infrastructure. It understands higher-level protocols (Git, Docker, Go modules, etc.) and makes smarter caching decisions than a naive HTTP proxy.

## Strategies

### Git

Caches Git repositories with two complementary techniques:

1. **Snapshots** — periodic `.tar.zst` archives that restore 4–5x faster than `git clone`.
2. **Pack caching** — passthrough caching of packs from `git-upload-pack` for incremental pulls.

Redirect Git traffic through cachew:

```ini
[url "https://cachew.example.com/git/github.com/"]
  insteadOf = https://github.com/
```

Restore a repository from a snapshot (with automatic delta bundle to reach HEAD):

```sh
cachew git restore https://github.com/org/repo ./repo
```

```hcl
git {
  snapshot-interval = "1h"
  repack-interval   = "1h"
}
```

### GitHub Releases

Caches public and private GitHub release assets. Private orgs use a token or GitHub App for authentication.

**URL pattern:** `/github-releases/{owner}/{repo}/{tag}/{asset}`

```hcl
github-releases {
  token        = "${GITHUB_TOKEN}"
  private-orgs = ["myorg"]
}
```

### Go Modules

Go…
