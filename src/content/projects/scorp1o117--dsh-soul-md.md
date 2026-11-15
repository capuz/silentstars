---
repo: "Scorp1o117/dsh-soul-md"
name: "dsh-soul-md"
description: "Soul.md persona for DeepSeek Harness | DeepSeek Harness persona card plugin"
originalDescription: "Soul.md persona for DeepSeek Harness | DeepSeek Harness 人设卡插件"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Scorp1o117/dsh-soul-md"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["dsh-plugin", "deepseek-harness"]
stars: 43
forks: 6
openIssues: 0
closedIssues: 20
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-08-13T15:08:40Z"
lastCommitAt: "2026-11-15T11:25:42Z"
lastReleaseAt: "2026-08-21T03:34:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 41
maintainers: ["Scorp1o117", "Orange-CJ", "Luoyur0"]
openGraphImageUrl: "https://opengraph.githubassets.com/96c44178af924d3f622d8c2fabb99723b6bcedf263a10c0d260af451597a0f94/Scorp1o117/dsh-soul-md"
---

# DSH Soul / Persona

Simplified Chinese | [English](https://github.com/Scorp1o117/dsh-soul-md/blob/HEAD/README.en.md)

Adds switchable persona cards and file-based long-term memory to [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness). You can choose a persona for different workspaces or sessions, let the agent read and write memory as needed, and update the persona while using tools.

## Features

- **Persona cards**: Create and edit cards on the plugin page and set a default card. Choose a card for an individual session on the new session page or in the chat title bar, or hide the selector on the plugin page.
- **Workspace persona**: Set a default card for a workspace. Resolution order: session selection → workspace persona → default card → disabled.
- **File memory**: The agent can use `memory_read`, `memory_append`, and `memory_rewrite` to read and maintain memory, and `soul_read` and `soul_update` to read and update persona cards.
- **Layered memory**: By default, the always-resident `core.md` is kept separate from the topic-based `topics/*.md` files, which are read on demand. Supports `memory_search`, keyword recall, and post-compression compensation, and…
