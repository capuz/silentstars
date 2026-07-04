---
repo: "starhaven-io/pinprick"
name: "pinprick"
description: "Pin your GitHub Actions. Prick holes in their supply chain security."
readmeQualityOk: true
url: "https://github.com/starhaven-io/pinprick"
homepage: "https://pinprick.rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["github-actions", "supply-chain-security", "software-supply-chain", "devsecops", "security", "appsec", "cicd", "dependency-pinning", "sha-pinning", "rust"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-04-09T17:49:44Z"
lastCommitAt: "2026-07-04T23:15:29Z"
lastReleaseAt: "2026-04-12T16:39:54Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 62
maintainers: ["p-linnane", "dependabot[bot]", "starhaven-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/53bdee90c26d37b49ca06c12937b848834bc6b1116c6b88771ab4e85739868b7/starhaven-io/pinprick"
fundingLinks: ["GITHUB:https://github.com/p-linnane"]
---

# pinprick

A CLI tool for GitHub Actions supply chain security. Pins action references to full SHAs, checks for updates, audits runtime fetch patterns that bypass pinning, and scores repository posture.

The name: **pin** (SHA pinning) + **prick** (a small, sharp probe finding tiny holes in your supply chain).

## Why

For static analysis of your workflow files — template injection, excessive permissions, credential leaks — use [zizmor](https://github.com/zizmorcore/zizmor). It's excellent.

pinprick picks up where static analysis leaves off. SHA-pinning actions is table stakes, but even a pinned action can `curl` down `releases/latest` at runtime. pinprick pins your actions, keeps them updated, audits source code for unversioned runtime fetches in shell scripts, JavaScript, Python, and Dockerfiles, and gives you a single score to track over time.

## Installation

### Homebrew

```bash
brew install starhaven-io/tap/pinprick
```

### crates.io

```bash
cargo install pinprick
```

### From releases

Download a prebuilt binary from [GitHub Releases](https://github.com/starhaven-io/pinprick/releases).

### From git (unreleased HEAD)

To try unreleased changes from `main`:

```bash…
