---
repo: "manasight/manasight-parser"
name: "manasight-parser"
description: "MTG Arena log file parser — Rust library crate"
url: "https://github.com/manasight/manasight-parser"
homepage: "https://manasight.gg"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["deck-tracker", "log-parser", "magic-the-gathering", "mtg-arena", "mtga", "rust"]
stars: 10
forks: 2
openIssues: 2
closedIssues: 47
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-02-25T05:36:01Z"
lastCommitAt: "2026-06-30T06:49:57Z"
lastReleaseAt: "2026-06-19T20:00:20Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 64
maintainers: ["timc-enthrall", "dependabot[bot]", "JoyfulBump"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b7c877de15df091758cfe864b0acf43022b8005159854b35641cca6a46ebe20/manasight/manasight-parser"
---

> **This project is in active development.** APIs may change without notice.

# manasight-parser

**manasight-parser** is the log parsing engine behind [Manasight](https://manasight.gg), an MTG Arena companion app.

MTG Arena log file parser — a Rust library crate that reads Arena's `Player.log` and emits typed game events. It runs **natively** — tailing a live log through an async event bus — or compiles to **WebAssembly** to parse a whole log in the browser or in Node.

## Installation

```sh
cargo add manasight-parser
```

Or in `Cargo.toml`:

```toml
[dependencies]
manasight-parser = "0.6"
```

Requires Rust 1.93.0 or later.

## Architecture

```text
Player.log → File Tailer → Entry Buffer → Router → Parsers → Event Bus
```

- **`log`** — file discovery, polling tailer, entry accumulation, timestamps
- **`router`** — dispatches raw entries to the correct category parser
- **`parsers`** — one sub-module per event category
- **`events`** — public event type enums/structs (the parser's output contract)
- **`event_bus`** — `tokio::broadcast` channel for fan-out to subscribers
- **`stream`** — public entry point (`MtgaEventStream`)
- **`sanitize`** — privacy scrubber for redacting…
