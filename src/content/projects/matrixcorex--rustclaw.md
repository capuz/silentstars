---
repo: "MatrixCoreX/RustClaw"
name: "RustClaw"
description: "RustClaw. The most suitable Claw products  Raspberry Pi / Macos / Ubuntu"
readmeQualityOk: true
url: "https://github.com/MatrixCoreX/RustClaw"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
stars: 20
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-02-28T07:20:40Z"
lastCommitAt: "2026-07-24T06:07:21Z"
lastReleaseAt: "2026-07-23T19:33:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 48
maintainers: ["MatrixCoreX"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6f47b2620486f4c5e3a372533a69682212f548a9231bcf1ce9ddc4451a84efb/MatrixCoreX/RustClaw"
---

# RustClaw

Chinese version: `README.zh-CN.md`

RustClaw is a local Rust agent runtime centered on `clawd`. It combines multi-channel chat access, task execution, tool and skill routing, memory, scheduling, browser UI, and `user_key` based identity into one deployable stack.

## Overview

RustClaw is built for daily use and administration from messaging apps or a browser instead of a terminal-first workflow.

Current repository highlights:

- multi-channel entry points: Telegram, WeChat, Feishu, Lark, WhatsApp Cloud, WhatsApp Web, browser UI, and optional `webd`
- task runtime and HTTP API in `clawd`
- shared skill dispatch with in-process builtins, external adapters, and runner subprocesses through `skill-runner`
- built-in, external, and runner-based skills for system, files, web, image, audio, video, music, crypto, KB, and automation tasks
- local browser UI in `UI/`, including a standalone NNI device-signing page
- Raspberry Pi / small-screen desktop app in `pi_app/`
- shared Linux/macOS runtime contracts, with fail-closed Bubblewrap and
  Seatbelt process isolation selected through a machine-configured backend

## Agent Loop Architecture

RustClaw's main natural-language path…
