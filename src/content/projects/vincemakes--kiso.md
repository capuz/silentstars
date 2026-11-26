---
repo: "vincemakes/kiso"
name: "kiso"
description: "A durable agent harness: sessions that survive a crash or kill -9, approvals that persist, background tasks, sessions that start and message each other (preview), any model. A 2,200-line TypeScript kernel, with a coding agent for the terminal and the browser built on it."
readmeQualityOk: true
url: "https://github.com/vincemakes/kiso"
homepage: "https://kiso.work"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["agent-framework", "ai-agent", "anthropic", "cli", "coding-agent", "deepseek", "durable-execution", "event-sourcing", "llm", "openai"]
stars: 98
forks: 10
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 9
createdAt: "2026-08-03T12:11:15Z"
lastCommitAt: "2026-11-26T12:56:29Z"
lastReleaseAt: "2026-09-21T15:33:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 40
maintainers: ["vincemakes"]
openGraphImageUrl: "https://opengraph.githubassets.com/23affb29c185fa122ec2adff3d8735d4b05f663d7912f05c5f50ef50b42c6fac/vincemakes/kiso"
---

### A durable agent harness that picks up where it left off.

**In your terminal or your browser. Any model you have. A `kill -9` costs you nothing.**<br>
A TypeScript kernel capped at 2,200 lines, and a coding agent built on it.

**[Install](#quick-start)** &nbsp;·&nbsp; **[kiso web](#kiso-web)** &nbsp;·&nbsp; **[Docs](#documentation)** &nbsp;·&nbsp; **[kiso.work](https://kiso.work)** &nbsp;·&nbsp; **English** · [简体中文](https://github.com/vincemakes/kiso/blob/HEAD/README.zh.md)

## Is kiso for you?

- **You switch models.** DeepSeek, Claude, GPT, a ChatGPT subscription, or any OpenAI-compatible endpoint or gateway, with the effort level each one accepts.
- **Your tasks are long, and things die.** A crash, a `kill -9`, a closed laptop: `kiso resume` continues from what was committed. A command whose outcome is unknown goes to you, never silently repeated.
- **You want to see where it goes.** Every turn ends with its input, output, cache hits and speed; every session is a JSONL log you can read.
- **You build agents yourself.** The harness is a library: a durable session store, an agent factory and a typed event stream.
