---
repo: "1tuz/impetus"
name: "impetus"
description: "Local-first all-in-one harness for coding agents with durable sessions and explicit policy control."
readmeQualityOk: true
url: "https://github.com/1tuz/impetus"
homepage: "https://1tuz.github.io/impetus/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 7
closedIssues: 178
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-08-28T10:05:04Z"
lastCommitAt: "2026-09-23T08:46:13Z"
lastReleaseAt: "2026-08-29T05:23:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["1tuz"]
openGraphImageUrl: "https://opengraph.githubassets.com/87a59643a5373fc8e36621336841c8a45791942a1c4e1c5299c861295b444649/1tuz/impetus"
---

# Impetus

> Local AI-agent **runtime / harness**: a small trusted kernel, replaceable modules around it, and thin clients that never own durable authority.

       alt="Impetus: a local runtime for durable engineering-agent sessions and explicit control">
</p>

## What is Impetus?

**Impetus** is a local-first agent harness for engineering work. Sessions, policy,
approvals, sandboxing, secrets-by-reference, and execution live in one userspace
process boundary (`impetusd`). CLI, TUI, Desktop, ACP, and Zap-style UIs connect
as clients — they render and request; they do not own SQLite, Keychain, or policy.

One sentence:

**Small trusted center → replaceable providers, tools, extensions, and clients around it.**

No root / sudo / password in normal mode. Data under `$HOME` (or `IMPETUS_DATA_DIR`).
Seatbelt is userspace `sandbox-exec`. Keychain reads are silent and fail-closed.

## Principles

1. **Durable sessions** — SQLite WAL event log survives client crash and reconnect.
2. **Policy before side effects** — every action carries `origin=user|agent` and
   passes `Policy → Approval → Sandbox → Capability → Executor`.
3. **Trusted kernel stays small** — events, artifacts, policy,…
