---
repo: "limbowatch/limbowatch"
name: "limbowatch"
description: "Security advisories your scanner can't see yet: published by maintainers, not yet reviewed into GitHub's database or OSV. Live tracker, open OSV feed, and a CI watcher for GitLab, GitHub, Gitea and Forgejo."
readmeQualityOk: true
url: "https://github.com/limbowatch/limbowatch"
homepage: "https://limbo.watch"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["dependency-scanning", "ghsa", "gitea", "github-actions", "gitlab-ci", "osv", "sarif", "security", "security-advisories", "supply-chain-security"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-19T07:22:06Z"
lastCommitAt: "2026-11-15T08:19:29Z"
lastReleaseAt: "2026-11-12T02:39:51Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 48
maintainers: ["blueandhack", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1425258204/2bb98c1d-ae1d-4fad-8ce0-ed30c74053cf"
---

# Limbowatch

**Published. Not reviewed. Not scanned. In limbo.**

[limbo.watch](https://limbo.watch) · [GitHub Marketplace](https://github.com/marketplace/actions/limbowatch) · [GitLab CI/CD Catalog](https://gitlab.com/explore/catalog/limbowatch/limbowatch-component) · [PyPI](https://pypi.org/project/limbowatch-cli/) · [Check a package](https://limbo.watch/check/)

Limbowatch measures the gap between a maintainer publishing a security advisory and your scanner being able to see it, and closes it in your CI.

When a maintainer publishes a security advisory in their GitHub repository, Dependabot, npm audit, OSV-Scanner and most other dependency scanners stay silent until GitHub reviews that advisory into its global Advisory Database. Until then, the advisory is **in limbo**: public, usually already fixed upstream, and invisible to the tools teams rely on.

## Scan your project

`limbowatch scan` checks your lockfiles against every advisory in limbo and shows what it finds where your team already looks: GitLab merge requests (Code Quality), GitHub pull requests (code scanning), and issues in GitLab, GitHub, Gitea or Forgejo.

```yaml
# GitLab CI
include:
  - component:…
