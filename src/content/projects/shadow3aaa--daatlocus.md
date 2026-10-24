---
repo: "shadow3aaa/DaatLocus"
name: "DaatLocus"
description: "An agent runtime."
readmeQualityOk: true
url: "https://github.com/shadow3aaa/DaatLocus"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["agent", "agent-framework", "ai", "ai-agent", "llm", "daat-locus"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-03-10T15:08:35Z"
lastCommitAt: "2026-10-24T08:07:37Z"
lastReleaseAt: "2026-09-19T08:36:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 56
maintainers: ["shadow3aaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5874ba144d03bec17b6ca70a5670468d2d4c81805c316ed791704547f9a154d/shadow3aaa/DaatLocus"
---

# Daat Locus

[简体中文](https://github.com/shadow3aaa/DaatLocus/blob/HEAD/README_zh-CN.md)

Daat Locus is an Actor system with one conversation interface:

```text
Actor = Agent core + installed App instances
```

The account Actor accepts requests and delegates to persistent Actors. Devices
share its conversation and model context, provide tools, and can take over its
worker. Ordinary Actors keep their own host. Follow Actor links to open work
conversations; no permanent sidebar, TUI, Workflow or Sleep framework is needed.

The WebUI supplies messages, attachments, queue guidance, compact activity and
results. Account/settings live in a floating menu, conversation search in the
opposite corner. Chinese and English are supported; language follows the browser
by default and can be selected in Appearance. Guest sharing and public tunnels
are removed; accounts run locally or connect devices through authenticated, end-to-end encrypted public relay channels.

## Run

Install Rust, Bun and wasm-pack:

```sh
rustup target add wasm32-unknown-unknown
bun scripts/build-webui.ts
cargo run -- serve
```

Build the shared WebUI/authentication WASM once, then Cargo embeds the dist with
zstd for the…
