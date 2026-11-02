---
repo: "m1sk9/Pythia"
name: "Pythia"
description: "A Discord bot that bridges your server and LLM APIs."
readmeQualityOk: true
url: "https://github.com/m1sk9/Pythia"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["discord-bot", "chatgpt", "claude", "llm-agents"]
stars: 8
forks: 0
openIssues: 18
closedIssues: 42
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2023-07-24T11:20:22Z"
lastCommitAt: "2026-11-02T17:56:34Z"
lastReleaseAt: "2023-08-11T21:17:10Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 77
undervaluedScore: 70
maintainers: ["renovate[bot]", "m1sk9", "m1sk9-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0747f404631f1e358563f8a31e55fa53780ffd762e70f37ae0f106b8683e33fb/m1sk9/Pythia"
fundingLinks: ["GITHUB:https://github.com/m1sk9", "GITHUB:https://github.com/nanai10a"]
---

# Pythia

A Discord bot that bridges your server and LLM APIs.

> [!WARNING]
> **v2 and earlier are deprecated.**
> Pythia was formerly developed as **ichiyoAI** under the [Approvers](https://github.com/approvers) organization. Those releases (including `ghcr.io/approvers/ichiyo_ai`) may still work, but they are no longer under the control of [@m1sk9](https://github.com/m1sk9) and will not receive any fixes. Use them at your own risk.
> See [SECURITY.md](https://github.com/m1sk9/Pythia/blob/HEAD/.github/SECURITY.md) for the supported versions.

```sh
# Latest Release
docker pull ghcr.io/m1sk9/pythia:latest

# Minor Release (v3~)
docker pull ghcr.io/m1sk9/pythia:v3

# Specific Release (v3~)
docker pull ghcr.io/m1sk9/pythia:v3.0.0
```

[_API Support: requires Discord API v10_](https://discord.com/developers/docs/reference#api-versioning)

## Features

- **One thread is one conversation.** Mention Pythia in a channel and it opens a thread from your message and answers there. Keep talking in the thread without mentioning it; it reads the thread history every time, so it keeps no database and survives restarts.
- **Joins existing threads.** Mention Pythia in any thread and it answers…
