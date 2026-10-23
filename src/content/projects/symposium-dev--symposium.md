---
repo: "symposium-dev/symposium"
name: "symposium"
description: "AI the Rust Way"
readmeQualityOk: true
url: "https://github.com/symposium-dev/symposium"
homepage: "https://symposium.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 401
forks: 39
openIssues: 41
closedIssues: 49
watchers: 4
contributors: 22
recentReleases: 0
createdAt: "2025-08-29T18:15:01Z"
lastCommitAt: "2026-10-23T12:04:31Z"
lastReleaseAt: "2025-12-20T10:36:38Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 88
undervaluedScore: 35
maintainers: ["gmemuriuki", "fnzko", "nikomatsakis"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd585de9fd4122711c7aa1a21ace5c0660c573936a2d979d3e9e30d79e809046/symposium-dev/symposium"
---

# Symposium

Symposium scans a Rust workspace, matches plugins against its dependency graph, and installs the corresponding **skills**, **hooks**, and **MCP servers** into the AI coding agents you use. Extensions are authored by crate authors and distributed through plugin sources, so an agent working in your project sees guidance specific to the crates that project depends on.

It ships as `cargo agents`, a Cargo subcommand. One agent-agnostic configuration is translated into the per-agent files each supported agent expects, so different people on the same project can use different agents.

## Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Quick start](#quick-start)
- [Concepts](#concepts)
- [How matching works](#how-matching-works)
- [Commands](#commands)
- [Configuration](#configuration)
- [Supported agents](#supported-agents)
- [For crate authors](#for-crate-authors)
- [Documentation](#documentation)
- [Community](#community)

## Requirements

- A Rust toolchain with `cargo` on `PATH`. Symposium runs `cargo metadata` to read the dependency graph and `cargo install` to update itself.
- At least one [supported agent](#supported-agents) installed.
-…
