---
repo: "MikkoParkkola/nab"
name: "nab"
description: "Token-lean web microfetch for LLM agents: any URL → clean markdown via CLI, MCP server, and Claude Code plugin. Real browser-cookie auth, passkeys, anti-bot reach, on-by-default prompt-injection defense, plus on-device multimodal ASR/OCR. A single Rust binary — not a browser."
readmeQualityOk: true
url: "https://github.com/MikkoParkkola/nab"
homepage: "https://crates.io/crates/nab"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["anti-bot", "cli", "cookies", "http3", "passkeys", "rust", "url-to-markdown", "ai-agents", "asr", "claude-code"]
stars: 8
forks: 0
openIssues: 3
closedIssues: 46
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-16T00:21:05Z"
lastCommitAt: "2026-07-20T06:34:24Z"
lastReleaseAt: "2026-03-23T19:21:53Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 55
maintainers: ["dependabot[bot]", "MikkoParkkola"]
openGraphImageUrl: "https://opengraph.githubassets.com/4dce224224c828aa2d7168e216a5eb7ca6472f3095f62bf47b55eb5b0103f735/MikkoParkkola/nab"
fundingLinks: ["GITHUB:https://github.com/MikkoParkkola"]
discussionCount: 0
---

# nab

Token-optimized web fetcher + multilingual ASR + URL watcher. MCP 2025-11-25 compliant. Rust. macOS arm64 first, cross-platform.

nab is a single Rust binary that does three things very well: it **fetches** any URL as clean markdown (with your real browser cookies and anti-bot evasion), it **analyzes** any audio or video file with on-device multilingual ASR and speaker diarization, and it **watches** any URL for changes and pushes notifications when content moves. Everything runs locally. There are no API keys to set up by default. The output is shaped for LLM context windows.

## Why nab

- **Token-lean by design.** nab returns only what an LLM actually needs — clean markdown, BM25-lite query-focused extraction, and structure-aware token budgets — cutting the token cost of web research instead of dumping raw HTML into your context window.
- **Multimodal, fully on-device.** Transcribe and diarize any audio or video (FluidAudio / Parakeet TDT v3 on the Apple Neural Engine — 131× realtime on a 2-hour clip, 25 EU languages, word-level timestamps, optional Qwen3-ASR for zh/ja/ko/vi) and OCR images via Apple Vision (15 languages, ~10–50 ms). No cloud, no API keys.
-…
