---
repo: "skoll43/aider-chat-termux-wheels"
name: "aider-chat-termux-wheels"
description: "Pre-built Python wheels for aider-chat 0.86.2 on Termux (Android aarch64, Python 3.12)"
readmeQualityOk: true
url: "https://github.com/skoll43/aider-chat-termux-wheels"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 6
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-02-15T02:01:43Z"
lastCommitAt: "2026-08-29T10:22:25Z"
lastReleaseAt: "2026-08-25T03:12:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 21
maintainers: ["skoll43"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9c6de53cdb0919b3b82f78201de3951fef3435a1e80992e61eafdbdd9d59073/skoll43/aider-chat-termux-wheels"
---

# aider-chat Termux Wheels

Pre-built Android wheels for **aider-chat 0.86.3.dev53 (git main)** on Termux
(Android aarch64, **Python 3.14**).

> **Status: ✅ Working (August 2026)** — verified on-device and via a
> **fresh install test following these exact instructions**:
> `aider 0.86.3.dev53+g5dc9490bb`, Python 3.14.6, rustc 1.98.0.
> The bundle covers **every binary dependency** (20 wheels) — no compilation
> on the phone. See [UPDATE-2026.md](https://github.com/skoll43/aider-chat-termux-wheels/blob/HEAD/UPDATE-2026.md) for the full background.

## What you get (and where each piece comes from)

| Piece | Source | Compilation? |
|---|---|---|
| numpy, pillow, psutil, lxml, cryptography | Termux apt (`termux-main`) | no |
| scipy, tokenizers, tiktoken | Termux apt (**TUR** repo) | no |
| 20 binary/pure wheels (Rust, C, tree-sitter, aiohttp family, cffi, regex…) | this repo's release bundle | no |
| ~79 pure-python deps at aider's exact pins | PyPI (`pure-deps-pinned.txt`) | no |
| aider itself | git main (pure Python) | no |
| audioop-lts + 1-line shim | tiny C sdist (seconds) | yes, tiny |

## Prerequisites

```bash
pkg update && pkg upgrade -y
pkg install -y tur-repo && pkg…
