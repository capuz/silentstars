---
repo: "campanulamediuml/Akatosh"
name: "Akatosh"
description: "an ai personal agent"
originalDescription: "an ai personal agent"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/campanulamediuml/Akatosh"
language: "Go"
languages: ["Go"]
languagePcts: [50]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-14T08:04:52Z"
lastCommitAt: "2026-11-04T08:00:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 31
maintainers: ["campanulamediuml"]
openGraphImageUrl: "https://opengraph.githubassets.com/2aa96058b218152b75d05a7def34569df1ff03710f200282f820793bfaa95efe/campanulamediuml/Akatosh"
---

# Akatosh

> In *The Elder Scrolls*, Akatosh is the first of the Nine Divines and the Dragon God of Time: the passage, beginning, and end of time all lie within his dominion;
> in the ending of *Oblivion*, his avatar descends upon the Imperial City and drives Mehrunes Dagon back into Oblivion. This project borrows this imagery: conversation history can be replayed, rewritten, and forked, like creating a little 'Dragon Break' between different timelines.

Akatosh is a local multi-user LLM agent centered on the concept of 'timelines.' It treats every conversation as history that can be replayed, edited, and forked. CoT, body text, tool calls, and context compression are all fully persisted. You can modify a node or fork a new branch from any message, letting different reasoning paths evolve in parallel. Web search, a Python sandbox, document reading, and image generation are integrated via function calling. All data is stored by default in local SQLite and an attachments directory, which suits long-term use where you control your own data, context, and costs.

Go backend + Vue 3 frontend. The frontend build artifacts are embedded into a single executable that listens only on…
