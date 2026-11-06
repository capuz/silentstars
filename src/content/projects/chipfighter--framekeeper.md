---
repo: "chipfighter/framekeeper"
name: "framekeeper"
description: "Stop paying the multimodal tax. Your AI agent keeps every image it has seen but only sends the ones it needs: lighter chats, no endless reconnecting, no starting over. Works with Codex, Claude Code, Cline, Gemini CLI, OpenCode, WorkBuddy and more. Install once, forget it."
readmeQualityOk: true
url: "https://github.com/chipfighter/framekeeper"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["codex", "codex-plugin", "context-management", "developer-tools", "mcp", "token-optimization", "claude-code", "claude-code-plugin", "ai-image", "image-generation"]
stars: 789
forks: 69
openIssues: 0
closedIssues: 12
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-09-24T05:00:09Z"
lastCommitAt: "2026-11-03T15:00:01Z"
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

https://github.com/user-attachments/assets/aeb90ea2-6cb9-4f7a-9db7-8b4cd382430e

[简体中文视频](https://github.com/chipfighter/framekeeper/blob/HEAD/README_CN.md) · [日本語動画](https://github.com/chipfighter/framekeeper/blob/HEAD/README_JA.md)

## Images stay part of the task

An image can leave the current request without losing its place in the task. In Codex and Claude Code, FrameKeeper preserves the link between images, visual details and your feedback:

- **Find the right reference**: stable image IDs, visual descriptions and your feedback help the model identify an image discussed earlier.
- **Inspect the original**: when details matter, the model retrieves the original image on demand and looks again.
- **Continue after compaction**: the image index survives conversation compaction, so earlier originals remain identifiable and retrievable.

**Automatic by default. Keep working.** Use it for image and video creation, scanned documents, computer and browser use, or everyday visual chats. It works even if you never open the panel or pick images yourself.

## Install

Send this to your agent. It identifies its platform and installs the right setup:

```text
Install FrameKeeper for me,…
