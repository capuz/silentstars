---
repo: "chainguard-dev/omnibump"
name: "omnibump"
description: "Universal declarative dependency bump tool"
readmeQualityOk: true
url: "https://github.com/chainguard-dev/omnibump"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["cargo", "go", "gradle", "maven"]
stars: 16
forks: 12
openIssues: 3
closedIssues: 2
watchers: 3
contributors: 81
recentReleases: 0
createdAt: "2026-02-12T17:41:55Z"
lastCommitAt: "2026-11-04T13:05:21Z"
lastReleaseAt: "2026-03-10T18:32:45Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 49
maintainers: ["dependabot[bot]", "dnegreira", "AdamIsrael"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d8f33011292131d05aeab5e3692eebf1381acf25e6ebcd7f0fe654f60c49c2c/chainguard-dev/omnibump"
---

# omnibump

**Dependency version management tool**

`omnibump` is a CLI tool for updating dependency versions across multiple language ecosystems with an easy-to-use interface with automatic language detection.

## Features

- **Multi-Language Support**: Go, Rust, Java (Maven, Gradle), JavaScript (pnpm, yarn, npm, bun), Python (pip, uv, Poetry, and more), and Ruby (Bundler)
- **Automatic Detection**: Identifies project language automatically
- **Unified Configuration**: Single configuration format across all languages
- **Property-Based Updates**: Smart property management for Maven
- **Version Resolution**: Resolves `@latest` queries without spurious changes
- **Transitive Dependency Detection**: Automatically detects when updates require co-updating other dependencies
- **Incompatible Version Handling**: Automatically handles `+incompatible` suffix for Go modules
- **Dependency Analysis**: Understand project's dependency structure
- **Dry Run Mode**: Preview changes before applying
- **Backward Compatible**: Works with legacy configuration file names

## Supported Languages

| Language | Build Tool | Manifest Files |
|----------|-----------|----------------|
| Go | Go Modules |…
