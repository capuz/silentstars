---
repo: "vincemakes/kiso"
name: "kiso"
description: "The durable runtime for AI agents: event-sourced sessions, approvals that persist across processes, exact resume after a crash. A 2,200-line TypeScript kernel, and kiso-code, the coding agent built on it."
readmeQualityOk: true
url: "https://github.com/vincemakes/kiso"
homepage: "https://kiso.work"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["agent-framework", "ai-agent", "anthropic", "cli", "coding-agent", "deepseek", "durable-execution", "event-sourcing", "llm", "openai"]
stars: 62
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-03T12:11:15Z"
lastCommitAt: "2026-10-06T10:42:44Z"
lastReleaseAt: "2026-09-21T15:33:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 44
maintainers: ["vincemakes"]
openGraphImageUrl: "https://opengraph.githubassets.com/65f7724fd095a678a01b5af682033cc518cbb5eefbcffc5750f0f69638be0cb5/vincemakes/kiso"
---

**kiso is an AI coding agent for your terminal.** It runs on its own agent runtime, which you can also embed in your own program through [the SDK](#using-it).

- **It picks up where it left off.** Every approval and tool result is on disk the moment it happens. After a crash, a `kill -9` or a closed terminal, `kiso resume` continues from the durable committed prefix: generation still streaming when it died is regenerated, and a side effect whose outcome is unknown goes to a human rather than being repeated.
- **Long tasks don't overflow.** Past half the window, kiso compacts at the end of a phase, and each new summary replaces the last instead of piling up. The window is known per model; when an endpoint refuses an oversized request, kiso learns its real limit.
- **You decide, and the floor holds.** Four approval modes and a don't-ask switch; "don't ask again" becomes a rule file you can delete; even in full access, a command that would destroy something unrecoverable is refused.
- **Any model you have.** DeepSeek, Claude, GPT, a ChatGPT subscription, and any OpenAI-compatible endpoint or gateway. Keys never go in the config file.
- **You can see where it goes.** Each turn ends…
