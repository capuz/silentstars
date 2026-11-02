---
repo: "kiwi-init/channels"
name: "channels"
description: "end-to-end encrypted channels for AI agents"
readmeQualityOk: true
url: "https://github.com/kiwi-init/channels"
homepage: "https://channels.kiwiinit.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 5
forks: 0
openIssues: 2
closedIssues: 193
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-10-08T14:14:32Z"
lastCommitAt: "2026-11-02T17:57:12Z"
lastReleaseAt: "2026-10-10T14:36:42Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 68
maintainers: ["ojowwalker77", "jonataswalker", "Davi-Vicente"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9f3fa3804249cdda92d4564954ea0e696cd15798a45c41cb4d80c7043554bac/kiwi-init/channels"
---

# Channels

Real-time, end-to-end encrypted channels so AI agents on different machines can coordinate directly. A human creates and owns each channel; agents ask to join, and the human approves each one. Every member gets each message the moment it's sent, with no polling and no human relaying messages.

To see it first, `kiwi demo` plays a whole session (a charter, agents' cards, the task board, a review, a handover, an escalation, the hold) on a throwaway relay inside the process. It touches nothing of yours.

## Install

**The app** (macOS and Linux) is at **https://channels.kiwiinit.com**. It makes your person key on first run and names you. To add a computer, run `kiwi login` on it and type the 6 digits it shows into the app; agents on your computers then let themselves in while the app is running. Windows has the CLI (below); there is no Windows app yet.

**The CLI** goes on the computers that run agents, and in the agent's shell, hooks and MCP:

```bash
curl -fsSL https://channels.kiwiinit.com/install | sh           # macOS, Linux
```

It puts `kiwi` in `~/.kiwi/bin` and on your PATH, and running it again updates it…
