---
repo: "Wolido/async-subagent-isolation"
name: "async-subagent-isolation"
description: "Fix context rot & pollution in long AI agent sessions. Subagents run in isolated processes — main agent stays read-only. Context isolation via process isolation."
originalDescription: "Fix context rot & pollution in long AI agent sessions. Subagents run in isolated processes — main agent stays read-only. Context isolation via process isolation."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Wolido/async-subagent-isolation"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-architecture", "agent-delegation", "agent-memory", "ai-agent", "async-agent", "coding-agent", "context-engineering", "context-isolation", "context-management", "context-pollution"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-12T23:09:53Z"
lastCommitAt: "2026-11-16T04:26:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 48
maintainers: ["Wolido"]
openGraphImageUrl: "https://opengraph.githubassets.com/c31d8118a11e1ea1537ca3d8a835110e655e67c1fdce5aa4379ec5adb04b4e9f/Wolido/async-subagent-isolation"
---

Is your AI agent “forgetting” things, producing worse output, or even modifying files on its own after a long session? These are typical symptoms of context explosion, context rot, and context pollution. **async-subagent-isolation** is an extension for [Pi Agent](https://github.com/earendil-works/pi) and the **asynchronous evolution** of [subagent-isolation](https://github.com/Wolido/subagent-isolation) (the synchronous version). It solves these problems with subagent process isolation.

The core constraint is unchanged: **the main agent may not touch code**. It has no `write`, no `edit`, and no `bash`. It has only four read-only tools, `read`, `grep`, `find`, and `ls`, plus one `subagent` delegation tool. All work that modifies files, runs commands, or executes logic is handed to subagents. Two core selling points follow from this. First, **skill-level prompt isolation**: each subagent runs in its own `pi` process, with its own agent definition file (such as `coder.md`) and skill allowlist. It does not inherit the main agent's prompts or skills, so none of the main agent's skills get in. Second, a **division-of-labor model**: the main agent only splits tasks, schedules, and…
