---
repo: "EmilLindfors/a2a-rs"
name: "a2a-rs"
description: "Agent2Agent in Rust"
readmeQualityOk: true
url: "https://github.com/EmilLindfors/a2a-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 87
forks: 16
openIssues: 0
closedIssues: 8
watchers: 4
contributors: 3
recentReleases: 4
createdAt: "2025-04-09T19:48:26Z"
lastCommitAt: "2026-09-02T08:03:26Z"
lastReleaseAt: "2026-06-05T06:17:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 54
maintainers: ["EmilLindfors", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/43b0ff38d567ea8c656cccbb8aa229342b2953e4e6e56846a59ba9a89e0bba53/EmilLindfors/a2a-rs"
---

# a2a-rs

A Rust implementation of the [Agent-to-Agent (A2A) Protocol](https://google.github.io/A2A/) v1.0.0. Provides a modular framework for building agents that communicate over ConnectRPC, following hexagonal architecture principles.

## Overview

The workspace is organized into several crates:

| Directory | Crate | Description |
|---|---|---|
| [a2a-rs](https://github.com/EmilLindfors/a2a-rs/blob/HEAD/a2a-rs/) | `a2a-rs` | Core protocol library — types, traits, transports, storage |
| [a2a-ap2](https://github.com/EmilLindfors/a2a-rs/blob/HEAD/a2a-ap2/) | `a2a-ap2` | Agent Payments Protocol (AP2) extension |
| [a2a-mcp](https://github.com/EmilLindfors/a2a-rs/blob/HEAD/a2a-mcp/) | `a2a-mcp` | Bidirectional A2A ↔ MCP bridge (Model Context Protocol) |
| [a2a-llm](https://github.com/EmilLindfors/a2a-rs/blob/HEAD/a2a-llm/) | `a2a-llm` | Provider-neutral LLM vocabulary and providers (OpenAI-compatible, Gemini) |
| [a2a-client](https://github.com/EmilLindfors/a2a-rs/blob/HEAD/a2a-client/) | `a2a-web-client` | Web client library for building agent frontends |
| [a2a-cli](https://github.com/EmilLindfors/a2a-rs/blob/HEAD/a2a-cli/) | `a2acli` | Command-line client — `card`, `send`,…
