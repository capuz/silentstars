---
repo: "christiandoxa/prodex"
name: "prodex"
description: "Prodex is a multi-account, multi-provider Codex wrapper with auto-rotation, Super mode, Smart Context, and token saving for Codex CLI and Claude Code"
readmeQualityOk: true
url: "https://github.com/christiandoxa/prodex"
homepage: "https://github.com/christiandoxa/prodex/releases"
language: "Rust"
languages: ["Rust"]
languagePcts: [73]
topics: ["agent", "ai", "claude", "codex", "gateway", "proxy", "load-balancer"]
stars: 56
forks: 8
openIssues: 0
closedIssues: 21
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2026-03-17T05:17:49Z"
lastCommitAt: "2026-10-03T09:22:03Z"
lastReleaseAt: "2026-10-02T07:05:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 45
maintainers: ["christiandoxa"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1183949211/12db12cd-9a84-45fd-ac14-99a89d5379cb"
fundingLinks: ["GITHUB:https://github.com/christiandoxa", "CUSTOM:https://paypal.me/christiandoxa"]
---

# prodex

`prodex` is a multi-account, multi-provider Codex wrapper with quota-aware profile routing.

Use multiple Codex accounts and supported provider backends from one command line. OpenAI/Codex profiles get quota-aware routing and can auto-rotate when multiple eligible profiles exist; provider adapters let `prodex s` launch the Codex front end against Gemini, Anthropic, Copilot, Kiro, DeepSeek, and local OpenAI-compatible servers.

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
- [Sub-agents](https://github.com/christiandoxa/prodex/blob/HEAD/docs/sub-agents.md)
- [Harness modes](#harness-modes)
- [Profiles](#profiles)
- [Local model support](#local-model-support)
- [Utilities and diagnostics](#utilities-and-diagnostics)
- [Advanced behavior](#advanced-behavior)
- [Documentation](#documentation)
- [Support](#support)

## Why prodex

Use `prodex` if you want to:

- use multiple Codex accounts from one CLI
- rotate…
