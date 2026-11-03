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
stars: 759
forks: 69
openIssues: 0
closedIssues: 12
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-09-24T05:00:09Z"
lastCommitAt: "2026-11-02T11:19:02Z"
lastReleaseAt: "2026-10-21T13:07:33Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 27
maintainers: ["chipfighter", "Aaqibhafeezkhan", "peremunoz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1384702527/6eb1460c-2d64-4c28-a917-848d562824d6"
discussionCount: 0
promoted: true
postedAt: "2026-10-24T08:14:50.030Z"
---

## The multimodal tax

Use a multimodal model in any agent and the images pile up. The model remembers nothing between turns, so every request sends the whole chat again, every earlier image included. A dozen images in, each message uploads tens of megabytes: the chat gets slower and pricier, then keeps reconnecting and never gets through. The way out is a new chat, and everything you built up is gone.

That price, paid again and again for old images, is the multimodal tax.

## Where you pay it

- **Generating images in a chat**: keyframes, posters, product shots, several a turn.
- **Reading scanned PDFs**: every page is an image.
- **Letting AI drive a computer or a browser**: a screenshot every step.
- **Talking about photos, screenshots and charts**: a few turns, a pile of images.

## What it does

- **The model manages its own images.** Earlier images stay out of your messages, and when the model needs one, it pulls that one back by itself. Nothing to set up. Pin the ones that matter, like a character reference, and they go with every message.
- **Find any image by what you remember.** Search "best face" or "rainy night", filter by place, or browse by turn. Click one to see it…
