---
repo: "peasant-labs/peasant"
name: "peasant"
description: "Local-first tools for recording, reviewing, and sharing AI coding sessions."
readmeQualityOk: true
url: "https://github.com/peasant-labs/peasant"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["ai", "developer-tools", "go", "transcripts"]
stars: 6
forks: 2
openIssues: 160
closedIssues: 218
watchers: 0
contributors: 12
recentReleases: 10
createdAt: "2026-08-03T09:54:35Z"
lastCommitAt: "2026-10-16T08:26:41Z"
lastReleaseAt: "2026-08-29T08:19:23Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 61
maintainers: ["dayvidpham", "vitorhw", "gurjas-s"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a021e0b2211c755f4ce19ac73b97126dbba8a253a9a2f706f1dd02783bd2e7a/peasant-labs/peasant"
---

# Peasant

Peasant is a CLI tool that ingests AI coding assistant session data (Claude Code, OpenCode, Codex) and provides
analytics via a local web dashboard and terminal UI. It normalizes session transcripts from
multiple providers into a unified schema, stores metrics in a local SQLite database, and serves
them through a web API.

## Installation

Peasant ships a single statically linked binary (no runtime dependencies) for
**linux** and **macOS** on **amd64** and **arm64**, and for **Windows** on
**amd64**. Every release attaches `.tar.gz` archives, a Windows `.zip` and a bare
Windows `.exe`, `.deb`/`.rpm` packages, and a `checksums.txt` to its
[GitHub Release](https://github.com/peasant-labs/peasant/releases).

| Platform | Quickest path | Guide |
|----------|---------------|-------|
| Ubuntu / Debian | `sudo apt install ./peasant_<ver>_linux_<arch>.deb` | [docs/install/ubuntu.md](https://github.com/peasant-labs/peasant/blob/HEAD/docs/install/ubuntu.md) |
| Fedora / CentOS | `sudo dnf install ./peasant_<ver>_linux_<arch>.rpm` | [GitHub Releases](https://github.com/peasant-labs/peasant/releases) |
| openSUSE | `sudo zypper install --allow-unsigned-rpm…
