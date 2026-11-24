---
repo: "amberframework/amber_cli"
name: "amber_cli"
description: "Standalone CLI for the Amber web framework (Crystal) — project generators, dev workflow, and an LSP server"
readmeQualityOk: true
url: "https://github.com/amberframework/amber_cli"
homepage: "https://amberframework.org"
language: "Crystal"
languages: ["Crystal"]
languagePcts: [89]
stars: 5
forks: 5
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 6
recentReleases: 3
createdAt: "2023-03-10T20:34:37Z"
lastCommitAt: "2026-11-24T01:56:16Z"
lastReleaseAt: "2026-11-06T19:04:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 73
undervaluedScore: 86
maintainers: ["crimson-knight"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7a9b6b7b49fe05291d87918ecfaed994d1872f94a7ee1e73c3e66503dc1ce29/amberframework/amber_cli"
---

# Amber CLI

Amber CLI is the standalone command-line companion for Amber V2. CLI `2.0.15`
creates the supported Amber `2.0.0-beta.14` ECR web application and includes
development, generator, database, and LSP tooling. Its agent tooling also
works in plain Crystal apps and shards; see
[Agent tooling](#agent-tooling-for-any-crystal-project).

Amber V2 is a beta. The release-gated path is a web application on Apple
Silicon macOS, x86_64 Linux, or ARM64 Linux. Windows x86-64 passes the complete
generated-app smoke in CI, but has no release archive yet, and its `shard.lock`
checksums differ from those written on macOS and Linux. See
[Generator support](https://github.com/amberframework/amber_cli/blob/HEAD/docs/GENERATOR_SUPPORT.md) before relying
on authentication, API-resource, or native output.

**New to Amber V2? Start with the [onboarding guide](https://github.com/amberframework/amber_cli/blob/HEAD/docs/ONBOARDING.md).** It goes from a bare machine to an app with verified dependencies and the rules active.

## Install

Prerequisites: Homebrew 7 or newer and Git. The formula installs Crystal,
Minecart, and the native libraries used by the default web app.
