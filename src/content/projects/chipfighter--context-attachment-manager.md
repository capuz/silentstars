---
repo: "chipfighter/context-attachment-manager"
name: "context-attachment-manager"
description: "A local plugin for image-heavy chats in Codex, Claude Code and other agents: earlier images stop going out with every message, and the model fetches the one it needs by its ID, also after compaction."
readmeQualityOk: true
url: "https://github.com/chipfighter/context-attachment-manager"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["codex", "codex-plugin", "context-management", "developer-tools", "mcp", "claude-code", "claude-code-plugin", "image-generation", "ai-agents", "multimodal"]
stars: 789
forks: 68
openIssues: 0
closedIssues: 12
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-09-24T05:00:09Z"
lastCommitAt: "2026-11-06T15:09:02Z"
lastReleaseAt: "2026-10-21T13:07:33Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 26
maintainers: ["chipfighter", "Aaqibhafeezkhan", "peremunoz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1384702527/6eb1460c-2d64-4c28-a917-848d562824d6"
discussionCount: 0
promoted: true
postedAt: "2026-10-24T08:14:50.030Z"
---

## What it does

An agent normally sends every earlier image again with each message, so a long chat with many images gets slow and can stop going through. This plugin numbers each image (`IMG-001`, `IMG-002`, …) and sends earlier ones as short placeholders instead:

- **The model fetches what it needs**: when it has to look at an earlier image again, it gets the original back by its ID.
- **It can tell images apart**: the model notes one line on what each image shows, plus your comments on it. These stay in the placeholders, also after the chat is compacted.
- **Nothing is deleted**: your original images and chat history stay as they are.

It is on by default; you do not need to open the panel. Typical uses: image and video creation, scanned documents, computer and browser use.

## Install

Send this to your agent. It identifies its platform and installs the right setup:

```text
Install Context Attachment Manager for me, following https://github.com/chipfighter/context-attachment-manager/blob/main/INSTALL.md
```

Then restart the agent (in Claude Desktop, start a new Code session). See [supported agents](#works-with) and [installation, updates and…
