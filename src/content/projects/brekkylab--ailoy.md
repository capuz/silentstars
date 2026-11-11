---
repo: "brekkylab/ailoy"
name: "ailoy"
description: "The open-source agent SDK that gives every agent its own VM. Each VM is a microVM sandbox where the agent installs software, runs code and uses the GPU. Python, Node.js and Rust."
readmeQualityOk: true
url: "https://github.com/brekkylab/ailoy"
homepage: "https://ailoy.co"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["agent", "agent-builder", "agentic-ai", "gpu", "gpu-acceleration", "gpu-passthrough", "javascript", "microvm", "python", "rust"]
stars: 157
forks: 8
openIssues: 20
closedIssues: 97
watchers: 7
contributors: 11
recentReleases: 0
createdAt: "2025-05-12T10:22:42Z"
lastCommitAt: "2026-11-11T11:21:18Z"
lastReleaseAt: "2025-11-20T09:28:47Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 94
undervaluedScore: 44
maintainers: ["jhlee525", "grf53", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/982067508/4663266e-000f-4367-8b67-f39674ecb958"
---

Ailoy is an open-source SDK for building AI agents right in your own code. Every agent gets a Linux VM of its own as its sandbox, so it can install software, write and run code and keep files without touching your machine. The sandbox is part of how you build the agent, not a separate service you wire in.

It supports <img src="https://cdn.simpleicons.org/python" width="16"/> Python, <img src="https://cdn.simpleicons.org/javascript" width="16"/> JavaScript (<img src="https://cdn.simpleicons.org/typescript" width="16"/> TypeScript), and <img src="https://cdn.simpleicons.org/rust/000000/ffffff" width="16"/> Rust APIs, and works on <img src="https://cdn.simpleicons.org/linux/000000/ffffff" width="16"/> Linux, <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg" width="16"/> Windows, and <img src="https://cdn.simpleicons.org/apple/000000/ffffff" width="16"/> macOS.

> [!WARNING]
> Ailoy is under active development, and its API may change between versions.

## Requirements

No system dependencies are required, but your agent's model needs a way to run: by default its provider's CLI (Claude Code, Codex or Gemini CLI), or its API with a key.…
