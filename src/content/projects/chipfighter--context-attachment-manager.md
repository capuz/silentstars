---
repo: "chipfighter/context-attachment-manager"
name: "context-attachment-manager"
description: "Keep long, image-heavy Codex and Claude Code chats fast: earlier images become ID placeholders the model fetches back on demand, even after compaction. Local, cache-friendly, MIT."
readmeQualityOk: true
url: "https://github.com/chipfighter/context-attachment-manager"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["codex", "codex-plugin", "context-management", "developer-tools", "mcp", "claude-code", "claude-code-plugin", "image-generation", "ai-agents", "multimodal"]
stars: 814
forks: 76
openIssues: 0
closedIssues: 13
watchers: 1
contributors: 7
recentReleases: 10
createdAt: "2026-09-24T05:00:09Z"
lastCommitAt: "2026-11-22T10:57:52Z"
lastReleaseAt: "2026-10-21T13:07:33Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 26
maintainers: ["chipfighter", "IbukiFuko", "inhm112"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1384702527/6eb1460c-2d64-4c28-a917-848d562824d6"
discussionCount: 0
promoted: true
postedAt: "2026-10-24T08:14:50.030Z"
---

## Get started in three steps

**1. Install.** Send this to your agent. It identifies its platform and installs the right setup:

```text
Install Context Attachment Manager for me, following https://github.com/chipfighter/context-attachment-manager/blob/main/INSTALL.md
```

Then restart the agent (in Claude Desktop, start a new Code session). To do it by hand, see [installation, updates and uninstall](https://github.com/chipfighter/context-attachment-manager/blob/HEAD/INSTALL.md).

**2. Work as usual.** The plugin is on by default. Images from earlier turns go out as one-line placeholders; new images and the references you pin go out as they are. A placeholder looks like this:

```text
[Image IMG-004 omitted | shot-1.png | generated image | turn 2 | 505×505]
Features: place: Street | Qinghe | medium shot, umbrella, lanterns
For the original, call cam_view_image with "IMG-004".
```

**3. The model fetches by ID.** When it needs to look at an earlier image again, it fetches the original by its ID, also after compaction. Nothing is deleted, and your images and chat history stay on your computer.
