---
repo: "christiandoxa/prodex"
name: "prodex"
description: "Prodex is a multi-account, multi-provider Codex wrapper with auto-rotation, Super mode, Smart Context, and token saving for Codex CLI and Claude Code"
url: "https://github.com/christiandoxa/prodex"
homepage: "https://www.npmjs.com/package/@christiandoxa/prodex"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["agent", "ai", "claude", "codex", "gateway", "proxy", "load-balancer"]
stars: 27
forks: 3
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-03-17T05:17:49Z"
lastCommitAt: "2026-06-28T01:36:01Z"
lastReleaseAt: "2026-04-13T03:24:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 52
maintainers: ["christiandoxa", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1183949211/12db12cd-9a84-45fd-ac14-99a89d5379cb"
---

# prodex

`prodex` is a multi-account, multi-provider Codex wrapper with quota-aware profile routing.

Use multiple Codex accounts and supported provider backends from one command line. OpenAI/Codex profiles get quota-aware routing and can auto-rotate when multiple eligible profiles exist; provider adapters let `prodex s` launch the Codex front end against Gemini, Anthropic, Copilot, DeepSeek, and local OpenAI-compatible servers.

## Contents

- [Why prodex](#why-prodex)
- [Requirements](#requirements)
- [Supported providers](#supported-providers)
- [Installation](#installation)
- [Optional tools](#optional-tools)
- [Quick start](#quick-start)
- [Daily command: `prodex s`](#daily-command-prodex-s)
- [Commands](#commands)
- [Modes](#modes)
- [Profiles](#profiles)
- [Local model support](#local-model-support)
- [Utilities and diagnostics](#utilities-and-diagnostics)
- [Advanced behavior](#advanced-behavior)
- [Documentation](#documentation)
- [Support](#support)

## Why prodex

Use `prodex` if you want to:

- use multiple Codex accounts from one CLI
- rotate to another eligible account when quota runs out
- launch Codex/Super against non-OpenAI providers without changing front ends…
