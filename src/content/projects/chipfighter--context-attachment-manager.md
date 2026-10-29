---
repo: "chipfighter/context-attachment-manager"
name: "context-attachment-manager"
description: "Long image chats in Codex and Claude, without the lag. The model manages its own images, pulling back only what it needs, and any image you made before is one search away: just describe what you remember."
readmeQualityOk: true
url: "https://github.com/chipfighter/context-attachment-manager"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["chatgpt", "codex", "codex-plugin", "context-management", "developer-tools", "images", "mcp", "model-context-protocol", "openai", "openai-codex"]
stars: 559
forks: 64
openIssues: 4
closedIssues: 8
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-09-24T05:00:09Z"
lastCommitAt: "2026-10-29T07:12:18Z"
lastReleaseAt: "2026-10-21T13:07:33Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 93
undervaluedScore: 26
maintainers: ["chipfighter", "lin-coco", "peremunoz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1384702527/6eb1460c-2d64-4c28-a917-848d562824d6"
promoted: true
postedAt: "2026-10-24T08:14:50.030Z"
---

## Why I made this

I was iterating on images with GPT in Codex. After a dozen or so, the chat started failing: it kept reconnecting and never got through. Every message was sending every image in the conversation again, about 44 MB each time. The only way out was a new chat, and with it, losing everything we had built up.

So I made a panel that keeps the conversation and drops the weight.

## What it does

- **The model manages its own images.** Earlier images stay out of your messages, and when the model needs one, it pulls that one back by itself. Nothing to set up. Pin the ones that matter, like a character reference, and they go with every message.
- **Find any image by what you remember.** Search "best face" or "rainy night", filter by place, or browse by turn. Click one to see it full size.
- **It remembers every image.** The model quietly notes what each image shows and what you said about it ("too dark", "best face"). Even far into a long chat, or after the chat is compacted, it picks the right one.
- **Your chat stays light.** No more slowdowns or endless reconnecting. In a 15-image task, a request that carried 24.9 MB went out at 212 KB.

## How to use

- **Codex**:…
