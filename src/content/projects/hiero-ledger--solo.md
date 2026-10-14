---
repo: "hiero-ledger/solo"
name: "solo"
description: "An opinionated CLI tool to deploy and manage standalone test networks."
readmeQualityOk: true
url: "https://github.com/hiero-ledger/solo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["hacktoberfest"]
stars: 44
forks: 59
openIssues: 188
closedIssues: 1766
watchers: 6
contributors: 52
recentReleases: 0
createdAt: "2024-01-31T23:18:57Z"
lastCommitAt: "2026-10-14T08:58:37Z"
lastReleaseAt: "2024-06-14T10:39:53Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 64
maintainers: ["JeffreyDallas", "Ivo-Yankov", "ddeskov-limechain"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/751097461/a1069602-8493-4661-ba02-c498d1aa667f"
discussionCount: 5
---

# Solo

An opinionated CLI tool to deploy and manage standalone test networks.

## Homebrew Deprecation Notice

**Warning: Homebrew support for Solo is being removed.** The Solo Homebrew formula will stop being updated after **August 31, 2026**; releases published after that date will only be available from npm.

Install and upgrade Solo with npm instead:

```bash
npm install -g @hiero-ledger/solo
```

If Solo is currently installed with Homebrew, switch over with:

```bash
brew uninstall solo
npm install -g @hiero-ledger/solo
```

## Releases

Odd-numbered Solo releases are supported for one month after their release date. Even-numbered LTS (Long-Term Support) versions are supported for three months. Upgrade to the latest version to benefit from new features and improvements.

### Current Releases

| Solo Version | Node.js             | Consensus Node | Kubernetes | Docker Resources               | Release Date | End of Support |
|--------------|---------------------|----------------|------------|--------------------------------|--------------|----------------|
| 0.93.0       | >= 22.0.0 (lts/jod) | v0.77.2        | >= v1.32.2 | Memory >= 12GB, CPU cores >= 6 | 2026-10-13   |…
