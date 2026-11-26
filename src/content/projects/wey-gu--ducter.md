---
repo: "wey-gu/ducter"
name: "ducter"
description: "A personal AI for builders, on your own computers or servers. Talk to one partner from your phone, desk or chat app; it runs your AI agents (Claude Code, Codex, pi, DeepSeek Harness) side by side on the plans you already pay for, every task open to you, and you hear only what matters. It minds your day too. Open source, self-hosted."
readmeQualityOk: true
url: "https://github.com/wey-gu/ducter"
homepage: "https://ducter.ai"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [67, 26]
topics: ["agent-orchestration", "ai-agents", "ai-partner", "claude-code", "codex", "coding-agents", "ios", "local-first", "macos", "mcp"]
stars: 72
forks: 13
openIssues: 4
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-09T11:04:05Z"
lastCommitAt: "2026-11-26T22:30:54Z"
lastReleaseAt: "2026-11-10T09:09:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 40
maintainers: ["wey-gu"]
openGraphImageUrl: "https://opengraph.githubassets.com/f16b0d051e566d67b848391c66051fca75f078acb46c31ec44a109d49167b726/wey-gu/ducter"
---

A personal AI for builders, on your own computers or servers.<br>
  You talk to one partner. It hands the work to the AI agents you already pay for,<br>
  like Claude Code or Codex, and brings it back with how it was checked.<br>
  Free and open source.

> **Early preview.** Everything below runs today on a Mac and on a Linux server; the iPhone app is
> in public beta. Expect rough edges and breaking changes. See the [changelog](https://github.com/wey-gu/ducter/blob/HEAD/CHANGELOG.md).

**Install on a Mac** (Apple silicon) with one line, or see [every way to get it](#get-ducter):

```sh
curl -fsSL https://ducter.ai/install.sh | sh
```

## How it goes

| | |
|---|---|
| **1. You say it** | *"Fix the flaky compaction test in HawDB, and tell me when it's done."* Then three more things. |
| **2. It hands it off** | Each becomes a task on Claude Code or Codex, signed in as you, on its own branch, on your Mac or your server. While they work, you hear nothing. |
| **3. You decide** | *"Fixed: 50 of 50 runs pass, and so do the 412 workspace tests."* You read how it knows, and tap **Merge into main**. Nothing lands without you. |
