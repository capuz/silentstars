---
repo: "juliensimon/cache-commander"
name: "cache-commander"
description: "Cache Commander — a TUI and MCP server to explore, audit, and clean developer cache directories. Scan for CVEs, find outdated packages, reclaim disk space. Supports pip, npm, Cargo, HuggingFace, Homebrew, and more."
readmeQualityOk: true
url: "https://github.com/juliensimon/cache-commander"
homepage: "https://github.com/juliensimon/cache-commander"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["cache", "cargo", "cli", "cve", "developer-tools", "disk-space", "huggingface", "linux", "macos", "npm"]
stars: 69
forks: 6
openIssues: 15
closedIssues: 13
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-04-04T18:46:07Z"
lastCommitAt: "2026-09-27T09:30:23Z"
lastReleaseAt: "2026-08-09T16:32:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 26
maintainers: ["juliensimon"]
openGraphImageUrl: "https://opengraph.githubassets.com/6491e12682363c5eb07acf9339bf7037a74e2044988f9119e282c0acb9d9e746/juliensimon/cache-commander"
---

# ccmd — Cache Commander

A terminal UI (TUI) for exploring, auditing, and cleaning developer cache directories on macOS and Linux. Scan cached packages for known CVEs, find outdated dependencies, and reclaim disk space — all from one tool.

Developer machines accumulate tens of gigabytes of invisible cache data — ML models, package archives, build artifacts, downloaded bottles. `ccmd` makes it all visible, scannable for vulnerabilities, and safely deletable.

## Why

- **ML models** (HuggingFace, PyTorch, Whisper) — tens of GB you forgot about
- **Package caches** (pip, uv, npm, Yarn, pnpm, Bun, Cargo, Maven, Gradle, Go, Homebrew) — old versions with known CVEs
- **Xcode DerivedData** — often 50–200 GB on macOS dev machines; never cleaned
- **Swift Package Manager** — reclaim space from cached git clones and artifacts; no CVE scanning yet (OSV `SwiftURL` coverage is sparse)
- **npm supply chain risk** — transitive deps with install scripts hiding in npx cache
- **Build artifacts** (pre-commit hooks, Prisma engines) — stale and re-downloadable

`ccmd` gives you a single view across all of them with security scanning built in.

## Install

### Homebrew (macOS and Linux, includes…
