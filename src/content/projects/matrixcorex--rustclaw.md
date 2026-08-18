---
repo: "MatrixCoreX/RustClaw"
name: "RustClaw"
description: "RustClaw. The most suitable Claw products  Raspberry Pi / Macos / Ubuntu"
readmeQualityOk: true
url: "https://github.com/MatrixCoreX/RustClaw"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
stars: 21
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-02-28T07:20:40Z"
lastCommitAt: "2026-08-18T04:08:40Z"
lastReleaseAt: "2026-08-18T00:20:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["MatrixCoreX"]
openGraphImageUrl: "https://opengraph.githubassets.com/746821ba66332006d33d87633cfe662b2c005d6b535ca107a018c2df89d49fa2/MatrixCoreX/RustClaw"
---

# Agent Runtime

Chinese version: `README.zh-CN.md`

Agent Runtime is a self-hosted agent platform written in Rust and centered on the `clawd` daemon. It combines multi-channel chat access, task execution, tool and skill routing, memory, scheduling, a browser UI, and `user_key`-based identity in one deployable stack.

## Overview

Agent Runtime is built for daily use and administration from messaging apps or a browser instead of a terminal-first workflow.

Current repository highlights:

- multi-channel entry points: Telegram, WeChat, Feishu, Lark, WhatsApp Cloud, WhatsApp Web, and the browser UI through `webd`, with optional nginx/TLS
- task runtime and HTTP API in `clawd`
- shared skill dispatch with in-process builtins, external adapters, and runner subprocesses through `skill-runner`
- built-in, external, and runner-based skills for system, files, web, image, audio, video, music, NNI, crypto, KB, and automation tasks
- local browser UI in `UI/`, including Dashboard, Agent, Models, Tasks,
  Communication Setup, Account Binding, Tools/Skills, Skill Store, Memory,
  Logs, and Learning / Maintenance pages
- Raspberry Pi / small-screen desktop app in `pi_app/`
- shared Linux/macOS…
