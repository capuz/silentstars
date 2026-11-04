---
repo: "openclaw/gitcrawl"
name: "gitcrawl"
description: "Local-first GitHub issue and pull request crawler for maintainer triage"
readmeQualityOk: true
url: "https://github.com/openclaw/gitcrawl"
homepage: "https://gitcrawl.sh"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 135
forks: 42
openIssues: 0
closedIssues: 20
watchers: 1
contributors: 33
recentReleases: 0
createdAt: "2026-04-27T05:57:50Z"
lastCommitAt: "2026-11-04T11:28:25Z"
lastReleaseAt: "2026-05-14T11:30:39Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 36
maintainers: ["steipete", "vincentkoc", "hannesrudolph"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2a69f49a28161f28e30ad71e59027a67dd6c3b9a95b589721702478735a2b13/openclaw/gitcrawl"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# gitcrawl 🕷️ — Pull GitHub down to earth

`gitcrawl` mirrors GitHub issues and pull requests into local SQLite for maintainers and agents. It provides local search, related-thread clustering, JSON output, and a terminal interface without running a local HTTP service.

## Install

Homebrew is the smallest install on macOS and Linux:

```sh
brew install openclaw/tap/gitcrawl
```

Prebuilt archives for macOS, Linux, and Windows are available from [GitHub Releases](https://github.com/openclaw/gitcrawl/releases/latest). The [installation guide](https://github.com/openclaw/gitcrawl/blob/HEAD/docs/installation.md) also covers source builds and update checks; source builds require Go 1.27.2 or newer for CrawlKit v0.17.0 and select the patched Go 1.27.3 toolchain automatically. Binaries built with this toolchain require macOS 13 Ventura or newer. A [Docker source build](https://github.com/openclaw/gitcrawl/blob/HEAD/docs/docker.md) keeps its runtime state under one mounted directory.

Sync needs a GitHub token from `GITHUB_TOKEN` or `gh auth token`. Generating summaries and embeddings also needs `OPENAI_API_KEY`; semantic search and clustering use those stored embeddings, while ordinary…
