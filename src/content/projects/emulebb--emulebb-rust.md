---
repo: "emulebb/emulebb-rust"
name: "emulebb-rust"
description: "Active eD2K/Kad Rust client. Nightly beta builds are current; Beta 3 is expected after a few more weeks of implementation and stabilization."
readmeQualityOk: true
url: "https://github.com/emulebb/emulebb-rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["beta", "ed2k", "emulebb", "kad", "p2p", "rust"]
stars: 10
forks: 0
openIssues: 36
closedIssues: 99
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-09T17:23:21Z"
lastCommitAt: "2026-11-05T08:05:29Z"
lastReleaseAt: "2026-10-26T11:49:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 94
undervaluedScore: 54
maintainers: ["dependabot[bot]", "itlezy"]
openGraphImageUrl: "https://opengraph.githubassets.com/678300a48d719f7e2a56e3924b5a8cf3c65505f18994cf99ff3617fdeeb90a80/emulebb/emulebb-rust"
---

# eMuleBB Rust

**eMuleBB Rust** (`emulebb-rust`) is the forward eD2K/Kad client in the eMuleBB
organization. **Status: Active beta.** CI-gated nightly builds are the current
public testing lane. Repeatedly tested on live eD2K/Kad networks. Beta 3 is
expected after a few more weeks of implementation and stabilization.

It runs as a headless daemon with an embedded browser operations console and a
Rust-forward `/api/v1` contract. Durable runtime metadata lives in one SQLite
database; bootstrap configuration, retained logs, and protocol bootstrap files
remain separate profile artifacts.

## Get eMuleBB Rust

**Download the current nightly beta:** open the
[GitHub Releases page](https://github.com/emulebb/emulebb-rust/releases) and
choose the newest dated nightly prerelease for Windows, Linux, or macOS. A
nightly is published only after the exact `main` commit passes the required CI
checks. Nightlies are unsigned and may be unstable.

See [Nightly beta builds](#nightly-beta-builds) for platform packages,
container tags, versioning, retention, and generated changelogs.

## First Launch

1. Install or extract the package for your platform, then run `emulebb-rust`
   (`emulebb-rust.exe`…
