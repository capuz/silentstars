---
repo: "paperzilla-ai/pz"
name: "pz"
description: "A command-line tool for Paperzilla,. Browse your curated research feed, manage projects, and stay on top of new papers"
readmeQualityOk: true
url: "https://github.com/paperzilla-ai/pz"
homepage: "https://paperzilla.ai"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["academic-paper", "research-paper", "research-tools", "science"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-02-13T16:13:02Z"
lastCommitAt: "2026-10-26T09:17:07Z"
lastReleaseAt: "2026-08-06T17:44:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 27
maintainers: ["pors"]
openGraphImageUrl: "https://opengraph.githubassets.com/f402f162f4065a80dc0cc85c1d48d0d4f53b35c92d5f5ba528b79b7bcf15a41d/paperzilla-ai/pz"
---

# Paperzilla CLI

A command-line tool for [Paperzilla](https://paperzilla.ai), an AI-powered scientific paper discovery platform. Read canonical papers, browse project recommendations, manage projects, and stay on top of new papers from the terminal.

New to `pz`? Start here: [docs.paperzilla.ai/guides/cli-getting-started](https://docs.paperzilla.ai/guides/cli-getting-started)

## Install

### macOS

Requires macOS 12 Monterey or later.

```bash
brew install paperzilla-ai/tap/pz
```

Homebrew 6.0 and later requires explicit trust for non-official taps. If Homebrew reports `Refusing to load formula paperzilla-ai/tap/pz from untrusted tap paperzilla-ai/tap`, trust only the Paperzilla formula and retry:

```bash
brew trust --formula paperzilla-ai/tap/pz
brew install paperzilla-ai/tap/pz
```

See [Homebrew's tap trust documentation](https://docs.brew.sh/Tap-Trust). Do not disable tap trust globally.

### Windows

Via [Scoop](https://scoop.sh):

```bash
scoop bucket add paperzilla-ai https://github.com/paperzilla-ai/scoop-bucket
scoop install pz
```

### Linux

Requires Linux kernel 3.2 or later.

Download the latest binary from [GitHub…
