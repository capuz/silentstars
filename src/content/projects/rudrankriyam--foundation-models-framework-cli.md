---
repo: "rudrankriyam/Foundation-Models-Framework-CLI"
name: "Foundation-Models-Framework-CLI"
description: "Command-line tool for Apple's Foundation Models framework."
url: "https://github.com/rudrankriyam/Foundation-Models-Framework-CLI"
homepage: "https://github.com/rudrankriyam/Foundation-Models-Framework-CLI"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["apple-intelligence", "cli", "developer-tools", "foundation-models", "llm", "macos", "swift", "swift-package"]
stars: 52
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-04-11T09:28:15Z"
lastCommitAt: "2026-07-03T12:22:29Z"
lastReleaseAt: "2026-04-11T11:40:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 82
undervaluedScore: 32
maintainers: ["rudrankriyam", "mikedoise"]
openGraphImageUrl: "https://opengraph.githubassets.com/3097fa75b23057758d01258e72500f7691a0beefa1e304e7a4617efdf410be18/rudrankriyam/Foundation-Models-Framework-CLI"
fundingLinks: ["GITHUB:https://github.com/rudrankriyam"]
---

# Foundation Models Framework CLI

`afm` is a Swift command-line tool for working with Apple's Foundation Models framework from the terminal.

Use it to check runtime availability, try prompts, stream responses, count tokens, run structured-output flows, validate tools, export transcripts, and serve local chat-compatible endpoints for agents and automation.

The CLI is a standalone package. It depends on [FoundationModelsKit](https://github.com/rryam/FoundationModelsKit) for the core Foundation Models helpers, while the server runtime (`AFMServer`) now lives in this repo alongside the `afm` developer tool.

## Requirements

- macOS 26+
- Swift 6.2+
- Xcode 26.6 or Xcode 27
- Apple Silicon with Apple Intelligence for live on-device model execution
- OS 27 and the right entitlement state for Private Cloud Compute checks

File-based workflows, dry runs, schema inspection, token estimates, tool validation, and server request validation are useful even when live model execution is unavailable.

## Build

```bash
git clone https://github.com/rudrankriyam/Foundation-Models-Framework-CLI.git
cd Foundation-Models-Framework-CLI
swift build -c release --product afm
.build/release/afm --help…
