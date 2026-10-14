---
repo: "justrach/harness"
name: "harness"
description: "Harness desktop app source prepared for public release"
readmeQualityOk: true
url: "https://github.com/justrach/harness"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
stars: 7
forks: 0
openIssues: 11
closedIssues: 59
watchers: 0
contributors: 29
recentReleases: 10
createdAt: "2026-09-24T01:16:00Z"
lastCommitAt: "2026-10-14T08:57:37Z"
lastReleaseAt: "2026-09-29T05:11:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 58
maintainers: ["justrach", "yxlyx"]
openGraphImageUrl: "https://opengraph.githubassets.com/d52c6f1cb5d576babc03747e28c7d4ea1fe16ef3bcacffe11f8c51a9debaba2a/justrach/harness"
---

Work locally, move between machines, and keep the conversation together.

  English · <a href="README.zh-CN.md">简体中文</a> ·

## The workspace

Harness brings **CodeGraff (graff)**, Claude Code, Codex, Cursor, Devin, Grok,
Hermes, Pi, OpenCode, Antigravity, and [Exo](https://github.com/exoharness/exo)
into one desktop app. Pick the agent and model for each conversation, keep
workspaces and sessions together, and review changes beside the chat. Files, a
browser, and terminals stay close at hand.

Exo is off by default. Harness reaches it through Exo's agent-cli adapter
(`./exo.sh --setup agent-cli`) via a built-in ACP bridge; once the adapter's
socket is up, turn Exo on in **Settings → Agents**.

Harness starts in local mode without an account. The desktop app uses Rust and
GPUI; its iOS companion is a SwiftUI viewport for synced sessions.

## Get started

Build from a checkout with the Rust version in
[`rust-toolchain.toml`](https://github.com/justrach/harness/blob/HEAD/rust-toolchain.toml):

| Platform | Run |
| --- | --- |
| macOS | `./scripts/run-macos-dev.sh` |
| Linux | `cargo build -p harness && ./target/debug/harness` |
| Windows | `cargo run --locked -p harness` |

The macOS…
