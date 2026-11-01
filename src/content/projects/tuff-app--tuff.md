---
repo: "tuff-app/TUFF"
name: "TUFF"
description: "The local AI app built for the Mac. Run LLMs like Qwen, Gemma and GPT-OSS on Apple Silicon, including models far bigger than your Mac's memory, by streaming MoE experts from the SSD."
readmeQualityOk: true
url: "https://github.com/tuff-app/TUFF"
homepage: "https://tuff-app.github.io/"
language: "Swift"
languages: ["Swift"]
languagePcts: [90]
topics: ["gemma", "gpt-oss", "local-ai", "local-llm", "macos", "macos-app", "qwen", "apple-silicon", "llm", "llm-inference"]
stars: 69
forks: 6
openIssues: 2
closedIssues: 25
watchers: 1
contributors: 11
recentReleases: 10
createdAt: "2026-08-16T07:03:57Z"
lastCommitAt: "2026-11-01T22:58:21Z"
lastReleaseAt: "2026-09-01T00:35:36Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine", "community_hub"]
healthScore: 98
undervaluedScore: 42
maintainers: ["rexmhall09", "Osiriss664", "Aaqibhafeezkhan"]
openGraphImageUrl: "https://opengraph.githubassets.com/a785947092b6e43a66dc249fd1e9448670889f79ca56710699185c39feaa5a16/tuff-app/TUFF"
fundingLinks: ["GITHUB:https://github.com/rexmhall09"]
discussionCount: 24
---

The local AI app built for the Mac. Runs models far bigger than your Mac's memory.

TUFF runs language models on Apple Silicon Macs. The app is SwiftUI and the
engine is my own, written in Swift and Metal. It's open source, and nothing you
type leaves your Mac unless you turn on web search.

**Qwen3.8 Flash Next is a 111 GB model, and TUFF runs it on a 16 GB MacBook
Air.** TUFF keeps a mixture-of-experts model's experts on the SSD and reads
only the few each token needs. GPT-OSS 120B and MiniMax M2.7 run the same
way. On that Air, Flash Next writes about 1.7 tokens a second; smaller models
are much faster. The [benchmarks](https://tuff-app.github.io/benchmarks/)
show how each model runs on real Macs.

## Install

You need an Apple Silicon Mac on macOS 15 or newer.

1. Download the ZIP from the [latest release](https://github.com/tuff-app/TUFF/releases/latest),
   unzip it and move `TUFF.app` to Applications.
2. Open TUFF, go to **Models** and install one. Gemma 4 E2B is a quick first
   download.

TUFF isn't notarized, so the first time, Control-click the app and choose
Open. Or use Homebrew, which also adds the `tuff` command:

```sh
brew install --cask tuff-app/tap/tuff
```

If…
