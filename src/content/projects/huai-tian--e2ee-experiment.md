---
repo: "Huai-Tian/E2EE-Experiment"
name: "E2EE-Experiment"
description: "One Rust binary, zero persistence: E2EE conversations with post-quantum Noise + ML-KEM that are never written to disk."
readmeQualityOk: true
url: "https://github.com/Huai-Tian/E2EE-Experiment"
homepage: "https://t.me/HuaiTiann"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["cli", "cryptography", "e2ee", "encrypted-file-transfer", "encryption", "ephemeral", "ml-kem", "nat-traversal", "noise-protocol", "p2p"]
stars: 85
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 4
createdAt: "2026-09-17T15:03:13Z"
lastCommitAt: "2026-11-02T11:36:32Z"
lastReleaseAt: "2026-11-01T14:47:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 34
maintainers: ["Huai-Tian"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4aec3433984baa809f5c5f92ebfc104e26b4ab25cefafa2abf38ab1913f782b/Huai-Tian/E2EE-Experiment"
---

# E2EE-Experiment
[简体中文](https://github.com/Huai-Tian/E2EE-Experiment/blob/HEAD/README_ZH.md) | English | [AI collaboration doc](https://github.com/Huai-Tian/E2EE-Experiment/blob/HEAD/README_AGENT.md)

> One binary. It listens like a person, speaks like a person, and forgets like
> a person. It can also pull up a table — every rule of group chat is
> translated from the rules of a physical conversation.

**E2EE-Experiment** takes a single metaphor literally: *the executable is a person.*
No server, no accounts, no database — just a program that can hold up its end of a
private conversation, then remember nothing.

> **Using an AI assistant (Copilot / Claude / GPT ...) to develop this project?**
> Read [README_AGENT.md](https://github.com/Huai-Tian/E2EE-Experiment/blob/HEAD/README_AGENT.md) first — it is written specifically for AI
> and carries the project's design invariants and hard red lines. Skipping it and
> editing code directly is very likely to break the zero-persistence core.

## The idea

| A person                              | This program                                                   |…
