---
repo: "futo-org/futo-notes"
name: "futo-notes"
description: "Notes app"
readmeQualityOk: true
url: "https://github.com/futo-org/futo-notes"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [35, 21]
stars: 49
forks: 0
openIssues: 25
closedIssues: 38
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2026-07-14T19:44:07Z"
lastCommitAt: "2026-10-26T21:00:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 32
maintainers: ["Ovaculos"]
openGraphImageUrl: "https://opengraph.githubassets.com/f23b26ba338cdc5e3691b75a86accc3d1ec658b0665f0e71b988f3fa8e27cc3e/futo-org/futo-notes"
---

# FUTO Notes

FUTO Notes is an offline-first markdown notes app with optional E2EE sync. The app is built to be simple, performant, and intelligent. Your notes app shouldn't get in the way of what you actually want to accomplish. FUTO Notes isn't a place to garden, it's a place to think and remember.

## Sync Server

The sync server lives in a separate repo:

<https://gitlab.futo.org/futo-notes/futo-notes-server>

## Command-line client (early preview)

`futo-notes`, a terminal client for one vault on a headless Linux machine, lives in
[apps/cli](https://github.com/futo-org/futo-notes/blob/HEAD/apps/cli/AGENTS.md); its behavior is specified in [docs/spec/cli.md](https://github.com/futo-org/futo-notes/blob/HEAD/docs/spec/cli.md).
It is an early preview for dogfooding, not a release: build it with `just build-cli-static`, or
download the binary from the manual `build:cli:linux` CI job. Do not point it at a vault the
desktop app has open: the two do not coordinate writes, so running both on one vault can lose edits.

## Development

New here? See [CONTRIBUTING.md](https://github.com/futo-org/futo-notes/blob/HEAD/CONTRIBUTING.md) for machine setup, then…
