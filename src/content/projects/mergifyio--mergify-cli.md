---
repo: "Mergifyio/mergify-cli"
name: "mergify-cli"
description: "Mergify CLI tool"
url: "https://github.com/Mergifyio/mergify-cli"
homepage: "https://mergify.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 28
forks: 10
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 15
recentReleases: 0
createdAt: "2021-05-17T07:36:22Z"
lastCommitAt: "2026-06-26T21:19:11Z"
lastReleaseAt: "2025-03-14T15:34:44Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 63
maintainers: ["JulianMaurin", "jd", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f98729bdd6aa39191a634fcf3aaf357ad6b1856371b0351a704dd4240cb3e96/Mergifyio/mergify-cli"
fundingLinks: ["GITHUB:https://github.com/Mergifyio", "CUSTOM:https://mergify.com"]
---

# Mergify CLI

Drive [Mergify](https://mergify.com) from your terminal and CI pipelines:
stacked pull requests, the merge queue, CI Insights, scheduled freezes, and
configuration — all from a single self-contained binary that reuses your
existing GitHub (`gh`) login.

```shell
mergify stack push          # turn your local commits into stacked PRs
mergify queue status        # inspect the merge queue
mergify ci junit-process report.xml   # upload test results to CI Insights
```

- **One static binary.** No runtime, no dependencies — drop it on a developer
  laptop or a CI runner and go.
- **Zero-config auth.** Picks up `gh auth token` automatically; override with
  env vars or flags when scripting.
- **Built for pipelines.** Logs to stderr, structured `--json` output on read
  commands, and stable [exit codes](#exit-codes) for scripts and runbooks.
- **Cross-platform.** Linux, macOS (x86_64 + aarch64), and Windows.

## Installation

### Homebrew (recommended for macOS)

```shell
brew install mergifyio/tap/mergify-cli
```

The fully-qualified name taps and installs in one step. Upgrade with
`brew upgrade mergify-cli` — not `mergify self-update`, which overwrites the
Homebrew-managed…
