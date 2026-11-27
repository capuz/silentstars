---
repo: "reliaburger/reliaburger"
name: "reliaburger"
description: "The Batteries-Included Container Orchestrator"
readmeQualityOk: true
url: "https://github.com/reliaburger/reliaburger"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
stars: 16
forks: 3
openIssues: 344
closedIssues: 740
watchers: 0
contributors: 5
recentReleases: 7
createdAt: "2026-03-04T20:50:48Z"
lastCommitAt: "2026-11-27T15:27:21Z"
lastReleaseAt: "2026-10-07T01:26:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 60
maintainers: ["seeker89"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c84d9e55c86d0b10769355ffa8ca95ece0982df9c25e72c075c0dddfd446cb2/reliaburger/reliaburger"
discussionCount: 0
---

# Reliaburger

**The container platform built for AI agents to run. From hosts to apps in minutes.**

The whole container platform in one binary, designed for AI agents to install,
operate, debug and improve. The platform team you need, in a box.

**Status:** 0.3.2 was released on 23 November 2026. Until 1.0.0, Reliaburger is good enough for home labs and dev clusters, not for production.

## Five minutes, zero to cluster

You'll need a Mac with Apple silicon, or Linux with QEMU and KVM, plus about
8 GiB of free memory and 15 GiB of disk. The one-line installer fetches signed
binaries, which you can check with `gh attestation verify`
([how](https://github.com/reliaburger/reliaburger/blob/HEAD/docs/releasing.md#build-provenance-attestations)). `--laptop` asks for
a development cluster on this computer. Without a flag the installer only
explains the choices, including clusters on Linux machines you already have
(`--install-only`, then the [Linux servers guide](https://github.com/reliaburger/reliaburger/blob/HEAD/docs/linux-servers.md)).
With Homebrew, from 0.2.7: `brew install reliaburger/tap/relish`, then
`relish setup --quickstart` (or `relish setup --ssh user@host,...`).
