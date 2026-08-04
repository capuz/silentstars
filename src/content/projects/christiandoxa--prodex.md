---
repo: "christiandoxa/prodex"
name: "prodex"
description: "Prodex is a multi-account, multi-provider Codex wrapper with auto-rotation, Super mode, Smart Context, and token saving for Codex CLI and Claude Code"
readmeQualityOk: true
url: "https://github.com/christiandoxa/prodex"
homepage: "https://github.com/christiandoxa/prodex/releases"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["agent", "ai", "claude", "codex", "gateway", "proxy", "load-balancer"]
stars: 41
forks: 5
openIssues: 0
closedIssues: 15
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-03-17T05:17:49Z"
lastCommitAt: "2026-08-04T06:08:51Z"
lastReleaseAt: "2026-07-17T15:41:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 48
maintainers: ["christiandoxa", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1183949211/12db12cd-9a84-45fd-ac14-99a89d5379cb?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260804%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260804T061331Z&X-Amz-Expires=300&X-Amz-Signature=70c20ea5ccbcf531801894d0dda1ebbf8a481d80d05394551d20e8e127893c8a&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTgyNDMxMSwibmJmIjoxNzg1ODI0MDExLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.AQBSMLu9pw_pFeo6EpVIMWbK15q0lnsDfelFnO80_xY"
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
- rotate to another eligible account when quota runs out
- launch Codex/Super against…
