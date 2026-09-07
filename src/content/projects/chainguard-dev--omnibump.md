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
stars: 15
forks: 10
openIssues: 3
closedIssues: 2
watchers: 3
contributors: 77
recentReleases: 0
createdAt: "2026-02-12T17:41:55Z"
lastCommitAt: "2026-09-07T08:35:58Z"
lastReleaseAt: "2026-03-10T18:32:45Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 84
undervaluedScore: 48
maintainers: ["dependabot[bot]", "dnegreira", "AdamIsrael"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b10cc1b330795ec5042b35a68001775f8a8ab224cd1daaa268c44920a8eaf38/chainguard-dev/omnibump"
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
