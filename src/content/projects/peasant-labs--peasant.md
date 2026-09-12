---
repo: "peasant-labs/peasant"
name: "peasant"
description: "Local-first tools for recording, reviewing, and sharing AI coding sessions."
readmeQualityOk: true
url: "https://github.com/peasant-labs/peasant"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["ai", "developer-tools", "go", "transcripts"]
stars: 5
forks: 0
openIssues: 144
closedIssues: 116
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-08-03T09:54:35Z"
lastCommitAt: "2026-09-12T08:05:54Z"
lastReleaseAt: "2026-08-29T08:19:23Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 54
maintainers: ["dayvidpham", "PigeonZow", "matthew8573"]
openGraphImageUrl: "https://opengraph.githubassets.com/541052fd741e533fa2c06e0e56d34ac4d9cacbd57cd5f5dc1c18e4c1921753c0/peasant-labs/peasant"
---

# Peasant

Peasant is a CLI tool that ingests AI coding assistant session data (Claude Code, OpenCode, Codex) and provides
analytics via a local web dashboard and terminal UI. It normalizes session transcripts from
multiple providers into a unified schema, stores metrics in a local SQLite database, and serves
them through a web API.

## Installation

Peasant ships a single statically linked binary (no runtime dependencies) for
**linux** and **macOS** on **amd64** and **arm64**. Every release attaches
`.tar.gz` archives, `.deb`/`.rpm` packages, and a `checksums.txt` to its
[GitHub Release](https://github.com/peasant-labs/peasant/releases).

| Platform | Quickest path | Guide |
|----------|---------------|-------|
| Ubuntu / Debian | `sudo apt install ./peasant_<ver>_linux_<arch>.deb` | [docs/install/ubuntu.md](https://github.com/peasant-labs/peasant/blob/HEAD/docs/install/ubuntu.md) |
| Fedora / CentOS | `sudo dnf install ./peasant_<ver>_linux_<arch>.rpm` | [GitHub Releases](https://github.com/peasant-labs/peasant/releases) |
| openSUSE | `sudo zypper install --allow-unsigned-rpm ./peasant_<ver>_linux_<arch>.rpm` | [GitHub Releases](https://github.com/peasant-labs/peasant/releases)…
