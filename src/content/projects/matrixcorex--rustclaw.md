---
repo: "MatrixCoreX/RustClaw"
name: "RustClaw"
description: "RustClaw. The most suitable Claw products  Raspberry Pi / Macos / Ubuntu"
readmeQualityOk: true
url: "https://github.com/MatrixCoreX/RustClaw"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 19
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-02-28T07:20:40Z"
lastCommitAt: "2026-07-16T05:58:54Z"
lastReleaseAt: "2026-06-21T03:10:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 49
maintainers: ["MatrixCoreX"]
openGraphImageUrl: "https://opengraph.githubassets.com/49d13f238515adcf0bb11d86cdf046db81e7eba59d5bd3be03ffe4ff98d01fd8/MatrixCoreX/RustClaw"
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

## Agent Loop Architecture

RustClaw's main natural-language path now uses a Codex / Claude style agent loop by default. The boundary layer binds the turn to identity and session state, builds structured boundary…
