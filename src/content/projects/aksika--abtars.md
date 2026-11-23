---
repo: "aksika/abtars"
name: "abtars"
description: "abTARS is a personal agent built around Pi harness: persistent memory with abmind, messaging connectivity, skills, scheduled task, self healing and multi agent collaboration"
readmeQualityOk: true
url: "https://github.com/aksika/abtars"
homepage: "https://aksika.github.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["agent-security", "agent-swarm", "agentic-ai", "ai-agents", "ai-assistant", "ai-framework", "ai-harness", "ai-tools", "abmind", "abtars"]
stars: 11
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-26T11:40:39Z"
lastCommitAt: "2026-11-23T10:21:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 47
maintainers: ["aksika"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e7813ba4ae6a6b0290e8fc5d5e34e7f36146f44cdab568283c7b6153d95b609/aksika/abtars"
---

# abTARS

abTARS is a personal agent built around [Pi](https://github.com/earendil-works/pi). It runs on your machine and connects Pi to chat and terminal interfaces, then adds tools, provider selection, scheduled work, memory integration, and process supervision.

## How it works

- **API route** — Pi's agent core runs the model and tool loop, and Pi's provider engine connects to API providers.
- **ACP route** — abTARS connects to a compatible agent CLI through ACP. This route does not require Pi.
- **Optional memory** — [abmind](https://github.com/aksika/abmind) is installed separately and discovered at runtime. abTARS can also run without it.

Start with [What is abTARS](https://aksika.github.io/abtars/why) and the [quick start](https://aksika.github.io/abtars/quickstart).

## Requirements

- Node.js 26 or newer
- A Telegram or Discord bot, if you want to use a messaging platform
- A configured provider for your chosen route

See the [installation guide](https://aksika.github.io/abtars/install) to get started. The Pi runtime is required for the API route and Pi coding features; the standard installer sets it up.
