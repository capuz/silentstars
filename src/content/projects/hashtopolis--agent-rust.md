---
repo: "hashtopolis/agent-rust"
name: "agent-rust"
description: "Rust Implementation of the Hashtopolis Agent"
readmeQualityOk: true
url: "https://github.com/hashtopolis/agent-rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 1
closedIssues: 14
watchers: 2
contributors: 7
recentReleases: 4
createdAt: "2026-07-20T05:49:57Z"
lastCommitAt: "2026-11-04T08:04:32Z"
lastReleaseAt: "2026-10-22T13:17:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 55
maintainers: ["four-random-common-words", "s3inlc", "pwrbob"]
openGraphImageUrl: "https://opengraph.githubassets.com/20e83549641cdeb8236d95d249085d1c36174a8b74a029050bc25f0ba5db25a7/hashtopolis/agent-rust"
---

# Hashtopolis Agent (Rust)

A Hashtopolis agent written in Rust.

## Prerequisites

- Rust (edition 2024) and a C compiler. `ring`
  (pulled in by rustls) compiles C sources, so you need `cc`/`clang` on the
  build host.
- hashcat itself is provisioned by the server, you do not install it yourself.
  The exception is macOS, where the official hashcat archive ships no
  `hashcat.osx`, so you point the agent at a local hashcat (see Configure).

## Build

```sh
cargo build --release
```

The binary lands at `target/release/htp-agent`.

## Release

A full release bundle is `dist/rust-agent.zip`: the three platform binaries
(linux-musl, windows-msvc, macos-aarch64) plus a `manifest.json` and the
`run.sh` / `run.bat` launchers. This is the artifact the backend serves as the
`rust` agent type.

**Via CI (the normal path).** Push a `v*` tag:

```sh
git tag v0.1.0
git push origin v0.1.0
```

`release.yml` builds each target natively on its own runner, packages them, and
attaches `rust-agent.zip` to the GitHub release. You can also trigger the
workflow manually, which builds the zip without attaching it anywhere.

## Run

```sh
./htp-agent
```

The agent reads two JSON files side by side:…
