---
repo: "mschulkind-oss/vantage"
name: "vantage"
description: "A beautiful local Markdown viewer with live reload and Git awareness"
readmeQualityOk: true
url: "https://github.com/mschulkind-oss/vantage"
homepage: "https://vantageapp.dev"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [68, 27]
topics: ["developer-tools", "git", "live-reload", "markdown", "mermaid", "viewer"]
stars: 13
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-02-26T20:50:23Z"
lastCommitAt: "2026-09-19T01:12:40Z"
lastReleaseAt: "2026-04-23T04:07:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 56
maintainers: ["mschulkind", "dependabot[bot]", "edus44"]
openGraphImageUrl: "https://opengraph.githubassets.com/d81ea6703a777ccf30ac59ab75f82482a80713116beac87c8b71cb5a474087ce/mschulkind-oss/vantage"
---

# Vantage 🔭

**A beautiful local Markdown viewer with live reload and Git awareness.**

[Website](https://vantageapp.dev) · [GitHub](https://github.com/mschulkind-oss/vantage) · [Issues](https://github.com/mschulkind-oss/vantage/issues)

Vantage renders your Markdown files the way GitHub does — locally, instantly, with live reload as you edit. Point it at one directory or several, and browse your docs in a polished web UI with file tree navigation, Mermaid diagrams, commit history, and diffs.

Vantage ships as a single Go binary with an embedded React frontend — no runtime dependencies, no background services to babysit. Built for developers who write docs alongside code, and especially useful for reviewing LLM-generated Markdown output in real time.

> **Platform:** Linux and macOS are fully supported. Windows is not supported.

---

## Install

### go install

```bash
go install github.com/mschulkind-oss/vantage/cmd/vantage@latest
```

This installs a `vantage` binary to your `$GOBIN` (typically `~/go/bin`). Make sure it's on your `PATH`.

### Homebrew (recommended)

```bash
brew install mschulkind-oss/tap/vantage
```

### From source

```bash
git clone…
