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
stars: 76
forks: 6
openIssues: 14
closedIssues: 44
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-04T18:46:07Z"
lastCommitAt: "2026-11-27T12:58:26Z"
lastReleaseAt: "2026-10-20T18:49:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 44
maintainers: ["juliensimon", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d9c24f84652f8cfb18a859f813bd508bf99be1a9cf0c122e706ecab71cbb021/juliensimon/cache-commander"
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
